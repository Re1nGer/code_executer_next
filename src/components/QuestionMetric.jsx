import LockIcon from "@/icons/LockIcon.svg";

const QuestionMetric = () => {
    return <section className={"px-[20px] py-[100px] bg-[#f6f9fc] mb-[80px]"}>
        <div className={"w-full flex flex-col items-center"}>
            <h2 className={"mb-[10px] text-[#02203c] text-[24px] text-center"}>45 Questions Completed out of 200</h2>
            <div className={"bg-[#f5f5f5] rounded-[4px] h-[25px] mx-auto w-[320px] md:w-[485px] relative mb-[100px]"}>
                <div className={"bg-[#02203c] w-[22.5%] h-full text-center"}></div>
                <div className={"absolute left-[50%] top-0 text-[#02203c] text-[20px]"}>23%</div>
                <div
                    className={"absolute left-[calc(53%-1px)] top-[-3px] opacity-[.5] bg-gray-500 w-[5px] h-[32px]"}></div>
                <div
                    className={"absolute left-[calc(50%-1px)] top-[2.5rem] bg-white rounded-[4px] p-[5px] z-10 shadow-[0_1px_6px_rgba(50,50,93,.2)] questions__arrow"}>
                    <LockIcon className={"w-[25px] h-[25px] text-gray-500"}/>
                </div>
            </div>
            <div className={"flex flex-col md:flex-row gap-[40px] text-[14px] text-white"}>
                <button
                    className={"bg-gray-500 cursor-not-allowed rounded-[4px] px-[40px] whitespace-nowrap h-[40px] border-0"}>AlgoExpert
                    Certificate
                </button>
                <button
                    className={"bg-gray-500 cursor-not-allowed rounded-[4px] px-[40px] whitespace-nowrap h-[40px] border-0"}>Recruiting
                    Profile
                </button>
            </div>
        </div>
    </section>;
}


export default QuestionMetric;