'use client'


import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton";
import Header from "@/components/Header";
import LockIcon from '../../icons/LockIcon.svg';
import QuestionCard from "@/components/QuestionCard";
import QuestionGroupingAndFilters from "@/components/QuestionGroupingAndFilters";
import {useEffect, useState} from "react";


const Questions = () => {

    const [groupSelected, setGroupSelected] = useState(0);

    const [questions, setQuestions] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const fetchQuestions = async () => {
        try {
            const request = await fetch('/api/questions');
            const rows = await request.json();
            setQuestions(rows)
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchQuestions();
    }, [])

    return (
        <>
            <Header>
                <section className={'h-full flex justify-center'}>
                    <div className={'flex flex-col max-w-[720px] w-full justify-center items-center'}>
                        <h1 className={'text-[38px] text-white mb-[30px]'}>200 Coding Interview Questions</h1>
                        <p className={'text-[18px] leading-[1.5] mb-[30px] text-white'}>The practice you need to ace the
                            coding interviews.</p>
                        <BuyAlgoExpertButton className={'w-full'}/>
                    </div>
                </section>
            </Header>
            <section className={'px-[20px] py-[100px] bg-[#f6f9fc] mb-[80px]'}>
                <div className={'w-full flex flex-col items-center'}>
                    <h2 className={'mb-[10px] text-[#02203c] text-[24px]'}>45 Questions Completed out of 200</h2>
                    <div className={'bg-[#f5f5f5] rounded-[4px] h-[25px] mx-auto w-[485px] relative mb-[100px]'}>
                        <div className={'bg-[#02203c] w-[22.5%] h-full text-center'}></div>
                        <div className={'absolute left-[50%] top-0 text-[#02203c] text-[20px]'}>23%</div>
                        <div
                            className={'absolute left-[calc(53%-1px)] top-[-3px] opacity-[.5] bg-gray-500 w-[5px] h-[32px]'}></div>
                        <div
                            className={'absolute left-[calc(50%-1px)] top-[2.5rem] bg-white rounded-[4px] p-[5px] z-10 shadow-[0_1px_6px_rgba(50,50,93,.2)] questions__arrow'}>
                            <LockIcon className={'w-[25px] h-[25px] text-gray-500'}/>
                        </div>
                    </div>
                    <div className={'flex gap-[40px] text-[14px] text-white'}>
                        <button
                            className={'bg-gray-500 cursor-not-allowed rounded-[4px] px-[40px] whitespace-nowrap h-[40px] border-0'}>AlgoExpert
                            Certificate
                        </button>
                        <button
                            className={'bg-gray-500 cursor-not-allowed rounded-[4px] px-[40px] whitespace-nowrap h-[40px] border-0'}>Recruiting
                            Profile
                        </button>
                    </div>
                </div>
            </section>
            <QuestionGroupingAndFilters
                groupSelected={groupSelected}
                setGroupSelected={setGroupSelected}
            />
            <section className={'flex max-w-[1600px] w-full justify-between mx-auto gap-[2rem]'}>
                <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                    <div className={'text-[23px] mb-[20px]'}>Easy - 12/23</div>
                    { questions.filter(item => item.difficulty === 1)
                        .map(item =>
                            <QuestionCard key={item.uid}
                              id={item.uid}
                              difficulty={item.difficulty}
                              name={item.name} /> )
                    }
                </div>
                <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                    <div className={'text-[23px] mb-[20px]'}>Medium - 12/23</div>
                    { questions.filter(item => item.difficulty === 2)
                        .map(item =>
                        <QuestionCard key={item.uid}
                          id={item.uid}
                          difficulty={item.difficulty}
                          name={item.name} /> )
                    }
                </div>
                <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                    <div className={'text-[23px] mb-[20px]'}>Hard - 12/23</div>
                    { questions.filter(item => item.difficulty === 3)
                        .map(item =>
                            <QuestionCard key={item.uid}
                                          id={item.uid}
                                          difficulty={item.difficulty}
                                          name={item.name} /> )
                    }
                </div>
                <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                    <div className={'text-[23px] mb-[20px]'}>Very Hard - 12/23</div>
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                    <QuestionCard difficulty={3} />
                </div>
            </section>
        </>
    )
}

const QuestionColumn = () => {
    return <div></div>
}


export default Questions

