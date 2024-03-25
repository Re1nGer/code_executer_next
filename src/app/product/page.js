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
import PerfectPracticeEnvironment from "@/components/PerfectPracticeEnvironment";
import BigONotationMadeEasy from "@/components/BigONotationMadeEasy";
import BetterWayToLandInterviews from "@/components/BetterWayToLandInterviews";



const Product = () => {
    return (
        <section className={'py-[100px] px-[20px]'}>
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
            <ProductDivider />
            <BigONotationMadeEasy />
            <BetterWayToLandInterviews />
        </section>
    )
}

export default Product



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


