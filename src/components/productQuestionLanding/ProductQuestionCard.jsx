import TickIcon from "@/icons/TickIcon.svg";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const ProductQuestionCard = forwardRef(({ title, backText }, ref) => {
    return <li className={'max-w-[290px] w-full h-[75px] md:max-h-full md:h-full product__question-section_landing-card_list'} ref={ref}>
        <div className={'shadow-[2px_2px_15px_0_rgba(0,0,0,.4)] w-full relative rounded-[4px] product__question-section_landing-card_container product__question-section_landing-card_list'}>
            <div className={'flex flex-row-reverse justify-between md:justify-center md:flex-col bg-[#15314b] w-full items-center p-[20px] md:p-[30px] text-center product__question-section_landing-card_inner'}>
                <div className={'bg-[#e4e4e4] h-[35px] w-[35px] mb-0 md:mb-[15px] rounded-full flex justify-center items-center'}>
                    <TickIcon className={'text-[#02203c] w-[20px]'} />
                </div>
                {title}
            </div>
            <div className={'absolute left-0 top-0 w-full h-full product__question-section_landing-card_back'}>{backText}</div>
        </div>
    </li>
});

export default motion(ProductQuestionCard);