import { Editor } from "@monaco-editor/react";
import { useQuestionContext } from "@/hooks/useQuestionContext";
import { useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import ScratchpadLoader from "@/components/ScratchpadLoader";
import TickIcon from "@/icons/TickIcon.svg";
import { useSession } from "next-auth/react";
import { useHeaderContext } from "@/hooks/useHeaderContext";
import CustomOutputTab from "@/components/CustomOutputTab";
import {useResizeWindow} from "@/hooks/useResizeWindow";

const EditorPanel = ({ width }) => {

    const [activeSolution, setActiveSolution] = useState(0);

    const [runTabActiveIdx, setRunTabActiveIdx] = useState(0);

    const { question: { solutions = [], uid, resources  }, currentLanguage } = useQuestionContext();

    const [testCases, setTestCases] = useState([]);

    const [isSaving, setIsSaving] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [hasFailed, setHasFailed] = useState(false);

    const userSolutions = solutions?.filter(item => item.userId && item.languageId === currentLanguage.id);

    const fileLink = resources.find(item => item.languageId === currentLanguage.id)?.archiveLink;

    const currentSolution = userSolutions[activeSolution];

    const [localCode, setLocalCode] = useState(currentSolution?.code);

    const debouncedCodeInput = useDebounce(localCode, 300);

    const { data } = useSession();

    const isLoggedIn = useMemo(() => data?.user, [data?.user]);

    const { setIsLoginModalOpen } = useHeaderContext();

    const getActiveTabStyle = (tabIndex) => {
        return { background: tabIndex === runTabActiveIdx ? '#001528' : '#15314b' }
    }

    const {
        startResize,
        resizeFrame,
        stopResize,
        height,
    } = useResizeWindow();

    const handleChange = (value) => {
        if (isLoggedIn) setIsSaving(true);
        setLocalCode(value);
    };

    const renderRunTab = () => {
        switch (runTabActiveIdx) {
            case 0:
                return <CustomOutputTab
                        testCases={testCases}
                        isExecuting={isSubmitting}
                        hasFailed={hasFailed}
                    />
            case 1:
                return <RawOutputTab />
            default:
                return <CustomOutputTab
                        testCases={testCases}
                        isExecuting={isSubmitting}
                        hasFailed={hasFailed}
                />
        }
    };

    const getSubmission = async (submissionToken) => {
        try {
            const subRes = await fetch(`/api/submission?token=${submissionToken}&language=${currentLanguage.language}`);

            const ans = await subRes.json();

            setTestCases(ans?.testOutput);

            const hasAnyFailed = ans?.testOutput.some(item => !item.passed);

            setHasFailed(hasAnyFailed);

            if (!hasAnyFailed) {
                await markAsSolved();
            }

        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false)
        }
    }

    const executeCode = async (e) => {
        if (!isLoggedIn) {
            setIsLoginModalOpen(true)
            return;
        }
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/execute', {
                method: 'POST',
                body: JSON.stringify({
                    fileLink: fileLink,
                    userCode: localCode || currentSolution?.code || '',
                    language: currentLanguage.language
                })
            });

            const { submissionToken } = await res.json();

            //To avoid throttling Judge0 server
            setTimeout(async () => {
                await getSubmission(submissionToken);
            }, [1000]);

        } catch (error) {
            console.log(error);
        }
    }

    const markAsSolved = async () => {
        try {
            await fetch('/api/questions/mark', { method: 'PUT', body: JSON.stringify({
                    uid: uid,
                })
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    const saveCode = async () => {
        if (!uid || !data) return;
        try {
            await fetch(`/api/questions/${uid}`, {
                method: 'PUT', body: JSON.stringify({ code: debouncedCodeInput, uid: uid, id: currentSolution?.id, language: currentLanguage.id }) });
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsSaving(false);
        }
    };

    useMemo(() => saveCode(), [debouncedCodeInput])

    useMemo(() => setLocalCode(userSolutions[activeSolution]?.code), [activeSolution, currentLanguage.id])


    const handleTabClick = (idx) => setActiveSolution(idx);

    return <div className={"flex flex-col w-screen min-w-[1px]"}
                onMouseMove={resizeFrame}
                onMouseUp={stopResize}
                style={{ flexBasis: width, height: `${window.innerHeight - height}px` }}>
        <div className={"flex flex-col"}>
            <div className={'bg-[#15314b] text-white font-bold flex rounded-[4px]'}>
                <button tabIndex={0} className={'px-[15px] py-[10px] prompt__tab bg-[rgb(0_21_40)]'}>Your Solutions</button>
            </div>
            <div className={'p-[10px] flex gap-[10px] items-center bg-[#001528]'}>
                { userSolutions?.map((item, idx) => (
                    <button key={item.id} onClick={() => handleTabClick(idx)}
                            style={{ background: activeSolution === idx ? '#626ee3' : 'transparent' }}
                            className={'rounded-[4px] font-bold text-white px-[6px] py-[1px]'}>{`Solution ${idx + 1}`}</button>
                )) }
            </div>
            <div className={'w-full relative'}>
                <Editor
                    options={{ autoIndent: "full" }}
                    height={`${window.innerHeight   - height}px`}
                    defaultLanguage={currentLanguage.language}
                    defaultValue={currentSolution?.code || ''}
                    value={debouncedCodeInput || currentSolution?.code || ''}
                    language={currentLanguage.language}
                    theme={"vs-dark"}
                    onChange={handleChange}
                />
                { isLoggedIn ? (
                    <div className={'absolute top-0 right-[10px]'}>
                        { isSaving ? (
                            <ScratchpadLoader />
                        ) : (
                            <TickIcon className={'w-[20px] h-[20px] text-white'} />
                        ) }
                    </div>
                ) : null }
            </div>
            <div
                onMouseDown={startResize}
                className={"w-full h-[20px] py-[.5rem] bg-transparent cursor-row-resize transition-colors hover:bg-[#626ee3]"}>

            </div>
            <div style={{ height: `${height}px` }}>
                <div className={"flex justify-between bg-[#15314b]"}>
                    <div className={"text-white font-bold flex rounded-[4px] h-full"}>
                        <button tabIndex={0}
                                className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}
                                style={getActiveTabStyle(0)}
                                onClick={() => setRunTabActiveIdx(0)}>Custom Output</button>
                        <button tabIndex={1}
                                className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}
                                style={getActiveTabStyle(1)}
                                onClick={() => setRunTabActiveIdx(1)}>Raw Output</button>
                        <button className={"px-[15px] py-[10px]"}></button>
                    </div>
                    <button type={'button'} disabled={isSubmitting}
                            style={{ opacity: isSubmitting ? .5 : 1 }}
                            className={"bg-[#008529] px-[15px] text-[14px] text-white font-open_sans"}
                            onClick={executeCode}>Submit code</button>
                </div>
                <div className={"p-[20px] bg-[#001528] shrink-0 h-full"}>
                    { renderRunTab() }
                </div>
            </div>
        </div>
    </div>;
}

export default EditorPanel


const RawOutputTab = () => {
    return <></>
};