import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import ArrowIcon from '../icons/ArrowDown.svg';
import { motion } from "framer-motion";
import {useRef, useState} from "react";
import useOutsideMouseMove from "@/hooks/useOutsideMouseMove";
import QuestionsIcon from '../icons/QuestionsIcon.svg';
import AtomIcon from '../icons/AtomIcon.svg';
import AssessmentIcon from '../icons/AssessmentIcon.svg';
import MockCodingIcon from '../icons/MockIcon.svg';
import BulbIcon from '../icons/BulbIcon.svg'
import IndexIcon from '../icons/IndexIcon.svg';
import ContainersIcon from '../icons/ContainersIcon.svg';
import BracketsIcon from '../icons/BracketsIcon.svg';
import CssIcon from '../icons/CssIcon.svg'
import JavascriptIcon from '../icons/JavascriptIcon.svg';
import ReactIcon from '../icons/ReactIcon.svg';
import WebDevIcon from '../icons/WebDevIcon.svg';
import MLCrashCourseIcon from '../icons/MlCrashIcon.svg';
import MLDesignQuestionIcon from '../icons/MLDesignQuestionIcon.svg';
import MLLargeScaleIcon from '../icons/LargeScaleMLIcon.svg';
import InfraCrashCourseIcon from '../icons/InfraCrashCourse.svg';
import SmartContractsIcon from '../icons/SmartContractsIcon.svg';
import BlockChainCrashCourseIcon from '../icons/BlockchainCrashCourseIcon.svg';
import EtheriumIcon from '../icons/EtheriumIcon.svg';
import ProjectsIcon from '../icons/ProjectsIcon.svg';
import Web3Icon from '../icons/Web3ToolsIcon.svg';
import {useHeaderContext} from "@/hooks/useHeaderContext";



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
        case 'frontendexpert':
            return <FrontendExpertMenu />
        case 'blockchainexpert':
            return <BlockChainExpertMenu />
        case 'bonus':
            return <BonusMenu />
        default:
            return <AlgoExpertMenu />
    }
}

const ContentMenu = () => {

    //TODO: set up some enum for it
    const [itemSelected, setItemSelected] = useState('algoexpert');

    const contentMenuRef = useRef(null);

    const { isContentMenuOpen, setIsContentMenuOpen } = useHeaderContext();

    useOutsideMouseMove(contentMenuRef, () => setIsContentMenuOpen(false));

    return (
        <AnimatePresence>
                { isContentMenuOpen ? (
                    <>
                        <motion.div
                                ref={contentMenuRef}
                                className={'absolute bg-none w-full h-[50px] z-10'}>
                            <motion.div
                                initial={{ scale: .75 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: .75, opacity: 0 }}
                                onMouseOver={(e) => e.stopPropagation()}
                                className={'origin-[110px_15px] absolute h-[530px] w-[600px] left-[820px] top-[50px] z-10'}
                            >
                                <div className={'rounded-[4px] flex relative shadow-[0_0_40px_5px_rgba(0,0,0,.5)] h-full w-full'}>
                                    <div className={'flex flex-col basis-[220px] pt-[10px] pl-[10px] bg-white relative rounded-tl-[4px] rounded-bl-[4px]'}>
                                        <ContentMenuItem name={'AlgoExpert'}
                                                         href={'/content/algoexpert'}
                                                         onMouseOver={() => setItemSelected('algoexpert')}
                                                         selected={itemSelected === 'algoexpert'}
                                                         bgColor={'#626ee3'}
                                        />
                                        <ContentMenuItem name={'SystemsExpert'}
                                                         href={'/content/systemsexpert'}
                                                         bgColor={'#890023'}
                                                         onMouseOver={() => setItemSelected('systemsexpert')}
                                                         selected={itemSelected === 'systemsexpert'}
                                        />
                                        <ContentMenuItem name={'FrontendExpert'}
                                                         href={'/content/frontendexpert'}
                                                         bgColor={'#11967e'}
                                                         onMouseOver={() => setItemSelected('frontendexpert')}
                                                         selected={itemSelected === 'frontendexpert'}
                                        />
                                        <ContentMenuItem name={'MlExpert'}
                                                         href={'/content/mlexpert'}
                                                         bgColor={'#f37f1b'}
                                                         onMouseOver={() => setItemSelected('ml')}
                                                         selected={itemSelected === 'ml'}
                                        />
                                        <ContentMenuItem name={'InfraExpert'}
                                                         href={'/content/infraexpert'}
                                                         bgColor={'#2c85cd'}
                                                         onMouseOver={() => setItemSelected('infraexpert')}
                                                         selected={itemSelected === 'infraexpert'}
                                        />
                                        <ContentMenuItem name={'BlockChain'}
                                                         bgColor={'#bb20dd'}
                                                         onMouseOver={() => setItemSelected('blockchainexpert')}
                                                         selected={itemSelected === 'blockchainexpert'}
                                        />
                                        <ContentMenuItem name={'Bonus'}
                                                         bgColor={'#008700'}
                                                         onMouseOver={() => setItemSelected('bonus')}
                                                         selected={itemSelected === 'bonus'}
                                        />
                                    </div>
                                    { getSelectedItem(itemSelected) }
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                ) : null }
        </AnimatePresence>
    );
}


