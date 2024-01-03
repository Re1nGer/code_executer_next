'use client'

import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton";
import Header from "@/components/Header";

const Questions = () => {
    return (
            <section className={'h-full flex justify-center'}>
                <div className={'flex flex-col max-w-[720px] w-full justify-center items-center'}>
                    <h1 className={'text-[38px] text-white mb-[30px]'}>200 Coding Interview Questions</h1>
                    <p className={'text-[18px] leading-[1.5] mb-[30px] text-white'}>The practice you need to ace the coding interviews.</p>
                    <BuyAlgoExpertButton className={'w-full'} />
                </div>
            </section>
    )
}

export default Questions