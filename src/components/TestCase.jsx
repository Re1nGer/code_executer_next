import { useState } from "react";
import { motion } from "framer-motion";
import TickIcon from "@/icons/TickIcon.svg";
import CrossIcon from "@/icons/CrossIcon2.svg";
import ArrowIcon from "@/icons/ArrowDown.svg";

const TestCase = ({ passed, num, error, data }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleExpandClick = () => {
        setIsOpen(!isOpen);
    }

    return <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={'bg-[#15314b] text-white rounded-[4px] p-[1rem] cursor-pointer'}
        onClick={handleExpandClick}>
        <div className={'flex justify-between'}>
            { passed ? (
                <div className={'flex gap-[5px]'}>
                    <TickIcon className={'w-[20px] text-[#00af32]'} />
                    <h1> Test Case {num} passed! </h1>
                </div>
            ) : (
                <div className={'flex gap-[5px]'}>
                    <CrossIcon className={'w-[20px] text-red-600'} />
                    <h1> Test Case {num} failed. </h1>
                </div>
            ) }
            <div>
                <ArrowIcon className={'w-[15px]'} />
            </div>
        </div>
        { isOpen ? (
            <div className={'p-[20px]'}>
                <div className={'mb-[30px]'}>
                    <h1 className={'text-[#e9e9e9] items-center font-bold mb-[5px]'}>Output</h1>
                    <pre className={'language-json line-numbers text-white'}>
                    <code className={'language-json line-numbers'}>{ error ? error : data }</code>
                </pre>
                </div>
            </div>
        ) : null }
    </motion.section>
};

export default TestCase