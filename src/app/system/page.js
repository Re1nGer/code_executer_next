'use client'

import SystemsExpertHeader from "@/components/SystemsExpertHeader";
import { motion } from "framer-motion";
import BuyExpertButton from "@/components/BuyExpertButton";
import QuestionIcon from '../../icons/QuestionsIcon.svg';

const SystemExpert = () => {
    return (
        <>
            <SystemsExpertHeader>
                <div className={`flex justify-center min-h-[320px] gap-[50px]`}>
                    <div className={'pl-[20px] text-white basis-[50%] flex justify-end'}>
                        <SystemExpertLanding />
                    </div>
                    <div className={'flex-1 max-h-[700px] product__banner_container'}>
                        <div className={'text-white font-bold max-h-[500px] max-w-[600px] product__banner'}>
                            <div style={{ perspective: '500px' }} className={'relative'} >
                                <div className={'max-w-[500px] system-expert__landing'}>
                                    <div className={'h-[60px] system-expert__landing-item_shadow-up'}></div>
                                    <motion.div initial={{ height: 0 }} animate={{ height: '60px', transition:{ duration: 1 } }}
                                                className={'h-[60px] gap-[30px] items-center bg-white' +
                                        ' text-black text-[20px] rounded-[4px] flex overflow-hidden mb-4 px-[20px] system-expert__landing-item'}>
                                        <QuestionIcon className={'w-[50px] text-white'} />
                                        Dummy Text
                                    </motion.div>
                                    <motion.div className={'h-[60px] gap-[30px] items-center bg-white' +
                                        ' text-black text-[20px] rounded-[4px] flex overflow-hidden mb-4 px-[20px] system-expert__landing-item'}>
                                        <QuestionIcon className={'w-[50px] text-white'} />
                                        Dummy Text
                                    </motion.div>
                                    <motion.div className={'h-[60px] gap-[30px] items-center bg-white' +
                                        ' text-black text-[20px] rounded-[4px] flex overflow-hidden mb-4 px-[20px] system-expert__landing-item'}>
                                        <QuestionIcon className={'w-[50px] text-white'} />
                                        Dummy Text
                                    </motion.div>
                                    <motion.div className={'h-[60px] gap-[30px] items-center bg-white' +
                                        ' text-black text-[20px] rounded-[4px] flex overflow-hidden px-[20px] system-expert__landing-item'}>
                                        <QuestionIcon className={'w-[50px] text-white'} />
                                        Dummy Text
                                    </motion.div>
                                    <div className={'h-[40px] system-expert__landing-item_shadow-down'}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SystemsExpertHeader>
        </>
    )
}


const SystemExpertLanding = () => {
    return <div className={"max-w-[500px] flex flex-col items-start justify-center"}>
        <h1 className={"text-[38px] mb-[20px]"}>SystemsExpert</h1>
        <p className={"font-open_sans text-[18px] mb-[30px]"}>An unparalleled course on large-scale distributed systems.
            Everything you need to ace the systems design interviews.</p>
        <motion.div initial={{scale: .5}} animate={{scale: 1, opacity: 1}} className={"w-full opacity-0"}>
            <BuyExpertButton className={"w-full"} type={'system'} text={'Buy SystemsExpert'}/>
        </motion.div>
    </div>;
}

export default SystemExpert;
