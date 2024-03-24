import {motion, useAnimation} from "framer-motion";
import {useState} from "react";
import ArrowLeft from "@/icons/ArrowLeft.svg";
import ArrowRight from "@/icons/ArrowRight.svg";

const TestimonialSlider= ({ children, offsetFactor = 7 }) => {

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
        <div className={'overflow-hidden max-w-[1000px] mx-auto '}>
            <motion.ul className={'flex flex-nowrap flex-col md:flex-row w-[500px] lg:w-[5000px]'} animate={control}>
                { children }
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
            <div className={'w-full flex justify-center my-[50px]'}>
                <motion.button whileHover={{ y: '-4px' }} className={'shadow-[0_2px_4px_rgba(50,50,93,.1)] rounded-[4px] border-none bg-white h-[50px] text-[#02203c] px-[40px]'}>
                    Read More Testimonials
                </motion.button>
            </div>
        </div>
    </section>
}

export default TestimonialSlider;