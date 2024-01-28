'use client'

import ListIcon from '../../../icons/ListIcon.svg?react'
import ArrowIcon from '../../../icons/Arrow.svg?react'
import ShareIcon from '../../../icons/ShareIcon.svg?react'
import BugIcon from '../../../icons/BugIcon.svg?react'
import SettingIcon from '../../../icons/SettingIcon.svg?react'
import { useEffect, useState } from "react";
import EyeIcon from '../../../icons/EyeIcon.svg?react'
import InfoIcon from '../../../icons/InfoIcon.svg?react'
import Link from 'next/link'
import EditorPanel from "@/components/EditorPanel";
import TestCasePanel from "@/components/TestCasePanel";
import PromptTabs from "@/components/PromptTabs";
import { useQuestionContext } from "@/hooks/useQuestionContext";



export default function Question({ params }) {

    const [promptW, setPromptW] = useState(800)

    const [drag, setDrag] = useState({
        active: false,
        y: ""
    });

    const [testD, setTestD] = useState({
        h: 215
    });

    const editorPanelWidthPercent = window ? ((innerWidth - promptW) / innerWidth) * 100 : 1

    const { setQuestion, setIsLoading } = useQuestionContext();

    const resizeFrame = e => {
        const { active, x, y } = drag;
        if (active) {
            const yDiff = Math.abs(y - e.clientY);

            const newH = y > e.clientY ? testD.h + yDiff : testD.h - yDiff;

            setDrag({ ...drag, x: e.clientX, y: e.clientY });
            setTestD({ h: newH });
        }
    };

    const startResize = e => {
        setDrag({
            active: true,
            y: e.clientY
        });
    };

    const stopResize = e => {
        setDrag({ ...drag, active: false });
    };

    const fetchQuestion = async (id) => {
        try {
            const request = await fetch(`/api/questions/${id}`,{ cache: 'no-store' })
            setQuestion(await request.json())
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleResize = (event) => {
        setPromptW(event.clientX);
    };

    const handleMouseDown = () => {
        window.addEventListener('mousemove', handleResize);
        window.addEventListener('mouseup', handleMouseUp);
    };


    useEffect(() => {
        fetchQuestion(params.id)
    }, [params.id])

    return (
        <section className={'bg-[#02203c] px-[15px] h-screen overflow-hidden'}>
            <div className={'flex justify-between rounded-[4px] mb-[15px]'}>
                <div className={'flex gap-[15px]'}>
                    <Link href={'/'}
                          className={'rounded-[4px] transition-colors bg-[#626ee3] text-white p-[10px]'}>AlgoExpert</Link>
                    <Link href={'/questions'}
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ListIcon className={'max-w-[25px] max-h-[25px]'}  />
                    </Link>
                    <button
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ArrowIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                    <ProgrammingLanguageDropdown />
                    <button
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ShareIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                    <Timer />
                </div>
                <div className={'flex gap-[.5rem]'}>
                    <button
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <BugIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                    <button
                        className={'bg-[#15314b] text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <SettingIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                </div>
            </div>
            <div className={`rounded-[4px] flex h-full`} onMouseMove={resizeFrame} onMouseUp={stopResize}>
                <div className={'flex flex-col'} style={{width: `${promptW}px`}}>
                    <div className={'flex flex-col'} style={{ height: `${window.innerHeight - testD.h}px` }}>
                        <PromptTabs />
                    </div>
                    <div onMouseDown={startResize} className={'w-full h-[20px] flex-grow-1 py-[.5rem] bg-transparent cursor-row-resize transition-colors hover:bg-[#626ee3]'}></div>
                    <div style={{ height: testD.h + 'px' }} className={'pointer-events-none'}>
                        <div className={'flex flex-col h-full'}>
                            <div className={'flex justify-between bg-[#15314b]'}>
                                <div className={'text-white font-bold flex rounded-[4px]'}>
                                    <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Tests
                                    </button>
                                    <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Quick
                                        Test
                                    </button>
                                    <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Sandbox
                                    </button>
                                    <button className={'px-[15px] py-[10px]'}></button>
                                </div>
                                <div className={'flex gap-[.5rem] text-white'}>
                                    <button
                                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                                        <EyeIcon className={'max-w-[25px] max-h-[25px]'}/>
                                    </button>
                                    <button
                                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                                        <InfoIcon className={'max-w-[25px] max-h-[25px]'}/>
                                    </button>
                                </div>
                            </div>
                            <TestCasePanel />
                        </div>
                    </div>
                </div>
                <div
                     onMouseDown={handleMouseDown}
                     className={'w-[15px] h-full bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]'}></div>
                <EditorPanel width={editorPanelWidthPercent + '%'}/>
            </div>
        </section>
    )
}








const ProgrammingLanguageDropdown = () => {
    return <></>
}


const Timer = () => { }
