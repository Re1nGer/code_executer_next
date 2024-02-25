import { Editor } from "@monaco-editor/react";
import { useQuestionContext } from "@/hooks/useQuestionContext";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import ScratchpadLoader from "@/components/ScratchpadLoader";
import TickIcon from "@/icons/TickIcon.svg";
import CrossIcon from '@/icons/CrossIcon2.svg';
import ArrowIcon from '@/icons/ArrowDown.svg';
import QuestionsLoader from "@/components/QuestionsLoader";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useHeaderContext } from "@/hooks/useHeaderContext";

const EditorPanel = ({ width }) => {

    const [activeSolution, setActiveSolution] = useState(0);

    const [runTabActiveIdx, setRunTabActiveIdx] = useState(0);

    const { question: { solutions = [], uid, resources  }, currentLanguage } = useQuestionContext();

    const fileLink = resources.find(item => item.languageId === currentLanguage.id)?.archiveLink;

    const [testCases, setTestCases] = useState([]);

    const [isSaving, setIsSaving] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [hasFailed, setHasFailed] = useState(false);

    const userSolutions = useMemo(() => solutions?.filter(item => item.userId && item.languageId === currentLanguage.id), [solutions, currentLanguage.id]);

    const currentSolution = useMemo(() => userSolutions[activeSolution], [activeSolution, userSolutions]);

    const [localCode, setLocalCode] = useState(currentSolution?.code);

    console.log(localCode, currentLanguage, userSolutions, currentSolution);

    const debouncedCodeInput = useDebounce(localCode, 300);

    const [outputH, setOutputH] = useState(300); //default width of the window

    const { data } = useSession();

    const isLoggedIn = useMemo(() => data?.user, [data?.user]);

    const { setIsLoginModalOpen } = useHeaderContext();

    const [drag, setDrag] = useState({
        active: false,
        y: ""
    });

    const getActiveTabStyle = (tabIndex) => {
        return { background: tabIndex === runTabActiveIdx ? '#001528' : '#15314b' }
    }

    const resizeFrame = e => {
        const { active, x, y } = drag;
        if (active) {
            const yDiff = Math.abs(y - e.clientY);

            const newH = y > e.clientY ? outputH + yDiff : outputH - yDiff;

            setDrag({ ...drag, y: e.clientY });

            setOutputH(newH);
        }
    };

    const startResize = e => {
        setDrag({
            active: true,
            y: e.clientY
        });
    };

    const stopResize = e => {
        setDrag({ ...drag, active: false });
    };

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
                    userCode: localCode,
                    language: currentLanguage.language
                })
            });

            const { submissionToken } = await res.json();

            //To avoid throttling Judge0 server
            setTimeout(async () => {
                try {
                    const subRes = await fetch(`/api/submission?token=${submissionToken}&language=${currentLanguage.language}`);

                    const ans = await subRes.json();

                    setTestCases(ans?.testOutput);

                    const hasAnyFailed = ans?.testOutput.some(item => !item.passed);

                    setHasFailed(hasAnyFailed);

                    if (!hasAnyFailed) {
                        await markAsSolved();
                    }

                }
                catch (error) {
                    console.log(error);
                }
                finally {
                    setIsSubmitting(false)
                }
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

    useEffect(() => {
        if (uid && data) saveCode();
    }, [debouncedCodeInput]);

    useEffect(() => {
        setLocalCode(userSolutions[activeSolution]?.code)
    }, [solutions, currentLanguage.id]);

    const handleTabClick = (idx) => setActiveSolution(idx);

    return <div className={"flex flex-col w-screen min-w-[1px]"}
                onMouseMove={resizeFrame}
                onMouseUp={stopResize}
                style={{ flexBasis: width, height: `${window.innerHeight - outputH}px` }}>
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
                        height={`${window.innerHeight   - outputH}px`}
                        defaultLanguage={currentLanguage.language}
                        defaultValue={localCode || ''}
                        value={debouncedCodeInput || ''}
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
            <div style={{ height: `${outputH}px` }}>
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


const CustomOutputTab = ({ testCases, isExecuting, hasFailed }) => {

    //TODO: stagger children animation
    const variants= {
        hidden : {
            opacity: 0,
        },
        shown: {
            opacity: 1,
            transition: {
                delay: .5,
                when: "beforeChildren",
                staggerChildren: 0.3,
                ease: "easeInOut"
            },
        }
    }

    return <div className={'overflow-y-auto max-h-[400px] product__test_scrollbar h-full'}>
        { (!isExecuting && testCases.length > 0) ? (
            <>
                { hasFailed ? (
                    <h1 className={'text-white font-bold text-[18px] font-open_sans text-center mb-[.5rem]'}>Aww, some of the tests cases failed.</h1>
                ) : <h1 className={'text-white font-bold text-[18px] font-open_sans text-center mb-[.5rem]'}>Yay, All test cases passed !</h1> }
                <motion.div variants={variants} initial={'hidden'} animate={"shown"}
                            style={{ border: hasFailed ? '1px solid red' : '1px solid green' }}
                            className={'flex flex-col gap-[.5rem]'}>
                    { testCases.map(item => <TestCase key={item.data} {...item} />) }
                </motion.div>
            </>
        ) : ( isExecuting ? (
                    <div className={'flex justify-center items-center h-full'}>
                        <QuestionsLoader />
                    </div>
                ) : (
                    <h3 className={"text-[#445d6e] flex items-center h-full text-center w-full justify-center font-bold font-open_sans"}>Run
                        Or Submit your code when you are ready</h3>
                )
            )
        }
    </div>
};

const TestCase = ({ passed, num, error, data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleExpandClick = () => {
        setIsOpen(!isOpen);
    }

    return <motion.section
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className={'bg-[#15314b] text-white rounded-[4px] p-[1rem] cursor-pointer'}
               onClick={handleExpandClick}>
        <div className={'flex justify-between'}>
            { passed ? (
                <div className={'flex gap-[5px]'}>
                    <TickIcon className={'w-[20px] text-[#00af32]'} />
                    <h1> Test Case {num} passed! </h1>
                </div>
            ) : (
                <div className={'flex gap-[5px]'}>
                    <CrossIcon className={'w-[20px] text-red-600'} />
                    <h1> Test Case {num} failed. </h1>
                </div>
            ) }
            <div>
                <ArrowIcon className={'w-[15px]'} />
            </div>
        </div>
        { isOpen ? (
            <div className={'p-[20px]'}>
                <div className={'mb-[30px]'}>
                    <h1 className={'text-[#e9e9e9] items-center font-bold mb-[5px]'}>Output</h1>
                    <pre className={'language-json line-numbers text-white'}>
                    <code className={'language-json line-numbers'}>{ error ? error : data }</code>
                </pre>
                </div>
            </div>
        ) : null }
    </motion.section>
};

const RawOutputTab = () => {
    return <></>
};