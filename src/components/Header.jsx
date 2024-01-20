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


const Header = ({ type = 'algo', children }) => {

    const { data } = useSession();

    const isLoggedIn = data?.user;

    const getStyles = () => {
        if (type === 'algo')
            return 'linear-gradient(-90deg, #02203c,#001528)';
        else if (type === 'system') {
            return 'linear-gradient(-45deg,#0f0f0f 50%,#292929)';
        }

    }

    return (
        <HeaderContextProvider>
            <header
                className={'h-[540px] flex flex-col relative'}
                style={{ background: getStyles() }}
            >
                <div className={'mx-[20px] py-[20px] flex justify-center items-center'}>
                    <HeaderLogo />
                    <div className={'w-[150px]'}></div>
                    <Navbar />
                    <div className={'w-[150px]'}></div>
                    <div className={'flex-1 max-w-[290px] items-start h-full flex justify-start'}>
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

export default Header