'use client'


import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton";
import Header from "@/components/Header";
import LockIcon from '../../icons/LockIcon.svg';
import Filters from '../../icons/Filters.svg';
import Random from '../../icons/Random.svg';
import QuestionCard from "@/components/QuestionCard";

const Questions = () => {
    return (
        <>
            <Header>
                <section className={'h-full flex justify-center'}>
                    <div className={'flex flex-col max-w-[720px] w-full justify-center items-center'}>
                        <h1 className={'text-[38px] text-white mb-[30px]'}>200 Coding Interview Questions</h1>
                        <p className={'text-[18px] leading-[1.5] mb-[30px] text-white'}>The practice you need to ace the coding interviews.</p>
                        <BuyAlgoExpertButton className={'w-full'} />
                    </div>
                </section>
            </Header>
            <section className={'px-[20px] py-[100px] bg-[#f6f9fc] mb-[80px]'}>
                <div className={'w-full flex flex-col items-center'}>
                    <h2 className={'mb-[10px] text-[#02203c] text-[24px]'}>45 Questions Completed out of 200</h2>
                    <div className={'bg-[#f5f5f5] rounded-[4px] h-[25px] mx-auto w-[485px] relative mb-[100px]'}>
                       <div className={'bg-[#02203c] w-[22.5%] h-full text-center'}></div>
                        <div className={'absolute left-[50%] top-0 text-[#02203c] text-[20px]'}>23%</div>
                        <div className={'absolute left-[calc(53%-1px)] top-[-3px] opacity-[.5] bg-gray-500 w-[5px] h-[32px]'}></div>
                        <div className={'absolute left-[calc(50%-1px)] top-[2.5rem] bg-white rounded-[4px] p-[5px] z-10 shadow-[0_1px_6px_rgba(50,50,93,.2)] questions__arrow'}>
                           <LockIcon className={'w-[25px] h-[25px] text-gray-500'} />
                        </div>
                    </div>
                    <div className={'flex gap-[40px] text-[14px] text-white'}>
                        <button className={'bg-gray-500 cursor-not-allowed rounded-[4px] px-[40px] whitespace-nowrap h-[40px] border-0'}>AlgoExpert Certificate</button>
                        <button className={'bg-gray-500 cursor-not-allowed rounded-[4px] px-[40px] whitespace-nowrap h-[40px] border-0'}>Recruiting Profile</button>
                    </div>
                </div>
            </section>
            <section className={'mx-auto text-[#626ee3] flex justify-between max-w-[1600px] w-full mb-[30px]'}>
                <button className={'flex gap-[10px] border-none items-center justify-center whitespace-nowrap'}>
                    <Random className={'w-[25px] h-[25px]'} />
                    Pick random
                </button>
                <div className={'flex gap-[3rem] font-bold'}>
                    <button className={'transition-colors hover:text-[#02203c]'}>Group by Difficulty</button>
                    <button className={'transition-colors hover:text-[#02203c]'}>Group by Category</button>
                    <button className={'transition-colors hover:text-[#02203c]'}>Group Randomly</button>
                </div>
                <button className={'flex gap-[10px]'}>
                    <Filters className={'w-[25px] h-[25px]'} />
                    Filters
                </button>
            </section>
            <section className={'flex max-w-[1600px] w-full justify-between mx-auto gap-[2rem]'}>
                <div className={'flex flex-col gap-[1rem]'}>
                    <div className={'text-[23px] mb-[20px]'}>Easy - 12/23</div>
                    <QuestionCard id={'validate-subsequence'} />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
                <div className={'flex flex-col gap-[.5rem]'}>
                    <div className={'text-[23px] mb-[20px]'}>Medium - 12/23</div>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
                <div className={'flex flex-col gap-[.5rem]'}>
                    <div className={'text-[23px] mb-[20px]'}>Hard - 12/23</div>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
                <div className={'flex flex-col gap-[.5rem]'}>
                    <div className={'text-[23px] mb-[20px]'}>Very Hard - 12/23</div>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </section>
        </>
    )
}

const QuestionColumn = () => {
    return <div></div>
}


export default Questions

