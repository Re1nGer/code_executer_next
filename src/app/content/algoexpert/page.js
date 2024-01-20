'use client'
import BuyExpertButton from "@/components/BuyExpertButton";
import Header from "@/components/Header";


const AlgoExpertPage = () => {
    return (
        <>
            <Header type={'algo'}>
                <AlgoExpertContentLanding />
            </Header>
        </>
    )
}


const AlgoExpertContentLanding = () => {
    return <section className={"h-full flex justify-center"}>
        <div className={"flex flex-col max-w-[720px] w-full justify-center items-center"}>
            <h1 className={"text-[38px] text-white mb-[30px]"}>The Secret Sauce</h1>
            <p className={"text-[18px] leading-[1.5] mb-[30px] text-white"}>All the resources you need to prepare for technical interviews</p>
            <BuyExpertButton className={'w-full'} text={'Buy SystemsExpert'} type={'algo'} />
        </div>
    </section>;
}


export default AlgoExpertPage;
