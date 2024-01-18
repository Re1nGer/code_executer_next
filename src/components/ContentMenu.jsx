import { AnimatePresence } from "framer-motion";
import InterviewQuestionsIcon from '../icons/InterviewQuestionsIcon.svg'
import Link from "next/link";
import ArrowIcon from '../icons/ArrowDown.svg';
import { motion } from "framer-motion";
import { useState } from "react";

const ContentMenu = ({ isOpen }) => {

    //TODO: set up some enum for it
    const [itemSelected, setItemSelected] = useState('algoexpert');

    const getSelectedItem = (item) => {
        switch (item) {
            case 'algoexpert':
                return <AlgoExpertMenu />
            case 'systemsexpert':
                return <SystemExpertMenu />
            case 'mlexpert':
                return <MlExpertMenu />
            case 'infraexpert':
                return <InfraExpertMenu />
            case 'blockchainexpert':
                return <BlockChainExpertMenu />
            case 'bonus':
                return <BonusMenu />
            default:
                return <AlgoExpertMenu />
        }
    }

    return (
        <AnimatePresence>
            { isOpen ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className={'absolute origin-[110px_15px] h-[530px] w-[600px] top-[60px] left-[43%] z-10'}
                     onMouseMove={(e) => e.stopPropagation()}>
                    <div className={'rounded-[4px] flex relative shadow-[0_0_40px_5px_rgba(0,0,0,.5)] h-full w-full'}>
                        <div className={'flex flex-col basis-[220px] pt-[10px] pl-[10px] bg-white relative rounded-tl-[4px] rounded-bl-[4px]'}>
                            <ContentMenuItem name={'AlgoExpert'} onMouseOver={() => setItemSelected('algoexpert')} selected={itemSelected === 'algoexpert'} />
                            <ContentMenuItem name={'SystemsExpert'} onMouseOver={() => setItemSelected('systemsexpert')} />
                            <ContentMenuItem name={'MlExpert'} onMouseOver={() => setItemSelected('mlexpert')}/>
                            <ContentMenuItem name={'InfraExpert'} onMouseOver={() => setItemSelected('infraexpert')} />
                            <ContentMenuItem name={'BlockChain'} onMouseOver={() => setItemSelected('blockchainexpert')} />
                            <ContentMenuItem name={'Bonus'} onMouseOver={() => setItemSelected('bonus')} />
                        </div>
                        { getSelectedItem(itemSelected) }
                    </div>
                </motion.div>
            ) : null }
        </AnimatePresence>
    );
}


const ContentMenuItem = ({ name, onMouseOver, selected, bgColor }) => {

   return (
       <div onMouseOver={onMouseOver}
            style={{ background: selected ? '#626ee3' : '#fff', color: selected ? '#fff' : '#02203c' }}
            className={'flex justify-between cursor-pointer p-[15px] w-full font-bold text-[16px]' +
                ' bg-white text-[#02203c] relative rounded-tl-[4px] rounded-bl-[4px] hover:bg-[#626ee3] hover:text-white header__content_menu--hover'}>
            <span>{ name }</span>
            <ArrowIcon className={'w-[10px] rotate-[-90deg]'} />
       </div>
   );
}


const AlgoExpertMenu = () => {
    return (
        <section className={'flex flex-col p-[15px] flex-1 bg-[#626ee3] h-full text-white gap-[15px] rounded-[4px]'}>
            <ContentMenuLink href={'/questions'} name={'Coding Interview Questions'} />
            <ContentMenuLink href={'/algocourses'} name={'Data Structures Crash Course'} />
            <ContentMenuLink href={'/'} name={'Coding Interview Assessments'} />
            <ContentMenuLink href={'/'} name={'Mock Coding Interviews'} />
            <ContentMenuLink href={'/'} name={'Coding Interview Tips'} />
        </section>
    );
}

const SystemExpertMenu = () => {}
const MlExpertMenu = () => {}
const InfraExpertMenu = () => {}
const BlockChainExpertMenu = () => {}
const BonusMenu = () => {}

const ContentMenuLink = ({ href, name, Icon }) => {
    return (
        <Link href={href} className={'flex gap-[20px] rounded-[4px] max-h-[60px] px-[15px] bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)] py-[15px]'}>
            <InterviewQuestionsIcon className={'w-[30px]'} />
            { name }
        </Link>
    );
}

export default ContentMenu
