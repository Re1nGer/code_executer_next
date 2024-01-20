import BuyExpertButton from "@/components/BuyExpertButton";


const FrontendExpertLanding = () => {
    return <section className={"h-full flex justify-center"}>
        <div className={"flex flex-col max-w-[720px] w-full justify-center items-center"}>
            <h1 className={"text-[38px] text-white mb-[30px]"}>Frontend Expert Content Index</h1>
            <p className={"text-[18px] leading-[1.5] mb-[30px] text-white"}>Everything you need to ace the
                coding interviews.</p>
            <BuyExpertButton className={'w-full'} text={'Buy FrontendExpert'} type={'frontend'} />
        </div>
    </section>;
}

export default FrontendExpertLanding;