const ContentMenuItem = ({ name, href, onMouseOver, selected, bgColor }) => {

   return (
       <Link href={href ?? '/'} onMouseOver={onMouseOver}
            style={{ background: selected ? bgColor : '#fff', color: selected ? '#fff' : '#02203c' }}
            className={'flex justify-between cursor-pointer p-[15px] w-full font-bold text-[16px]' +
                ' bg-white text-[#02203c] relative rounded-tl-[4px] rounded-bl-[4px] hover:bg-[#626ee3] hover:text-white'}>
           { selected ? (
               <span className={'absolute top-[-15px] rounded-br-[7px] h-[15px] right-[-1px] w-[20px]'} style={{ boxShadow: `0 10px 0 0 ${bgColor}` }}></span>
           ) : null }
            <span>{ name }</span>
           { selected ? (
               <span className={'absolute bottom-[-15px] rounded-tr-[7px] h-[15px] right-[-1px] w-[20px] z-10'} style={{ boxShadow: `0 -10px 0 0 ${bgColor}` }}></span>
           ) : null }
            <ArrowIcon className={'w-[10px] rotate-[-90deg]'} />
       </Link>
   );
}


const AlgoExpertMenu = () => {
    return (
        <section className={'flex flex-col p-[15px] flex-1 bg-[#626ee3] h-full text-white gap-[15px] rounded-[4px]'}>
            <ContentMenuLink href={'/questions'} name={'Coding Interview Questions'} Icon={QuestionsIcon} />
            <ContentMenuLink href={'/algocourses'} name={'Data Structures Crash Course'} Icon={AtomIcon} />
            <ContentMenuLink href={'/'} name={'Coding Interview Assessments'} Icon={AssessmentIcon} />
            <ContentMenuLink href={'/'} name={'Mock Coding Interviews'} Icon={MockCodingIcon} />
            <ContentMenuLink href={'/'} name={'Coding Interview Tips'} Icon={BulbIcon} />
        </section>
    );
}

const SystemExpertMenu = () => {

    return <section className={'flex flex-col p-[15px] flex-1 bg-[#890023] h-full text-white gap-[15px] rounded-[4px]'}>
        <ContentMenuLink href={'/system'} name={'System Design Context Index'} Icon={IndexIcon} />
        <ContentMenuLink href={'/algocourses'} name={'System Design Fundamentals'} Icon={ContainersIcon} />
        <ContentMenuLink href={'/'} name={'System Design Questions'} Icon={QuestionsIcon} />
        <ContentMenuLink href={'/'} name={'System Design Quiz'} Icon={AssessmentIcon} />
        <ContentMenuLink href={'/'} name={'System Design Interview Tips'} Icon={BulbIcon} />
    </section>
}

