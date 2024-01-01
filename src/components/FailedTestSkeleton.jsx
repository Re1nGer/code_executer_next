import CrossIcon from "@/icons/CrossIcon.svg?react";

const FailTestSkeleton = () => {
    return <div
        className={"rounded-[4px] flex gap-[10px] items-center h-[50px] mt-[10px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
        <CrossIcon className={"h-[24px] w-[24px] text-[#c54242]"}/>
        <div className={"w-[160px] py-[7px] px-[9px] h-[13px] bg-[#c54242] rounded-[4px]"}></div>
    </div>;
}

export default FailTestSkeleton
