'use client'

import ListIcon from '../../icons/ListIcon.svg?react'
import ArrowIcon from '../../icons/Arrow.svg?react'
import ShareIcon from '../../icons/ShareIcon.svg?react'
import BugIcon from '../../icons/BugIcon.svg?react'
import SettingIcon from '../../icons/SettingIcon.svg?react'
import { useRef, useState } from "react";
import EyeIcon from '../../icons/EyeIcon.svg?react'
import StarIcon from '../../icons/StarIcon.svg?react'
import InfoIcon from '../../icons/InfoIcon.svg?react'
import { Editor } from "@monaco-editor/react";
import ArrowDown from '../../icons/ArrowDown.svg?react'
import Link from 'next/link'

export default function Question() {

    const [promptW, setPromptW] = useState(800)

    const outputWindowRef = useRef(null)

    const handleResize = (event) => {
        setPromptW(event.clientX);
    };

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMouseDown = () => {
        window.addEventListener('mousemove', handleResize);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <section className={'bg-[#02203c] px-[15px] h-screen overflow-hidden'}>
            <div className={'flex justify-between rounded-[4px] mb-[15px]'}>
                <div className={'flex gap-[15px]'}>
                    <Link href={'/'} className={'rounded-[4px] transition-colors bg-[#626ee3] text-white p-[10px]'}>AlgoExpert</Link>
                    <button className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ListIcon className={'max-w-[25px] max-h-[25px]'} />
                    </button>
                    <button className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ArrowIcon className={'max-w-[25px] max-h-[25px]'} />
                    </button>
                    <ProgrammingLanguageDropdown />
                    <button className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <ShareIcon className={'max-w-[25px] max-h-[25px]'} />
                    </button>
                    <Timer />
                </div>
                <div className={'flex gap-[.5rem]'}>
                    <button className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <BugIcon className={'max-w-[25px] max-h-[25px]'} />
                    </button>
                    <button className={'bg-[#15314b] text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                        <SettingIcon className={'max-w-[25px] max-h-[25px]'} />
                    </button>
                </div>
            </div>
            <div className={`rounded-[4px] flex h-full`}>
                <div className={'flex flex-col h-full'} style={{ width: `${promptW}px` }}>
                    <div className={'flex flex-col'}>
                        <div className={'bg-[#15314b] text-white font-bold flex rounded-[4px]'}>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Prompt</button>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>ScratchPad</button>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Solutions</button>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Video Explanations</button>
                            <button className={'px-[15px] py-[10px]'}></button>
                        </div>
                        <div className={'p-[20px] max-h-[550px] product__test_scrollbar overflow-x-hidden bg-[#001528]'}>
                            <div className={'flex gap-[20px] text-white mb-[10px]'}>
                                <div className={'flex items-center gap-[10px] font-bold'}>
                                    <h3>Difficulty:</h3>
                                    <span className={'rounded-[4px] bg-gradient-to-r from-[#34ed43] to-[#369536] h-[17px] w-[17px]'}></span>
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
                            <div className={'flex gap-[10px] items-center text-white '}>
                                <h2 className={'text-[24px]'}>Validate Subsequence</h2>
                                <div className={'border-[1px] rounded-full h-[20px] w-[20px] bg-transparent border-[#505ac5]'}></div>
                                <StarIcon className={'w-[20px] h-[20px] cursor-pointer'} />
                            </div>
                            <div className={'text-[14px] text-white'}>
                                <p className={'mb-[10px]'}> Given two non-empty arrays of integers, write a function that determines
                                    whether the second array is a subsequence of the first one.</p>
                                <p className={'mb-[30px]'}>
                                    A subsequence of an array is a set of numbers that aren't necessarily adjacent
                                    in the array but that are in the same order as they appear in the array. For
                                    instance, the numbers </p>
                                <h3>Sample Input</h3>
                                <pre className={'bg-[#15314b] px-[15px] py-[20px] text-[14px] rounded-[4px] mb-[15px]'}>
                                    <h3>array = [5, 1, 22, 25, 6, -1, 8, 10]</h3>
                                    <h3>sequence = [1, 6, -1, 10]</h3>
                                </pre>
                                <h3>Sample Output</h3>
                                <pre className={'bg-[#15314b] px-[15px] py-[20px] text-[14px] rounded-[4px] mb-[30px]'}>
                                    <code className={'language-css'}>True</code>
                                </pre>
                                <div className={'flex flex-col gap-[10px] font-bold'}>
                                    <h1>Hints</h1>
                                    <pre className={'bg-[#15314b] flex justify-between px-[15px] py-[20px] text-[14px] rounded-[4px]'}>
                                        Hint 1
                                        <ArrowDown className={'w-[15px] h-[15px]'} />
                                    </pre>
                                    <pre className={'bg-[#15314b] flex justify-between px-[15px] py-[20px] text-[14px] rounded-[4px]'}>
                                        Hint 2
                                        <ArrowDown className={'w-[15px] h-[15px]'} />
                                    </pre>
                                    <pre className={'bg-[#15314b] flex justify-between px-[15px] py-[20px] text-[14px] rounded-[4px]'}>
                                        Hint 3
                                        <ArrowDown className={'w-[15px] h-[15px]'} />
                                    </pre>
                                    <pre className={'bg-[#15314b] flex justify-between px-[15px] py-[20px] text-[14px] rounded-[4px]'}>
                                        Hint 4
                                        <ArrowDown className={'w-[15px] h-[15px]'} />
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full h-[15px] bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]'}></div>
                    <div ref={outputWindowRef} className={'flex flex-col'}>
                        <div className={'flex justify-between bg-[#15314b]'}>
                            <div className={'text-white font-bold flex rounded-[4px]'}>
                                <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Tests</button>
                                <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Quick Test</button>
                                <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Sandbox</button>
                                <button className={'px-[15px] py-[10px]'}></button>
                            </div>
                            <div className={'flex gap-[.5rem] text-white'}>
                                <button className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                                    <EyeIcon className={'max-w-[25px] max-h-[25px]'} />
                                </button>
                                <button className={'bg-[#15314b] transition-colors text-white rounded-[4px] flex justify-center items-center w-[55px] h-[40px] hover:bg-[#626ee3]'}>
                                    <InfoIcon className={'max-w-[25px] max-h-[25px]'} />
                                </button>
                            </div>
                        </div>
                        <div className={'p-[20px] bg-[#001528] blur-[4px]'}>
                            <div className={'flex flex-col text-white'}>
                                <div className={'flex flex-col gap-[1rem]'}>
                                    <h1 className={'font-bold font-open_sans text-[18px]'}>Test Case 1</h1>
                                    <Editor height={'90px'} theme={'vs-dark'} defaultValue={'{\n\tarray: [1,2,3,4,5], \n\tsequence:[1,2,3,4,5,6]\n}'} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={'prompt_vertical_resizer'} onMouseDown={handleMouseDown} className={'w-[15px] h-full bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]'}></div>
                <div  className={'flex flex-col h-full w-screen min-w-[1px]'} style={{ flexBasis: `${((window.innerWidth - promptW) / window.innerWidth) * 100}%` }}>
                    <div className={'flex flex-col'}>
                        <div className={'bg-[#15314b] text-white font-bold flex rounded-[4px]'}>
                            <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Your Solutions</button>
                        </div>
                        <div style={{ height: 400 + "px" }}>
                            <Editor height={'100%'}
                                    defaultLanguage={'javascript'}
                                    theme={'vs-dark'}
                            />
                        </div>
                        <div className={'w-full h-[15px] bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]'}></div>
                        <div className={'flex justify-between bg-[#15314b] flex-1'}>
                            <div className={'text-white font-bold flex rounded-[4px]'}>
                                <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Custom Output</button>
                                <button className={'px-[15px] py-[10px] transition-colors hover:bg-[#626ee3]'}>Raw Output</button>
                                <button className={'px-[15px] py-[10px]'}></button>
                            </div>
                            <button className={'bg-[#008529] px-[15px] text-[14px] text-white font-open_sans'}>Submit code</button>
                        </div>
                        <div className={'p-[20px] bg-[#001528] h-full min-h-[350px]'}>
                            <h3 className={'text-[#445d6e] flex items-center h-full text-center w-full justify-center font-bold font-open_sans'}>Run Or Submit your code when you're ready</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const ProgrammingLanguageDropdown = () => {
    return <></>
}

const Timer = () => { }
