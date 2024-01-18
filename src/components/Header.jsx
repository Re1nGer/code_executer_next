'use client'

import React, {useState} from 'react'
import SignUpModal from "@/components/SignUpModal.jsx";
import ProductMenu from "@/components/ProductMenu.jsx";
import HeaderLogo from "@/components/HeaderLogo.jsx";
import LogInButton from "@/components/LogInButton.jsx";
import ContentMenu from "@/components/ContentMenu";
import ArrowDownIcon from '../icons/ArrowDown.svg';
import { useSession } from "next-auth/react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import ProfileIcon from '../icons/ProfileIcon.svg';
import AccountIcon from '../icons/Account.svg';
import DoorIcon from '../icons/DoorIcon.svg';


const Header = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false)

    const { data } = useSession();

    const isLoggedIn = data?.user;

    const handleOnMouseOver = (e) => {
        e.stopPropagation()
        setIsProductMenuOpen(true)
    }

    const handleOnClickLogin = () => {
        setIsModalOpen(true)
    }

    return (
            <header
                className={'h-[540px] bg-gradient-to-r from-[#02203c] to-[#001528] flex flex-col'}
                onMouseMove={() => setIsProductMenuOpen(false)}
            >
                <div className={'mx-[20px] py-[30px] flex justify-center items-center relative'}>
                    <HeaderLogo />
                    <div className={'w-[150px]'}></div>
                    <nav
                        className={'flex relative mx-[55px] gap-[30px] h-full items-start font-open_sans text-[14px] text-white'}
                        onMouseMove={(e) => e.stopPropagation()}>
                        <div onMouseOver={handleOnMouseOver} className={'bg-transparent relative nav__link'}>Products</div>
                        <div className={'bg-transparent relative nav__link'}>Content</div>
                        <div className={'bg-transparent relative nav__link'}>Team</div>
                        <div className={'bg-transparent font-bold relative italic nav__link'}>Purchase</div>
                    </nav>
                    <div className={'w-[150px]'}></div>
                    <div className={'flex-1 max-w-[290px] items-start h-full flex justify-start'}>
                        { !isLoggedIn ? (
                            <LogInButton onClick={handleOnClickLogin} />
                        ) : <ProfileMenu image={data?.user?.image} name={data?.user?.name?.split(' ')[0]} /> }
                    </div>
                </div>
                <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                <ProductMenu isOpen={isProductMenuOpen} onClose={() => setIsProductMenuOpen(false)}/>
                <ContentMenu />
                { children }
            </header>
    )
}


export default Header

const ProfileMenu = ({ image, name }) => {

    const [openContent, setOpenContent] = useState(false);

    const handleProfileClick = ()=> setOpenContent(!openContent);

    return <section className={'relative w-full'}>
        <div className={'flex gap-[10px] items-center text-white'}>
            <Image src={image} className={'rounded-full'} alt={'user'} width={'35'} height={'35'} />
            <span className={'overflow-hidden text-ellipsis'}>{name}</span>
            <ArrowDownIcon className={'w-[11px] h-[11px] cursor-pointer'} onClick={handleProfileClick} />
        </div>
        <AnimatePresence>
            { openContent ? (
                <ProfileContent name={name} />
            ) : null }
        </AnimatePresence>
    </section>
}

const ProfileContent = ({ name }) => {
    return <motion.div initial={{ scale: 0 }} animate={{scale: 1}} exit={{scale: 0}}
                       className={'max-w-[290px] origin-top-right z-10 absolute top-[45px] right-[170px] rounded-[4px] bg-[#f6f9fc] w-full min-h-[150px]'}>
        <div className={'bg-[#f6f9fc] h-full text-[14px] rounded-[4px]'}>
            <div className={'shadow-[0_1px_3px_0_rgba(0,0,0,.2)] rounded-[4px] w-full flex flex-col items-center py-[1rem] gap-[.5rem]'}>
                <span className={''}>Welcome, <b>{name}</b></span>
                <span>You're on a Google account</span>
            </div>
            <div className={'flex flex-col gap-[15px] p-[15px]'}>
                <button className={'px-[40px] flex gap-[10px] text-[#02203c]' +
                    ' rounded-[4px] transition-colors shadow-[0_2px_4px_rgba(50,50,93,.1)] py-[.5rem] hover:bg-[#e6e6e6]'}>
                    <AccountIcon className={'w-[22px] h-[22px]'} />
                    Account Information
                </button>
                <button className={'px-[40px] flex gap-[10px] text-[#02203c]' +
                    ' rounded-[4px] transition-colors shadow-[0_2px_4px_rgba(50,50,93,.1)] py-[.5rem] hover:bg-[#e6e6e6]'}>
                    <ProfileIcon className={'w-[22px] h-[22px]'} />
                    Recruiting Profile
                </button>
                <button className={'bg-[#02203c] flex gap-[15px] items-center justify-center text-white py-[.5rem] '}>
                    <DoorIcon className={'w-[17px] h-[17px]'} />
                    Log Out
                </button>
            </div>
        </div>
    </motion.div>
}