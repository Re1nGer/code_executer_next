'use client'

import Header from "@/components/Header";
import BuyExpertButton from "@/components/BuyExpertButton";
import CircleIcon from "@/icons/CircleIcon.svg";


const AlgoExpertDataStructuresPage = () => {
    return (
        <>
            <Header type={'algo'}>
                <AlgoExpertDataStructures />
            </Header>

        </>
    )
}

const DataStructuresProgress = () => {
    return <section className={'py-[100px] px-[20px]'}>
        <div className={'max-w-[1200px] mx-auto gap-[30px]'}>
            <div className={'min-h-[700px] sticky top-[20px]'} style={{ maxHeight: "calc(100vh- 40px)" }}>
                <div className={'bg-white rounded-[4px] shadow-[0_0_50px_-10px_rgba(0,0,0,.1)] h-full left-0 p-[20px] absolute top-0 w-full'}>
                    <div className={'flex flex-col h-full'}>
                        <div>
                            <h3 className={'text-[20px] mb-[20px]'}>Course Progress</h3>
                            <div className={'h-[200px] mb-[20px] w-full'}>
                                <div className={'flex items-center h-full justify-center relative w-full'}>
                                    <CircleIcon className={'w-full h-full absolute'} />
                                </div>
                            </div>
                            <div className={'flex justify-between font-open_sans'}>
                                <span className={'text-[#445d6e]'}>Videos Watched</span>
                                <span className={'font-bold text-[#445d6e]'}>13/13</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}


const AlgoExpertDataStructures = () => {

    return <section className={"h-full flex justify-center"}>
        <div className={"flex flex-col max-w-[720px] w-full justify-center items-center"}>
            <h1 className={"text-[38px] text-white mb-[30px]"}>Data Structures Crash Course</h1>
            <p className={"text-[18px] leading-[1.5] mb-[30px] text-white"}>All the resources you need to prepare for technical interviews</p>
            <BuyExpertButton className={'w-full'} text={'Buy AlgoExpert'} type={'algo'} />
        </div>
    </section>;
}


export default AlgoExpertDataStructuresPage;
