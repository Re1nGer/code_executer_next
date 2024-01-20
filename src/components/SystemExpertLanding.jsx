import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton";

const SystemExpertLanding = () => {
    return <section className={"h-full flex justify-center"}>
        <div className={"flex flex-col max-w-[720px] w-full justify-center items-center"}>
            <h1 className={"text-[38px] text-white mb-[30px]"}>Systems Expert Content Index</h1>
            <p className={"text-[18px] leading-[1.5] mb-[30px] text-white"}>Everything you need to ace the
                coding interviews.</p>
            <BuyAlgoExpertButton className={"w-full"} />
        </div>
    </section>;
}

export default SystemExpertLanding;