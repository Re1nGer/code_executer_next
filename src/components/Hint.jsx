import ArrowDown from "@/icons/ArrowDown.svg";

const Hint = ({ heading, body }) => {
    return (
        <pre
            className={'bg-[#15314b] flex justify-between px-[15px] py-[20px] text-[14px] rounded-[4px]'}>
            { heading }
            <ArrowDown className={'w-[15px] h-[15px]'}/>
        </pre>
    )
}

export default Hint
