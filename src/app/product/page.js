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
import WeSpeakLanguages from "@/components/WeSpeakLanguages";
import InteractiveBar from "@/components/InteractiveBar";
import Link from "next/link";
import Image from "next/image";



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
            <div className={'flex flex-col items-center justify-center w-full bg-transparent'}>
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
            <InteractiveBar />
            <ProductDivider />
            <PerfectPracticeEnvironment />
        </section>
    )
}

export default Product


const PerfectPracticeEnvironment = () => {

    return <div className={'py-[100px] px-[20px]'}>
        <div className={'flex w-full mx-auto max-w-[1200px]'}>
            <div className={'flex flex-col justify-center relative basis-[50%] max-w-[570px]'}>
                <h2 className={'text-[35px] mb-[20px] font-bold text-[#02203c] whitespace-nowrap'}>The Perfect Practice Environment.</h2>
                <div className={'mb-[25px] font-open_sans'}>
                    <p className={'text-[#445d6e] mb-[15px]'}>In an ideal world, you'd prepare for coding interviews by writing out solutions to problems in your language of choice, getting some hints if necessary, running your code against test cases, and looking at solutions when done.</p>
                    <p className={'text-[#445d6e] '}>We've turned that ideal world into the real world. Pick a language. Read the prompt. Write your solution. Run your code. Get some hints. Run your code again. Check the output. Pass the tests. View our solution. Watch our video. All within the same workspace.</p>
                </div>
                <div>
                    <Link href={'/questions/clrpeh1880000h3rp72i1xehr'}
                          className={'bg-[#626ee3] h-[50px] border-0 rounded-[4px] text-white flex justify-center items-center px-[40px] text-center transition-all hover:bg-[#4c5adf]'}>Try Our Workspace</Link>
                </div>
            </div>
            <div className={'h-full w-[60px]'}></div>
            <div className={'min-h-[500px] flex justify-center items-center relative basis-[50%]'} style={{ perspective: '1500px' }}>
                <div style={{ transform: "rotate3d(.5,-.866,0,15deg) rotate(1deg)"}} className={'absolute w-[610px] rounded-[4px] mx-auto'}>
                    <picture>
                        <div style={{ background: "linear-gradient(165deg,#fcfcfc 39%,#3e3e68)" }} className={'absolute h-full w-full z-[-1] left-0 top-0'}></div>
                        <Image width={600} height={450} src={'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/fbbc40f754e2336576a5.png'}
                               style={{ objectPosition: 'left top' }} className={'relative z-10'} alt={'workspace'} />
                    </picture>
                    <div className={'rounded-[4px] h-full absolute w-full top-0 left-0 bg-transparent'} style={{ background: "linear-gradient(165deg,#fcfcfc 39%,#3e3e68)"  }}></div>
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


