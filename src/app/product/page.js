'use client'

import PlayIcon from '../../icons/PlayIcon.svg';
import ProductCards from "@/components/ProductCards";
import ComparisonTable from "@/components/ComparisonTable";
import {useAnimation, motion} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import ArrowLeft from '../../icons/ArrowLeft.svg';
import ArrowRight from '../../icons/ArrowRight.svg';



const Product = () => {
    return (
        <section className={'py-[250px] px-[20px]'}>
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


const TestimonialsCards = () => {

    const offsetFactor = 7;

    const control = useAnimation();

    const [initialXOffset, setInitialXOffset] = useState(0);

    const isLeftClickDisabled = initialXOffset === 0;

    const isRightClickDisabled = initialXOffset <= -21;

    const handleClickRight = () => {
        control.start({ x: initialXOffset - offsetFactor + '%' });
        setInitialXOffset(prevState => prevState - offsetFactor);
    }

    const handleClickLeft = () => {
        control.start({ x: initialXOffset + offsetFactor + '%' });
        setInitialXOffset(prevState => prevState + offsetFactor);
    }

    return <section className={'py-[100px] px-[20px] '}>
        <h2 className={'text-center text-[35px] mb-[20px]'}>
            And over 200,000 Satisfied Engineers
        </h2>
        <div className={'overflow-hidden max-w-[1000px] mx-auto'}>
            <motion.ul className={'flex flex-nowrap w-[5000px]'} animate={control}>
                <motion.li className={'w-[325px] mx-[6px]'}>
                    <TestimonialCard
                        imgSrc={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6592e47c701c3ba79dbb.jpg'}
                        name={'Corbin'}
                        title={'Software Developer'}
                        story={'As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.'}
                    />
                </motion.li>
                <motion.li className={'w-[325px] mx-[6px]'}>
                    <TestimonialCard
                        imgSrc={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6592e47c701c3ba79dbb.jpg'}
                        name={'Corbin'}
                        title={'Software Developer'}
                        story={'As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.'}
                    />
                </motion.li>
                <motion.li className={'w-[325px] mx-[6px]'}>
                    <TestimonialCard
                        imgSrc={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6592e47c701c3ba79dbb.jpg'}
                        name={'Corbin'}
                        title={'Software Developer'}
                        story={'As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.'}
                    />
                </motion.li>
                <motion.li className={'w-[325px] mx-[6px]'}>
                    <TestimonialCard
                        imgSrc={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6592e47c701c3ba79dbb.jpg'}
                        name={'Corbin'}
                        title={'Software Developer'}
                        story={'As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.'}
                    />
                </motion.li>
                <motion.li className={'w-[325px] mx-[6px]'}>
                    <TestimonialCard
                        imgSrc={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6592e47c701c3ba79dbb.jpg'}
                        name={'Corbin'}
                        title={'Software Developer'}
                        story={'As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.'}
                    />
                </motion.li>
                <motion.li className={'w-[325px] mx-[6px]'}>
                    <TestimonialCard
                        imgSrc={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6592e47c701c3ba79dbb.jpg'}
                        name={'Corbin'}
                        title={'Software Developer'}
                        story={'As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that AlgoExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend AlgoExpert highly enough.'}
                    />
                </motion.li>
            </motion.ul>
            <div className={'w-full flex justify-center pt-[10px] gap-[20px] mb-[20px]'}>
                <motion.button whileHover={{ y: isLeftClickDisabled ?  0 : '-3px' }}
                               disabled={isLeftClickDisabled}
                               style={{ cursor: isLeftClickDisabled ? 'not-allowed' : 'pointer', color: isLeftClickDisabled ? 'grey' : '',  }}
                               onClick={handleClickLeft}
                               className={'text-[#626ee3] flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full shadow-[0_6px_10px_2px_rgba(50,50,93,.1)]'}>
                    <ArrowLeft className={'w-[20px]'} />
                </motion.button>
                <motion.button whileHover={{ y: isRightClickDisabled ?  0 : '-3px' }}
                               disabled={isRightClickDisabled}
                               style={{ cursor: isRightClickDisabled ? 'not-allowed' : 'pointer', color: isRightClickDisabled ? 'grey' : '' }}
                               onClick={handleClickRight}
                               className={'text-[#626ee3] flex justify-center items-center w-[40px] h-[40px] bg-white rounded-full shadow-[0_6px_10px_2px_rgba(50,50,93,.1)]'}>
                    <ArrowRight className={'w-[20px]'} />
                </motion.button>
            </div>
        </div>
    </section>
}


const TestimonialCard = ({ imgSrc, name, title, story }) => {
    return <div className={'rounded-[4px] flex flex-col font-open_sans h-[320px] mt-[30px] mx-[5px] mb-[15px] px-[20px] pb-[20px] border-t-[4px] border-t-[#626ee3] bg-white shadow-[0_2px_10px_rgba(50,50,93,.1)]'}>
        <div className={'flex justify-center items-center mt-[-2rem]'}>
            <Image height={60} width={60}
                   className={'rounded-full'} src={imgSrc} alt={'tesimonial'} />
        </div>
        <h5 className={'text-center w-full mb-[10px]'}>{ name }</h5>
        <div className={'flex flex-col items-center justify-center'}>
            <h5 className={'text-center mb-[10px]'}>{ title }</h5>
            <Image height={'25'} width={'83'} className={'mt-[5px] mb-[10px]'} src={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6591cdc0702b32310306.png'} alt={'amazon'} />
        </div>
        <div className={'overflow-y-auto product__test_scrollbar'}>
            <p className={'text-[14px] font-open_sans whitespace-normal text-[#445d6e] px-[5px]'}>
                { story }
            </p>
        </div>
    </div>
}