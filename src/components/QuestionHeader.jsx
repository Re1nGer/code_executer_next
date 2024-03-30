import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton";

const QuestionHeader = () => {
    return <section className={"h-full flex justify-center"}>
        <div className={"flex flex-col max-w-[720px] w-full justify-center items-center px-[20px] md:px-0"}>
            <h1 className={"text-[38px] text-white mb-[30px] text-center font-ubuntu"}>200 Coding Interview Questions</h1>
            <p className={"text-[18px] leading-[1.5] mb-[30px] text-white text-center"}>The practice you need to ace the
                coding interviews.</p>
            <BuyAlgoExpertButton className={"w-full"}/>
        </div>
    </section>;
}

export default QuestionHeader;