const FrontendExpertMenu = () => {
    return <section className={'flex flex-col p-[15px] flex-1 bg-[#11967e] h-full text-white gap-[15px] rounded-[4px]'}>
        <ContentMenuLink href={'/questions'} name={'Frontend Content Index'} Icon={IndexIcon} />
        <ContentMenuLink href={'/algocourses'} name={'Frontend Interview Questions'} Icon={QuestionsIcon} />
        <ContentMenuLink href={'/'} name={'Html Crash Course'} Icon={BracketsIcon} />
        <ContentMenuLink href={'/'} name={'CSS Crash Course'} Icon={CssIcon} />
        <ContentMenuLink href={'/'} name={'JavaScript Crash Course'} Icon={JavascriptIcon} />
        <ContentMenuLink href={'/'} name={'React Crash Course'} Icon={ReactIcon} />
        <ContentMenuLink href={'/'} name={'Web Dev Fundamentals'} Icon={WebDevIcon} />
        <ContentMenuLink href={'/'} name={'Frontend Quiz'} Icon={QuestionsIcon} />
    </section>
}

const MlExpertMenu = () => {
    return <section className={'flex flex-col p-[15px] flex-1 bg-[#f37f1b] h-full text-white gap-[15px] rounded-[4px]'}>
        <ContentMenuLink href={'/questions'} name={'Ml Content Index'} Icon={IndexIcon} />
        <ContentMenuLink href={'/algocourses'} name={'Ml Crash Course'} Icon={MLCrashCourseIcon} />
        <ContentMenuLink href={'/'} name={'Ml Coding Questions'} Icon={QuestionsIcon} />
        <ContentMenuLink href={'/'} name={'Large-Scale ML'} Icon={MLLargeScaleIcon} />
        <ContentMenuLink href={'/'} name={'Ml Design Questions'} Icon={MLDesignQuestionIcon} />
        <ContentMenuLink href={'/'} name={'Ml Design Quiz'} Icon={AssessmentIcon} />
        <ContentMenuLink href={'/'} name={'Ml Interview Tips'} Icon={BulbIcon} />
    </section>
}
const InfraExpertMenu = () => {
    return <section className={'flex flex-col p-[15px] flex-1 bg-[#2c85cd] h-full text-white gap-[15px] rounded-[4px]'}>
        <ContentMenuLink href={'/questions'} name={'Infra Content Quiz'} Icon={IndexIcon} />
        <ContentMenuLink href={'/algocourses'} name={'Infra Crash Course'} Icon={InfraCrashCourseIcon} />
        <ContentMenuLink href={'/'} name={'Infra Coding Questions'} Icon={QuestionsIcon} />
        <ContentMenuLink href={'/'} name={'Infra Design Questions'} Icon={QuestionsIcon} />
        <ContentMenuLink href={'/'} name={'Infra Quiz'} Icon={AssessmentIcon} />
    </section>
}
const BlockChainExpertMenu = () => {
    return <section className={'flex flex-col p-[15px] flex-1 bg-[#bb20dd] h-full text-white gap-[10px] rounded-[4px]'}>
        <ContentMenuLink href={'/questions'} name={'BlockChain Content Quiz'} Icon={IndexIcon} />
        <ContentMenuLink href={'/algocourses'} name={'Blockchain Fundamentals'} Icon={BlockChainCrashCourseIcon} />
        <ContentMenuLink href={'/'} name={'Etherium and Smart Contracts'} Icon={EtheriumIcon} />
        <ContentMenuLink href={'/'} name={'Solidity Fundamentals'} Icon={BracketsIcon} />
        <ContentMenuLink href={'/'} name={'Advanced Solidity'} Icon={WebDevIcon} />
        <ContentMenuLink href={'/'} name={'Interacting With Smart Contracts'} Icon={SmartContractsIcon} />
        <ContentMenuLink href={'/'} name={'Web3 Tools'} Icon={Web3Icon} />
        <ContentMenuLink href={'/'} name={'Projects'} Icon={ProjectsIcon} />
    </section>
}
const BonusMenu = () => {
    return <section className={'flex flex-col p-[15px] flex-1 bg-[#008700] h-full text-white gap-[15px] rounded-[4px]'}>
        <ContentMenuLink href={'/questions'} name={'Behavioral Interview Prep'} />
    </section>
}

const ContentMenuLink = ({ href, name, Icon }) => {
    return (
        <Link href={href} className={'flex gap-[20px] items-center rounded-[4px] max-h-[60px] px-[15px] bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)] h-full'}>
            { Icon ? (
                <Icon className={'w-[30px]'} />
            ) : null }
            { name }
        </Link>
    );
}

export default ContentMenu
