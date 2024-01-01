import TickIcon from "@/icons/TickIcon.svg?react";

const SuccessTestSkeleton = () => {
    return <div
        className={"rounded-[4px] flex items-center gap-[10px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
        <TickIcon className={"h-[24px] w-[24px] text-[#3f8854]"}/>
        <div
            className={"w-[160px] py-[7px] px-[9px] h-[13px] bg-[#3f8854] rounded-[4px]"}></div>
    </div>;
}

export default SuccessTestSkeleton
