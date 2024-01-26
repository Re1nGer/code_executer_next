import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { useQuestionContext } from "@/hooks/useQuestionContext";


const SolutionsTab = () => {

    const [activeTab, setActiveTab] = useState(0);

    const { question: { solutions = [] } } = useQuestionContext();

    const defaultSolutions = solutions.filter(item => !item.userId);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return <>
        <div className={'p-[10px] flex gap-[10px] items-center bg-[#001528]'}>
            { defaultSolutions?.map((item, idx) => (
                <button key={item} onClick={() => handleTabClick(idx)}
                        style={{ background: activeTab === idx ? '#626ee3' : 'transparent' }}
                        className={'rounded-[4px] font-bold text-white px-[6px] py-[1px]'}>{`Solution ${idx + 1}`}</button>
            )) }
        </div>
        <SolutionTab code={defaultSolutions[activeTab]?.code} />
    </>
}

const SolutionTab = ({ code = '' }) => {

    return <div>
        <Editor
            height={'60vh'}
            theme={'vs-dark'}
            options={{ readOnly: true }}
            value={code}
            language={'python'}
        />
    </div>
}


export default SolutionsTab
