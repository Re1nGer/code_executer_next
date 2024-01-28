import Link from "next/link";
import ListIcon from "@/icons/ListIcon.svg";
import ArrowIcon from "@/icons/Arrow.svg";
import ShareIcon from "@/icons/ShareIcon.svg";
import BugIcon from "@/icons/BugIcon.svg";
import SettingIcon from "@/icons/SettingIcon.svg";
import ProgrammingLanguageDropdown from "@/components/execute/ProgrammingLanguageDropdown";
import Timer from "@/components/execute/Timer";

const ExecuteHeader = () => {

    return <div className={"flex justify-between rounded-[4px] mb-[15px]"}>
        <div className={"flex gap-[15px]"}>
            <Link href={"/"}
                  className={"rounded-[4px] transition-colors bg-[#626ee3] text-white p-[10px]"}>AlgoExpert</Link>
            <Link href={"/questions"}
                  className={"bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                <ListIcon className={"max-w-[25px] max-h-[25px]"}/>
            </Link>
            <button
                className={"bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                <ArrowIcon className={"max-w-[25px] max-h-[25px]"}/>
            </button>
            <ProgrammingLanguageDropdown />
            <button
                className={"bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                <ShareIcon className={"max-w-[25px] max-h-[25px]"}/>
            </button>
            <Timer />
        </div>
        <div className={"flex gap-[.5rem]"}>
            <button
                className={"bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                <BugIcon className={"max-w-[25px] max-h-[25px]"}/>
            </button>
            <button
                className={"bg-[#15314b] text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]"}>
                <SettingIcon className={"max-w-[25px] max-h-[25px]"}/>
            </button>
        </div>
    </div>;
};


export default ExecuteHeader;