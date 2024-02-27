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
                <button key={item.id}
                        onClick={() => handleTabClick(idx)}
                        style={{ background: activeTab === idx ? '#626ee3' : 'transparent' }}
                        className={'rounded-[4px] font-bold text-white px-[6px] py-[1px]'}>{`Solution ${idx + 1}`}</button>
            )) }
        </div>
        <SolutionTab solution={defaultSolutions[activeTab]} />
    </>
}

const SolutionTab = ({ solution }) => {

    return <div>
        <Editor
            height={'60vh'}
            theme={'vs-dark'}
            options={{ readOnly: true }}
            value={solution?.code || ''}
            language={getLanguageFromId(solution?.languageId)}
            defaultLanguage={getLanguageFromId(solution?.languageId)}
        />
    </div>
}


const getLanguageFromId = (id) => {
    switch (id) {
        case 4:
            return 'python'
        case 6:
            return 'go'

        default:
            return 'python'
    }
}


export default SolutionsTab
