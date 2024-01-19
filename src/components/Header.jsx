'use client'

import React from 'react'
import SignUpModal from "@/components/SignUpModal.jsx";
import ProductMenu from "@/components/ProductMenu.jsx";
import HeaderLogo from "@/components/HeaderLogo.jsx";
import LogInButton from "@/components/LogInButton.jsx";
import ContentMenu from "@/components/ContentMenu";
import {useSession} from "next-auth/react";
import ProfileMenu from "@/components/ProfileMenu";


const Header = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const [isProductMenuOpen, setIsProductMenuOpen] = React.useState(false);

    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);

    const [isContentMenuOpen, setIsContentMenuOpen] = React.useState(false);

    const { data } = useSession();

    const isLoggedIn = data?.user;

    const handleOnMouseOver = (e) => {
        e.stopPropagation()
        setIsProductMenuOpen(true)
    }

    const handleOnMouseOverContentMenu = (e) => {
        e.stopPropagation();
        setIsContentMenuOpen(true);
    }

    const handleClickOutside = () => {
        setProfileMenuOpen(false);
    }

    const handleOnClickLogin = () => {
        setIsModalOpen(true)
    }

    const handleOnMouseMoveHeader = () => {
        setIsProductMenuOpen(false);
        setIsContentMenuOpen(false);
    }

    return (
            <header
                className={'h-[540px] bg-gradient-to-r from-[#02203c] to-[#001528] flex flex-col relative'}
                onClick={handleClickOutside}
            >
                <div className={'mx-[20px] py-[20px] flex justify-center items-center'}>
                    <HeaderLogo />
                    <div className={'w-[150px]'}></div>
                    <nav className={'flex relative mx-[55px] mt-[10px] gap-[30px] h-full items-start font-open_sans text-[14px] text-white'}>
                        <div onMouseOver={handleOnMouseOver} className={'bg-transparent relative z-10 nav__link'}>Products</div>
                        <div onMouseOver={handleOnMouseOverContentMenu} className={'bg-transparent relative z-10 nav__link'}>Content</div>
                        <div className={'bg-transparent relative nav__link'}>Team</div>
                        <div className={'bg-transparent font-bold relative italic nav__link'}>Purchase</div>
                    </nav>
                    <div className={'w-[150px]'}></div>
                    <div className={'flex-1 max-w-[290px] items-start h-full flex justify-start'}>
                        { !isLoggedIn ? (
                            <LogInButton onClick={handleOnClickLogin} />
                        ) : <ProfileMenu
                                profileMenuOpen={profileMenuOpen}
                                setProfileMenuOpen={setProfileMenuOpen}
                        /> }
                    </div>
                </div>
                <SignUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <ProductMenu isOpen={isProductMenuOpen} onClose={() => setIsProductMenuOpen(false)}/>
                <ContentMenu isOpen={isContentMenuOpen} onClose={() => setIsContentMenuOpen(false)} />
                { children }
            </header>
    )
}


export default Header

