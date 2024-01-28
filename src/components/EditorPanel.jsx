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

const EditorPanel = ({ width }) => {

    const [activeSolution, setActiveSolution] = useState(0);

    const [runTabActiveIdx, setRunTabActiveIdx] = useState(0);

    const { question: { solutions = [], uid } } = useQuestionContext();

    const [testCases, setTestCases] = useState([]);

    const [isSaving, setIsSaving] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [hasFailed, setHasFailed] = useState(false);

    const userSolutions = useMemo(() => solutions?.filter(item => item.userId), [solutions]);

    const [localCode, setLocalCode] = useState(userSolutions.length > 0 ? userSolutions[activeSolution]?.code : '');

    const debouncedCodeInput = useDebounce(localCode, 300);

    const getActiveTabStyle = (tabIndex) => {
        return { background: tabIndex === runTabActiveIdx ? '#001528' : '#15314b' }
    }

    const handleChange = (value) => {
        setIsSaving(true);
        setLocalCode(value);
    }

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
    }

    const executeCode = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/api/execute', {
                method: 'POST',
                body: JSON.stringify({
                    //filelink should be fetched from the question
                    fileLink: 'https://mcwlmebmwa37nl3e.public.blob.vercel-storage.com/validate_sub-c5gw4iPng2HteYCRnhwof1kLoA2MPp.zip',
                    userCode: localCode
                })
            });

            const { submissionToken } = await res.json();

            //To avoid throttling Judge0 server
            setTimeout(async () => {
                try {
                    const subRes = await fetch(`/api/submission?token=${submissionToken}`);

                    const ans = await subRes.json();

                    setTestCases(ans?.testOutput);

                    const hasAnyFailed = ans?.testOutput.some(item => !item.passed);

                    if (hasAnyFailed) setHasFailed(true);

                    else setHasFailed(false);

                }
                catch (error) {
                    console.log(error);
                }
                finally {
                    setIsSubmitting(false)
                }
            }, [2000]);

        } catch (error) {
            console.log(error);
        }
    }

    const saveCode = async () => {
        try {
            await fetch(`/api/questions/${uid}`, { method: 'PUT', body: JSON.stringify({ code: debouncedCodeInput, uid: uid }) });
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsSaving(false);
        }
    }

    useEffect(() => {
        if (uid) saveCode();
    }, [debouncedCodeInput]);

    useEffect(() => {
        setLocalCode(userSolutions[activeSolution]?.code)
    }, [solutions]);

    const handleTabClick = (idx) => setActiveSolution(idx);

    return <div className={"flex flex-col h-full w-screen min-w-[1px]"} style={{ flexBasis: width }}>
        <div className={"flex flex-col"}>
            <div className={'bg-[#15314b] text-white font-bold flex rounded-[4px]'}>
                <button tabIndex={0} className={'px-[15px] py-[10px] prompt__tab'}>Your Solutions</button>
            </div>
            <div className={'p-[10px] flex gap-[10px] items-center bg-[#001528]'}>
                { userSolutions?.map((item, idx) => (
                    <button key={item} onClick={() => handleTabClick(idx)}
                            style={{ background: activeSolution === idx ? '#626ee3' : 'transparent' }}
                            className={'rounded-[4px] font-bold text-white px-[6px] py-[1px]'}>{`Solution ${idx + 1}`}</button>
                )) }
            </div>
            <div className={'w-full relative'}>
                <Editor height={"500px"}
                        defaultLanguage={"python"}
                        defaultValue={localCode}
                        value={debouncedCodeInput}
                        theme={"vs-dark"}
                        onChange={handleChange}
                />
                <div className={'absolute top-0 right-[10px]'}>
                    { isSaving ? (
                        <ScratchpadLoader />
                    ) : (
                        <TickIcon className={'w-[20px] h-[20px] text-white'} />
                    ) }
                </div>
            </div>
            <div
                className={"w-full h-[15px] bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]"}></div>
            <div className={"flex justify-between bg-[#15314b] flex-1"}>
                <div className={"text-white font-bold flex rounded-[4px]"}>
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
                <button type={'button'} className={"bg-[#008529] px-[15px] text-[14px] text-white font-open_sans"} onClick={executeCode}>Submit code</button>
            </div>
            <div className={"p-[20px] bg-[#001528] h-full flex-1 basis-[35%] shrink-0"}>
                { renderRunTab() }
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
                ) : null }
                <motion.div variants={variants} initial={'hidden'} animate={"shown"}
                            style={{ border: hasFailed ? '1px solid red' : '' }}
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

const TestCase = ({ passed, num }) => {

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
                    <h1 className={'text-[#e9e9e9] items-center font-bold mb-[5px]'}>Expected Output</h1>
                    <pre className={'language-json line-numbers text-white'}>
                    <code className={'language-json line-numbers'}>true</code>
                </pre>
                </div>
                <div className={'mb-[30px]'}>
                    <h1 className={'text-[#e9e9e9] items-center font-bold mb-[5px]'}>Your Code's Output</h1>
                    <pre className={'language-json line-numbers'}>
                    <code className={'language-json'}>true</code>
                </pre>
                </div>
            </div>
        ) : null }
    </motion.section>
};

const RawOutputTab = () => {
    return <></>
};