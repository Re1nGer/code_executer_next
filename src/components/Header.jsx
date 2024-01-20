'use client'

import React from 'react'
import SignUpModal from "@/components/SignUpModal.jsx";
import ProductMenu from "@/components/ProductMenu.jsx";
import HeaderLogo from "@/components/HeaderLogo.jsx";
import LogInButton from "@/components/LogInButton.jsx";
import ContentMenu from "@/components/ContentMenu";
import {useSession} from "next-auth/react";
import ProfileMenu from "@/components/ProfileMenu";
import {HeaderContext, HeaderContextProvider} from "@/contexts/HeaderContext";
import {useHeaderContext} from "@/hooks/useHeaderContext";


const Header = ({ bgColor = 'linear-gradient(-90deg, #02203c,#001528)', children }) => {

    const { data } = useSession();

    const isLoggedIn = data?.user;

    return (
        <HeaderContextProvider>
            <header
                className={'h-[540px] flex flex-col relative'}
                style={{ background: bgColor }}
            >
                <div className={'mx-[20px] py-[20px] flex justify-center items-center'}>
                    <HeaderLogo />
                    <div className={'w-[150px]'}></div>
                    <Navbar />
                    <div className={'w-[150px]'}></div>
                    <div className={'flex-1 max-w-[290px] items-start h-full flex justify-start'}>
                        { !isLoggedIn ? (
                            <LogInButton />
                        ) : <ProfileMenu /> }
                    </div>
                </div>
                <SignUpModal />
                <ProductMenu />
                <ContentMenu />
                { children }
            </header>
        </HeaderContextProvider>
    )
}

const Navbar = () => {

    const { setIsProductMenuOpen, setIsContentMenuOpen } = useHeaderContext();

    const handleOnProductMenuMouseOver = (event) => {
        event.stopPropagation();
        setIsProductMenuOpen(true);
    }

    const handleOnContentMenuMouseOver = (event) => {
        event.stopPropagation();
        setIsContentMenuOpen(true);
    }

    return (
        <nav className={'flex relative mx-[55px] mt-[10px] gap-[30px] h-full items-start font-open_sans text-[14px] text-white'}>
            <div onMouseOver={handleOnProductMenuMouseOver} className={'bg-transparent relative z-10 nav__link'}>Products</div>
            <div onMouseOver={handleOnContentMenuMouseOver} className={'bg-transparent relative z-10 nav__link'}>Content</div>
            <div className={'bg-transparent relative nav__link'}>Team</div>
            <div className={'bg-transparent font-bold relative italic nav__link'}>Purchase</div>
        </nav>
    );
}


export default Header

