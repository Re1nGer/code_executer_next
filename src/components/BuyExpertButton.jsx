import BuyIcon from "@/icons/BuyIcon.svg";
import { motion } from "framer-motion";


const getStyles = (type) => {
    if (type === 'algo') return '#626ee3';
    else if (type === 'system') return '#890023';
    else if (type === 'frontend') return '#0e7f6b';
    else if (type === 'ml') return '#f37f1b';
    else if (type === 'infra') return '#2777b8';
    else return '#626ee3';
}

const BuyExpertButton = ({ className, type='algo', text }) => {

    return (
        <motion.button
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            className={`${className} bg-[#626ee3] origin-bottom transition-colors max-w-[228px]
             shadow-[0_2px_5px_0_rgba(0,0,0,.5)] rounded-[4px] p-[10px] hover:bg-[#4c5adf]`}
            style={{ background: getStyles(type) }}
        >
            <div className={'flex gap-[10px] justify-center'}>
                <BuyIcon className={'w-[25px] h-[25px] text-white'} />
                <span className={'flex justify-center items-center text-center text-white'}>{ text }</span>
            </div>
        </motion.button>
    );
}

export default BuyExpertButton;