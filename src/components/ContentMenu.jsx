import { AnimatePresence } from "framer-motion";
import InterviewQuestionsIcon from '../icons/InterviewQuestionsIcon.svg'
import Link from "next/link";

const ContentMenu = () => {
    return (
        <AnimatePresence>
            <div className={''}></div>
        </AnimatePresence>
    )
}


const AlgoExpertSubMenu = () => {

    return <section className={'p-[15px] bg-[#626ee3] flex flex-col'}>
        <Link href={'/'} className={'flex gap-[20px] rounded-[4px] max-h-[60px] px-[15px] text-white bg-[rgba(0,0,0,.3)]'}>
            <InterviewQuestionsIcon className={'w-[30px]'} />
            Coding Interview Questions
        </Link>
    </section>
}

export default ContentMenu
