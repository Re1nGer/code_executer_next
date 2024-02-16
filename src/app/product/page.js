'use client'

import PlayIcon from '../../icons/PlayIcon.svg';
import ProductCards from "@/components/ProductCards";
import ComparisonTable from "@/components/ComparisonTable";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import TestimonialsCards from "@/components/TestimonialsCards";
import ProductQuestionSection from "@/components/productQuestionLanding/ProductQuestionSection";
import SetUsApart from "@/components/SetUsApart";
import ProductDivider from "@/components/ProductDivider";
import ProductDataStructuresCourse from "@/components/ProductDataStructuresCourse";
import JavaScriptIcon from '@/icons/JavaScriptLangIcon.svg';
import TypescriptIcon from '@/icons/TypescriptIcon.svg';
import PythonIcon from '@/icons/PythonIcon.svg';
import MobileIcon from '@/icons/MobileIcon.svg';
import AndroidIcon from '@/icons/AndroidIcon.svg';
import CIcon from '@/icons/CIcon.svg';
import JavaIcon from '@/icons/JavaIcon.svg';
import WindowsIcon from '@/icons/WindowsIcon.svg';
import GoIcon from '@/icons/GoIcon.svg';
import JavascriptImage from '@/images/javascript_img.png';
import Image from "next/image";

const PythonImage = 'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/33a06b60c0d00871f587.png';
const GoImage = 'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/4f67b9c3f3ba9f0538d0.png';
const CImage = 'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/f31a3af6b144f73bf48d.png';


const Product = () => {
    return (
        <section className={'py-[250px]'}>
            <h1 className={'w-full text-center text-[35px] mb-[20px] text-[#02203c]'}>What is AlgoExpert</h1>
            <div className={'flex justify-center mb-[50px]'}>
                <button
                    className={'bg-transparent max-w-[190px] p-[5px] w-full rounded-[4px] border-[#02203c] border-[2px] flex justify-center gap-[4px] items-center'}>
                    <PlayIcon className={'w-[30px] h-[30px]'}/>
                    <h3>Watch the Video</h3>
                </button>
            </div>
            <div className={'flex flex-col items-center justify-center w-full'}>
                <ProductCards />
                <ComparisonTable />
                <OutcomesCard />
                <TestimonialsCards />
            </div>
            <ProductQuestionSection />
            <SetUsApart />
            <ProductDivider />
            <ProductDataStructuresCourse />
            <ProductDivider />
            <WeSpeakLanguages />
        </section>
    )
}

export default Product

const WeSpeakLanguages = () => {
    return <div className={'py-[100px] px-[20px]'}>
        <div className={'max-w-[1200px] mx-auto flex'}>
            <div className={'flex flex-col justify-center relative'}>
                <h2 className={'mb-[20px] text-[#02203c] text-[35px] leading-[1.3]'}>We Speak 9 languages</h2>
                <div>
                    <p className={'max-w-[700px] mb-[30px] font-open_sans text-[#445d6e] leading-[1.7]'}>
                        There's nothing more frustrating than opening an interview prep book, only to find a bunch of solutions in a programming language that you don't know. That's why all of our questions come with complete written solutions in 9 popular languages
                    </p>
                    <ul>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <JavaScriptIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Javascript</span>
                            <p>, for all you Front-End Developers</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <TypescriptIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Typescript</span>
                            <p>, for all you Edgy JavaScripters</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <PythonIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Python</span>
                            <p>, for all you Data Scientists</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <MobileIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Swift</span>
                            <p>, for all you iOS Engineers</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <AndroidIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Androiders</span>
                            <p>, for all you Androiders</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <CIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>C++</span>
                            <p>, for all you Old Schoolers</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <JavaIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Java</span>
                            <p>, for all you Masochists</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <WindowsIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>C#</span>
                            <p>, for all you Microsofters</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <GoIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Go</span>
                            <p>, for all you Kool Kidz</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'w-[60px] h-full'}></div>
            <div className={'w-full items-center flex flex-col justify-center relative basis-[50%]'}>
                <div className={'flex basis-[50%] justify-center'}>
                    <div id={'spinner'} className={'h-full'}>
                        <div id={'shadowContainer'}></div>
                        <div id={'actualCube'} style={{ perspective: '800px', perspectiveOrigin: '50% 100%' }}>
                            <motion.div id={'cubeFaces'} initial={null} animate={{ rotateY: '1turn', transition: { repeatType: 'loop' } }} style={{ transformStyle: 'preserve-3d' }} className={'relative w-[300px]'}>
                                <div id={'cubeFace cubeFront'} className={'bg-[#3e526a] cube__face'} style={{ transform: 'translateZ(150px)'}}>
                                    <Image src={JavascriptImage} width={'300'} height={'300'} className={'w-full'} alt={'javascript logo'} />
                                </div>
                                <div id={'cubeFace cubeBack'} className={'bg-[#3e526a] cube__face'} style={{ transform: 'translateZ(-150px) rotateY(180deg)'}}>
                                    <Image src={PythonImage} width={'300'} height={'300'} className={'w-full'} alt={'python logo'} />
                                </div>
                                <div id={'cubeFace cubeTop'} className={'bg-[#02203c] cube__face'}
                                     style={{ transform: 'translateZ(-150px) rotateY(180deg)', transformOrigin: 'top center'}}>
                                </div>
                                <div id={'cubeFace cubeBottom'} className={'bg-[#02203c] cube__face'}
                                     style={{ transform: 'rotateX(90deg) translateY(150px)', transformOrigin: 'bottom center'}}>
                                </div>
                                <div id={'cubeFace cubeLeft'} className={'bg-[#3e526a] cube__face'}
                                     style={{ transform: 'rotateY(270deg) translateX(-150px)', transformOrigin: 'center left'}}>
                                    <Image src={GoImage} width={'300'} height={'300'} className={'w-full'} alt={'go logo'} />
                                </div>
                                <div id={'cubeFace cubeRight'} className={'bg-[#3e526a] cube__face'}
                                     style={{ transform: 'rotateY(-270deg) translateX(150px)', transformOrigin: 'top right'}}>
                                    <Image src={CImage} width={'300'} height={'300'} className={'w-full'} alt={'c logo'} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


