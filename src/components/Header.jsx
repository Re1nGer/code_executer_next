'use client'

import React from 'react'
import SignUpModal from "@/components/SignUpModal.jsx";
import ProductMenu from "@/components/ProductMenu.jsx";
import HeaderLogo from "@/components/HeaderLogo.jsx";
import LogInButton from "@/components/LogInButton.jsx";
import ContentMenu from "@/components/ContentMenu";
import { useSession } from "next-auth/react";
import ProfileMenu from "@/components/ProfileMenu";
import { HeaderContextProvider } from "@/contexts/HeaderContext";
import Navbar from "@/components/Navbar";
import HamburgerIcon from "@/icons/Hamburger.svg";


const Header = ({ type = 'algo', children }) => {

    const { data } = useSession();

    const isLoggedIn = data?.user;

    const getStyles = () => {
        if (type === 'algo')
            return 'linear-gradient(-90deg, #02203c,#001528)';
        else if (type === 'system')
            return 'linear-gradient(-45deg,#0f0f0f 50%,#292929)';
        else if (type === 'frontend')
            return 'linear-gradient(-45deg,#00334c 50%,#00557f)';
        else if (type === 'ml')
            return 'linear-gradient(-45deg,#263238 50%,#3b4d56)';
        else if (type === 'infra')
            return 'linear-gradient(-45deg,#253141 50%,#384a62)';
    }

    return (
        <HeaderContextProvider>
            <header
                className={'h-[540px] flex flex-col relative'}
                style={{ background: getStyles() }}
            >
                <div className={'mx-auto max-w-[1300px] w-full py-[10px] px-[10px] flex justify-between'}>
                    <HeaderHamburger />
                    <HeaderLogo />
                    <Navbar />
                    <div className={'max-w-[25px] md:max-w-[150px] lg:max-w-[290px] items-start h-full flex justify-end md:flex-1'}>
                        { !isLoggedIn ? <LogInButton /> : <ProfileMenu /> }
                    </div>
                </div>
                <SignUpModal />
                <ProductMenu />
                <ContentMenu />
                { children }
            </header>
        </HeaderContextProvider>
    );
}


const HeaderHamburger = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return <div className={'flex lg:hidden h-full relative'}>
        <HamburgerIcon className={'h-[30px] text-white cursor-pointer transition-colors'} />
{/*
        <section className={'bg-[#02203c] h-full pt-[60px] px-[20px]'}>
            <HeaderLogo />
        </section>
*/}
    </div>
}

export default Header