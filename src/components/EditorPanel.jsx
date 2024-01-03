import {Editor} from "@monaco-editor/react";

const EditorPanel = ({ width }) => {


    return <div className={"flex flex-col h-full w-screen min-w-[1px]"} style={{ flexBasis: width }}>
        <div className={"flex flex-col"}>
            <div className={"bg-[#15314b] text-white font-bold flex rounded-[4px]"}>
                <button className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}>Your Solutions</button>
            </div>
            <div className={'w-full'}>
                <Editor height={"500px"}
                        defaultLanguage={"javascript"}
                        theme={"vs-dark"}
                />
            </div>
            <div
                className={"w-full h-[15px] bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]"}></div>
            <div className={"flex justify-between bg-[#15314b] flex-1"}>
                <div className={"text-white font-bold flex rounded-[4px]"}>
                    <button className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}>Custom Output</button>
                    <button className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}>Raw Output</button>
                    <button className={"px-[15px] py-[10px]"}></button>
                </div>
                <button className={"bg-[#008529] px-[15px] text-[14px] text-white font-open_sans"}>Submit code</button>
            </div>
            <div className={"p-[20px] bg-[#001528] h-full min-h-[350px]"}>
                <h3 className={"text-[#445d6e] flex items-center h-full text-center w-full justify-center font-bold font-open_sans"}>Run
                    Or Submit your code when you are ready</h3>
            </div>
        </div>
    </div>;
}

export default EditorPanel