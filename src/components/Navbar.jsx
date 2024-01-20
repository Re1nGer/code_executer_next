import {useHeaderContext} from "@/hooks/useHeaderContext";
import React from "react";

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

export default Navbar;