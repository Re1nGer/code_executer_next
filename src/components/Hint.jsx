'use client'

import ArrowDown from "@/icons/ArrowDown.svg";
import { useState } from "react";

const Hint = ({ heading, body }) => {

    const [isBodyOpen, setIsBody] = useState(false);

    const handleBodyClick = () => {
        setIsBody(!isBodyOpen);
    }

    return (
        <>
            <pre
                className={'bg-[#15314b] flex justify-between px-[15px] py-[20px] text-[14px] rounded-[4px]'}>
                { heading }
                <ArrowDown className={'w-[15px] h-[15px] cursor-pointer'} onClick={handleBodyClick} />
            </pre>
            <div style={{ transform: isBodyOpen ? "scaleY(1)" : "scaleY(0)", height: isBodyOpen ? 'auto' : 0, transformOrigin: 'top',  transition: 'transform .3s linear' }}
                 className={'bg-[#15314b] overflow-hidden text-white font-open_sans'}>
                <p className={'pt-[10px] px-[20px] pb-[20px]'}>{ body }</p>
            </div>
        </>
    )
}

export default Hint
