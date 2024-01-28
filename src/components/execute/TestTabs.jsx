import { useState } from "react";
import TestCasePanel from "@/components/TestCasePanel";
import EyeIcon from "@/icons/EyeIcon.svg";
import EyeCrossedIcon from "@/icons/EyeCrossed.svg";
import InfoIcon from "@/icons/InfoIcon.svg";
import QuickTestPanel from "@/components/execute/QuickTestPanel";
import SandboxPanel from "@/components/execute/SandboxPanel";

const TestTabs = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isBlurOn, setIsBlurOn] = useState(true);

    const handleActiveTab = (idx) => {
        setActiveTab(idx);
    }

    const getActiveTabStyle = (tabIndex) => {
        return { background: tabIndex === activeTab ? '#001528' : '#15314b' }
    }

    const handleToggleBlur = () => {
        setIsBlurOn(!isBlurOn);
    }

    const renderTab = () => {
        switch (activeTab) {
            case 0:
                return <TestCasePanel  isBlurOn={isBlurOn} />
            case 1:
                return <QuickTestPanel />
            case 2:
                return <SandboxPanel />
            default:
                return <TestCasePanel isBlurOn={isBlurOn} />
        }
    }


    return <div className={"flex flex-col h-full"}>
        <div className={"flex justify-between bg-[#15314b]"}>
            <div className={"text-white font-bold flex rounded-[4px]"}>
                <button
                    style={getActiveTabStyle(0)}
                    tabIndex={0} className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}
                    onClick={() => handleActiveTab(0)}>Tests</button>
                <button
                    style={getActiveTabStyle(1)}
                    tabIndex={1} className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}
                    onClick={() => handleActiveTab(1)}>Quick Test</button>
                <button
                    style={getActiveTabStyle(2)}
                    tabIndex={2} className={"px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]"}
                    onClick={() => handleActiveTab(2)}>Sandbox</button>
                <button className={"px-[15px] py-[10px]"}></button>
            </div>
            <div className={"flex gap-[.5rem] text-white"}>
                <button onClick={handleToggleBlur}
                        className={"bg-[#15314b] cursor-pointer transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                    { isBlurOn ? (
                        <EyeIcon className={"max-w-[25px] max-h-[25px]"} />
                    ) : <EyeCrossedIcon className={"max-w-[25px] max-h-[25px]"} /> }
                </button>
                <button
                    className={"bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                    <InfoIcon className={"max-w-[25px] max-h-[25px]"} />
                </button>
            </div>
        </div>
        { renderTab() }
    </div>;
}

export default TestTabs;