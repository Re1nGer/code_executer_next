import StarIcon from "@/icons/StarIcon.svg";
import StrikeIcon from "@/icons/StrikeIcon.svg";
import Link from "next/link";

const QuestionCard = ({ name, completed, striked, difficulty, id }) => {

    return <div className={'h-[50px] bg-white rounded-[4px] pl-[15px]' +
        ' whitespace-nowrap font-bold flex justify-between shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]'}>
        <div className={'flex mr-[2rem] items-center'}>
            <div className={'w-[20px] mr-[10px] h-[20px] rounded-full bg-transparent border-[1px] border-[rgba(103,114,229,.3)] '}></div>
            <Link href={`questions/${id}`} className={'text-[15px] whitespace-nowrap overflow-ellipsis transition-colors text-[#626ee3] font-bold hover:text-[#02203c]'}>
                Validate Subsequence
            </Link>
        </div>
        <div className={'flex gap-[10px] items-center'}>
            <StarIcon className={'w-[20px] h-[20px] text-[#ffc850]'} />
            <StrikeIcon className={'w-[20px] h-[20px] text-[#737e8e]'} />
            <span className={'w-[30px] h-full bg-[#34ed43] rounded-tr-[5px] rounded-br-[5px] shadow-[8px_0_0_0_#20ad2b] cursor-pointer'}></span>
        </div>
    </div>
}

export default QuestionCard;