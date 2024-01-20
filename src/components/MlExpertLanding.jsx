import BuyExpertButton from "@/components/BuyExpertButton";


const MlExpertLanding = () => {

    return <section className={"h-full flex justify-center"}>
        <div className={"flex flex-col max-w-[720px] w-full justify-center items-center"}>
            <h1 className={"text-[38px] text-white mb-[30px]"}>ML Expert Content Index</h1>
            <p className={"text-[18px] leading-[1.5] mb-[30px] text-white"}>Everything you need to ace the
                coding interviews.</p>
            <BuyExpertButton className={'w-full'} text={'Buy MlExpert'} type={'ml'} />
        </div>
    </section>;
}

export default MlExpertLanding;