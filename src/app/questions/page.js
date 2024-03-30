'use client'


import Header from "@/components/Header";
import QuestionCard from "@/components/QuestionCard";
import QuestionGroupingAndFilters from "@/components/QuestionGroupingAndFilters";
import { useEffect, useState } from "react";
import QuestionHeader from "@/components/QuestionHeader";
import QuestionMetric from "@/components/QuestionMetric";
import QuestionsLoader from "@/components/QuestionsLoader";
import {useResizeWindow} from "@/hooks/useResizeWindow";
import useDeviceSize from "@/hooks/useDeviceSize";


const Questions = () => {

    const [groupSelected, setGroupSelected] = useState(0);

    const [questions, setQuestions] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [width, _] = useDeviceSize();

    const isDesktop = width > 768;

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
                <QuestionHeader />
            </Header>
            <QuestionMetric />
            { isDesktop ? (
                <QuestionGroupingAndFilters
                    groupSelected={groupSelected}
                    setGroupSelected={setGroupSelected}
                />
            ) : null }
            { isLoading ? (
                <div className={'mx-auto flex justify-center w-full h-full min-h-[800px]'}>
                    <QuestionsLoader />
                </div>
            ) : (
                <section className={'flex px-[20px] md:px-0 flex-col md:flex-row max-w-[1600px] min-h-0 lg:min-h-[800px] w-full justify-between mx-auto gap-[2rem]'}>
                    <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                        <div className={'text-[23px] mb-[20px]'}>Easy - 12/23</div>
                        { questions.filter(item => item.difficulty === 1)
                            .map(item =>
                                <QuestionCard
                                    key={item.uid}
                                    id={item.uid}
                                    difficulty={item.difficulty}
                                    name={item.name}
                                    completed={item.userQuestions.some(t => t.questionId === item.uid && t.isComplete)}
                                /> )
                        }
                    </div>
                    <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                        <div className={'text-[23px] mb-[20px]'}>Medium - 12/23</div>
                        { questions.filter(item => item.difficulty === 2)
                            .map(item =>
                                <QuestionCard
                                    key={item.uid}
                                    id={item.uid}
                                    difficulty={item.difficulty}
                                    name={item.name}
                                    completed={item.userQuestions.some(t => t.questionId === item.uid && t.isComplete)}
                                /> )
                        }
                    </div>
                    <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                        <div className={'text-[23px] mb-[20px]'}>Hard - 12/23</div>
                        { questions.filter(item => item.difficulty === 3)
                            .map(item =>
                                <QuestionCard
                                    key={item.uid}
                                    id={item.uid}
                                    difficulty={item.difficulty}
                                    name={item.name}
                                /> )
                        }
                    </div>
                    <div className={'flex flex-col gap-[.5rem] basis-[25%]'}>
                        <div className={'text-[23px] mb-[20px]'}>Very Hard - 12/23</div>
                        { questions.filter(item => item.difficulty === 4)
                            .map(item =>
                                <QuestionCard
                                    key={item.uid}
                                    id={item.uid}
                                    difficulty={item.difficulty}
                                    name={item.name}
                                /> )
                        }
                    </div>
                </section>
            ) }
        </>
    )
}

const QuestionColumn = () => {
    return <div></div>
}

const QuestionGroupingAndFiltersMobile = () => {}

export default Questions

