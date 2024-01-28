import { Editor } from "@monaco-editor/react";

const TestCasePanel = ({ handleBlur }) => {
    return <div className={"p-[20px] bg-[#001528] blur-[4px] h-full"}>
        <div className={"flex flex-col text-white"}>
            <div className={"flex flex-col gap-[1rem]"}>
                <h1 className={"font-bold font-open_sans text-[18px]"}>Test Case 1</h1>
                <Editor height={"90px"} theme={"vs-dark"}
                        defaultValue={"{\n\tarray: [1,2,3,4,5], \n\tsequence:[1,2,3,4,5,6]\n}"}/>
            </div>
        </div>
    </div>;
}

export default TestCasePanel