const OutcomesCard = () => {


    return <section className={'py-[120px] px-[20px] relative overflow-hidden'}>
        <div className={'max-w-[1200px] bg-white rounded-[4px] py-[60px] px-[40px] flex flex-col shadow-[0_60px_0_rgba(0,0,0,.1)]'}>
            <h2 className={'text-center mb-[20px] text-[35px] text-[#02203c]'}>With Great Outcomes.</h2>
            <h4 className={'text-[#02203c] mb-[50px] text-[18px] text-center'}>Out customers have gotten offers from awesome companies.</h4>
{/*
            <OutcomesTickerSlider />
*/}
        </div>
    </section>
}


const OutcomesTickerSlider = () => {
    const controls = useAnimation();

    const anotherTrack = useAnimation();

    const thirdTrack = useAnimation();

    const variants = {
        hidden: { x: '-150%' },
        visible: { x: "100%", transition: { x: { duration: 40 }, ease: 'linear', repeat: Infinity, repeatType: 'reverse', repeatDelay: 0 } },
    };

    const anotherVariant=  {
        hidden: { x: '-150%' },
        visible: { x: "100%", transition: { x: { duration: 50 }, delay: 50, ease: 'linear', repeat: Infinity, repeatDelay: 0 } },
    }

    const thirdVariant=  {
        hidden: { x: '-150%' },
        visible: { x: "100%", transition: { x: { duration: 5 },  delay: 5, duration: 6, ease: 'linear', repeat: Infinity, type: '', repeatDelay: 0 } },
    }


    useEffect(() => {
        controls.start('visible');
    }, [])

    useEffect(() => {
        anotherTrack.start('visible');
    }, [])

    useEffect(() => {
        thirdTrack.start('visible');
    }, [])

    return (
        <section className={'relative'}>
            <motion.div
                className="flex gap-[20px]"
                variants={variants}
                initial="hidden"
                animate={controls}
            >
                <Outcome />
                <Outcome />
                <Outcome />
                <Outcome />
                <Outcome />
            </motion.div>
            <motion.div
                className="flex gap-[20px] absolute top-0"
                initial={'hidden'}
                animate={anotherTrack}
                variants={anotherVariant}
            >
                <Outcome />
                <Outcome />
                <Outcome />
                <Outcome />
                <Outcome />
            </motion.div>
{/*
            <motion.div
                className="flex gap-[20px] absolute top-0"
                initial={'hidden'}
                animate={thirdTrack}
                variants={thirdVariant}
            >
                <Outcome />
                <Outcome />
                <Outcome />
            </motion.div>
*/}
        </section>
    );
}

const Outcome = () => {
    return <div className={'m-[20px] text-[20px] font-bold'}>Some Dummy Text</div>
}


