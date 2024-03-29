import QuestionDifficulty from "@/components/QuestionDifficulty";
import PromptSkeleton from "@/components/PromptSkeleton";
import StarIcon from "@/icons/StarIcon.svg";
import Hint from "@/components/Hint";
import {useQuestionContext} from "@/hooks/useQuestionContext";
import {useMemo} from "react";

const PromptTab = () => {

    const { question: { name, difficulty, prompt, hints, correctcount, userQuestions }, isLoading } = useQuestionContext();

    const isComplete = useMemo(() => userQuestions ? userQuestions[0]?.isComplete : false, [userQuestions]);

    return (
        <div
            className={'p-[20px] h-full product__test_scrollbar overflow-x-hidden bg-[#001528]'}>
            <div className={'flex gap-[20px] text-white mb-[10px]'}>
                <div className={'flex items-center gap-[10px] font-bold'}>
                    <h3>Difficulty:</h3>
                    <QuestionDifficulty difficulty={difficulty} />
                </div>
                <div className={'flex'}>
                    <h3>Category:</h3>
                    <span className={'blur-[4px]'}>Hidden</span>
                </div>
                <div className={'flex gap-[.3rem]'}>
                    <h3>Successful Submissions:</h3>
                    <span>{correctcount}</span>
                </div>
            </div>
            {isLoading ? (
                <PromptSkeleton />
            ) : (
                <>
                    <div className={'flex gap-[10px] items-center text-white'}>
                        <h2 className={'text-[24px]'}>{name}</h2>
                        <div
                            style={{ background: isComplete ? 'linear-gradient(#04ff00,#369536)' : '' }}
                            className={'border-[1px] rounded-full h-[20px] w-[20px] bg-transparent border-[#505ac5]'}></div>
                        <StarIcon className={'w-[20px] h-[20px] cursor-pointer'}/>
                    </div>
                    <div className={'text-[14px] text-white font-open_sans question'}>
                        <div dangerouslySetInnerHTML={{__html: prompt}}></div>
                        <div className={'flex flex-col gap-[10px] font-bold'}>
                            <h1>Hints</h1>
                            { hints?.map((item, idx) => <Hint key={item} heading={`Hint ${idx + 1}`} body={item} />) }
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default PromptTab;