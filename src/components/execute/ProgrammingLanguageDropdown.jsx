import ArrowIcon from '@/icons/ArrowDown.svg';
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuestionContext } from "@/hooks/useQuestionContext";

const ProgrammingLanguageDropdown = () => {

    const [open, setOpen] = useState(false);

    const { setCurrentLanguage, currentLanguage } = useQuestionContext();
    const handleLanguageChange = (language) => {
        setCurrentLanguage(language);
        setOpen(false);
    }

    return <div className={'relative w-[150px] h-[40px] text-white'}>
        <button onClick={() => setOpen(!open)} className={'bg-[#15314b] transition-colors cursor-pointer hover:bg-[#626ee3] h-full w-[150px] text-[14px] gap-[1rem] font-bold border-none items-center flex justify-between px-[15px]'}>
            <span className={'overflow-hidden whitespace-nowrap text-ellipsis font-open_sans capitalize'}>{ currentLanguage.language }</span>
            <ArrowIcon className={'w-[14px]'} />
        </button>
        { open ? (
            <motion.ul className={'absolute rounded-[4px] h-[350px] z-10 min-w-[100%] text-white text-[14px] font-bold'}>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'}>C#</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'}>C++</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'} onClick={() => handleLanguageChange({ id: 7, language: 'javascript' })}>JavaScript</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'}>Java</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'} onClick={() => handleLanguageChange({ id: 6, language: 'go' })}>Go</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'}>Kotlin</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'} onClick={() => handleLanguageChange({ id: 4, language: 'python' })}>Python</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'}>Swift</li>
                <li className={'bg-[#15314b] py-[10px] px-[15px] transition-colors cursor-pointer hover:bg-[#626ee3]'}>Typescript</li>
            </motion.ul>
        ) : null }
    </div>
}

export default ProgrammingLanguageDropdown;