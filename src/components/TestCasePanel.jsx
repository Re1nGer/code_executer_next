import { Editor } from "@monaco-editor/react";

const TestCasePanel = ({ isBlurOn }) => {

    return <div className={"p-[20px] bg-[#001528] h-full"} style={{ filter: isBlurOn ? 'blur(4px)' : 'blur(0)'}}>
        <div className={"flex flex-col text-white"}>
            <div className={"flex flex-col gap-[1rem]"}>
                <h1 className={"font-bold font-open_sans text-[18px]"}>Test Case 1</h1>
                <pre className={'language-json'}><code className={'language-json line-numbers'}>
                    array: [1,2,3,4,5] { '\n' }
                    sequence:[1,2,3,4,5,6]
                </code>
                </pre>
{/*
                <Editor height={"90px"} theme={"vs-dark"}
                        defaultValue={"{\n\tarray: [1,2,3,4,5], \n\tsequence:[1,2,3,4,5,6]\n}"}/>
*/}
            </div>
        </div>
    </div>;
}

export default TestCasePanel