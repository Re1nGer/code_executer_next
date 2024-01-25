import { useState } from "react";
import ScratchPadTab from "@/components/ScratchPadTab";
import PromptTab from "@/components/PromptTab";
import SolutionsTab from "@/components/SolutionsTab";
import VideoExplanationTab from "@/components/VideoExplanationTab";
import {useQuestionContext} from "@/hooks/useQuestionContext";

const PromptTabs = () => {

    const [activeTab, setActiveTab] = useState(1);

    const { isLoading, isScratchpadSaving } = useQuestionContext();

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    const getActiveTabStyle = (tabIndex) => {
        return { background: tabIndex === activeTab ? '#001528' : '#15314b' }
    }

    const renderActiveTab = () => {
        switch (activeTab) {
            case 1:
                return <PromptTab />
            case 2:
                return <ScratchPadTab />
            case 3:
                return <SolutionsTab />
            case 4:
                return <VideoExplanationTab />
            default:
                return <PromptTab />
        }
    }

    return (
        <>
            <div className={'bg-[#15314b] text-white font-bold flex rounded-[4px]'}>
                <button
                        tabIndex={1}
                        className={'px-[15px] py-[10px] prompt__tab'}
                        style={getActiveTabStyle(1)}
                        onClick={() => handleTabClick(1)}
                        disabled={isScratchpadSaving}
                >Prompt
                </button>
                <button
                        tabIndex={2}
                        disabled={isLoading}
                        className={'px-[15px] py-[10px] prompt__tab'}
                        style={getActiveTabStyle(2)}
                        onClick={() => handleTabClick(2)}
                >ScratchPad
                </button>
                <button
                        tabIndex={3}
                        className={'px-[15px] py-[10px] prompt__tab'}
                        style={getActiveTabStyle(3)}
                        onClick={() => handleTabClick(3)}
                        disabled={isScratchpadSaving}
                >Solutions
                </button>
                <button
                        tabIndex={4}
                        className={'px-[15px] py-[10px] prompt__tab'}
                        style={getActiveTabStyle(4)}
                        onClick={() => handleTabClick(4)}
                        disabled={isScratchpadSaving}
                >Video Explanations
                </button>
                <button className={'px-[15px] py-[10px]'}></button>
            </div>
            { renderActiveTab() }
        </>
    );
}

export default PromptTabs;