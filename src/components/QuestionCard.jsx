import StarIcon from "@/icons/StarIcon.svg";
import StrikeIcon from "@/icons/StrikeIcon.svg";
import Link from "next/link";


const colors = {
    1: { bg: "#34ed43", shadow: "#20ad2b" },
    2: { bg: "#51adef", shadow: "#257dbc" },
    3: { bg: "#ef5151", shadow: "#c62121" },
    4: { bg: "#383535", shadow: "#110f0f" },
    5: { bg: "#6b6b6b", shadow: "#474747" },
};

//is_random property colors the span element in black
const QuestionCard = ({ name = '', completed, striked, difficulty = 1, id }) => {

    const getDifficultyStyles = () => {
        return { background: colors[difficulty].bg, boxShadow: `8px 0 0 0 ${colors[difficulty].shadow}` };
    }

    return <div className={'h-[50px] bg-white rounded-[4px] pl-[15px]' +
        ' font-bold flex justify-between shadow-[0_1px_2px_0_rgba(0,0,0,0.2)]'}>
        <div className={'flex mr-[2rem] items-center'}>
            <div
                style={{ background: completed ? 'linear-gradient(#04ff00,#369536)' : '' }}
                className={'w-[20px] mr-[10px] h-[20px] rounded-full bg-transparent border-[1px] border-[rgba(103,114,229,.3)]'}></div>
            <Link href={`questions/${id}`} className={'text-[15px] whitespace-normal md:whitespace-nowrap overflow-ellipsis transition-colors text-[#626ee3] font-bold hover:text-[#02203c]'}>
                { name }
            </Link>
        </div>
        <div className={'flex gap-[10px] items-center'}>
            <StarIcon className={'w-[20px] h-[20px] text-[#ffc850]'} />
            <StrikeIcon className={'w-[20px] h-[20px] text-[#737e8e]'} />
            <span className={`w-[30px] h-full bg-[${colors[difficulty].bg}]
             rounded-tr-[5px] rounded-br-[5px] cursor-pointer`}
                  style={getDifficultyStyles()}></span>
        </div>
    </div>
}

export default QuestionCard;