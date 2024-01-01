import BuyIcon from '../icons/BuyIcon.svg?react'
import { motion } from "framer-motion";

const BuyAlgoExpertButton = ({ className }) => {
    return (
        <motion.button className={`${className} bg-[#626ee3] transition-colors max-w-[228px] shadow-[0_2px_5px_0_rgba(0,0,0,.5)] rounded-[4px]  p-[10px] hover:bg-[#4c5adf]`}>
            <div className={'flex gap-[10px] justify-center'}>
                <BuyIcon className={'w-[25px] h-[25px] text-white'} />
                <span className={'flex justify-center items-center text-center text-white'}>Buy AlgoExpert</span>
            </div>
        </motion.button>
    )
}

export default BuyAlgoExpertButton
