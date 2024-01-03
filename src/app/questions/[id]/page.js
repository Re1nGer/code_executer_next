'use client'

import ListIcon from '../../../icons/ListIcon.svg?react'
import ArrowIcon from '../../../icons/Arrow.svg?react'
import ShareIcon from '../../../icons/ShareIcon.svg?react'
import BugIcon from '../../../icons/BugIcon.svg?react'
import SettingIcon from '../../../icons/SettingIcon.svg?react'
import { useEffect, useState } from "react";
import EyeIcon from '../../../icons/EyeIcon.svg?react'
import StarIcon from '../../../icons/StarIcon.svg?react'
import InfoIcon from '../../../icons/InfoIcon.svg?react'
import Link from 'next/link'
import EditorPanel from "@/components/EditorPanel";
import PromptSkeleton from "@/components/PromptSkeleton";
import Hint from "@/components/Hint";
import TestCasePanel from "@/components/TestCasePanel";



export default function Question({ params }) {

    const [promptW, setPromptW] = useState(800)

    const [testH, setTestH] = useState(200)

    const [question, setQuestion] = useState(null)

    const [isQuestionLoading, setIsQuestionLoading] = useState(true)

    const editorPanelWidthPercent = window ? ((innerWidth - promptW) / innerWidth) * 100 : 1

    const fetchQuestion = async (id) => {
        try {
            const request = await fetch(`/api/questions/${id}`,{ cache: 'no-store' })
            setQuestion(await request.json())
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsQuestionLoading(false)
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

    const handleTestOutputResize = (event) => {
        console.log(event.clientY)
        setTestH(event.clientY)
    }
    const handleTestOutputUp = () => {
        window.removeEventListener('mousemove', handleTestOutputResize);
        window.removeEventListener('mouseup', handleTestOutputUp);
    }

    const handleTestPanelDown = () => {
        window.addEventListener('mousemove', handleTestOutputResize);
        window.addEventListener('mouseup', handleTestOutputUp);
    }

    useEffect(() => {
        fetchQuestion(params.id)
    }, [params.id])

    return (
        <section className={'bg-[#02203c] px-[15px] h-screen overflow-hidden'}>
            <div className={'flex justify-between rounded-[4px] mb-[15px]'}>
                <div className={'flex gap-[15px]'}>
                    <Link href={'/'}
                          className={'rounded-[4px] transition-colors bg-[#626ee3] text-white p-[10px]'}>AlgoExpert</Link>
                    <button
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ListIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                    <button
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ArrowIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                    <ProgrammingLanguageDropdown/>
                    <button
                        className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ShareIcon className={'max-w-[25px] max-h-[25px]'}/>
                    </button>
                    <Timer/>
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
            <div className={`rounded-[4px] flex h-full`}>
                <div className={'flex flex-col h-full'} style={{width: `${promptW}px`}}>
                    <div className={'flex flex-col'} style={{ flexBasis: `${((window.innerHeight - testH) / innerHeight) * 100 }%` }}>
                        <div className={'bg-[#15314b] text-white font-bold flex rounded-[4px]'}>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Prompt
                            </button>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>ScratchPad
                            </button>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Solutions
                            </button>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Video Explanations
                            </button>
                            <button className={'px-[15px] py-[10px]'}></button>
                        </div>
                        <div
                            className={'p-[20px] max-h-[550px] product__test_scrollbar overflow-x-hidden bg-[#001528]'}>
                            <div className={'flex gap-[20px] text-white mb-[10px]'}>
                                <div className={'flex items-center gap-[10px] font-bold'}>
                                    <h3>Difficulty:</h3>
                                    <span
                                        className={'rounded-[4px] bg-gradient-to-r from-[#34ed43] to-[#369536] h-[17px] w-[17px]'}></span>
                                </div>
                                <div className={'flex'}>
                                    <h3>Category:</h3>
                                    <span className={'blur-[4px]'}>Hidden</span>
                                </div>
                                <div className={'flex gap-[.3rem]'}>
                                    <h3>Successful Submissions:</h3>
                                    <span>155,070+</span>
                                </div>
                            </div>
                            {isQuestionLoading ? (
                                <PromptSkeleton/>
                            ) : (
                                <>
                                    <div className={'flex gap-[10px] items-center text-white'}>
                                        <h2 className={'text-[24px]'}>{question?.name}</h2>
                                        <div
                                            className={'border-[1px] rounded-full h-[20px] w-[20px] bg-transparent border-[#505ac5]'}></div>
                                        <StarIcon className={'w-[20px] h-[20px] cursor-pointer'}/>
                                    </div>
                                    <div className={'text-[14px] text-white font-open_sans'}>
                                        <div dangerouslySetInnerHTML={{__html: question?.prompt}}></div>
                                        <div className={'flex flex-col gap-[10px] font-bold'}>
                                            <h1>Hints</h1>
                                            <Hint heading={'Hint 1'}/>
                                            <Hint heading={'Hint 2'}/>
                                            <Hint heading={'Hint 3'}/>
                                            <Hint heading={'Hint 4'}/>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div
                        onMouseDown={handleTestPanelDown}
                        className={'w-full h-[50px] bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]'}></div>
                    <div className={'flex flex-col'} style={{ height: `${testH}px` }}>
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
