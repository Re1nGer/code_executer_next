import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const pythonCode = `# Python code here
def greet(name):
    return "Hello, " + name + "!"
print(greet("World"))`

const SolutionsTab = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return <>
        <div className={'p-[10px] flex gap-[10px] items-center bg-[#001528]'}>
            <button onClick={() => handleTabClick(1)}
                    style={{ background: activeTab === 1 ? '#626ee3' : 'transparent' }}
                    className={'rounded-[4px] font-bold text-white px-[6px] py-[1px]'}>Solution 1</button>
            <button onClick={() => handleTabClick(2)}
                    style={{ background: activeTab === 2 ? '#626ee3' : 'transparent' }}
                    className={'rounded-[4px] font-bold text-white px-[6px] py-[1px] bg-transparent'}>Solution 2</button>
        </div>
        <SolutionTab code={pythonCode} />
    </>
}

const SolutionTab = ({ code = '' }) => {

    return <div>
        <Editor
            height={'60vh'}
            theme={'vs-dark'}
            options={{ readOnly: true }}
            defaultValue={code}
            language={'python'}
        />
    </div>
}


export default SolutionsTab
