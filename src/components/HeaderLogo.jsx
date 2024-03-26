import { useEffect, useState } from "react";
import { animate } from "framer-motion";
import Link from 'next/link'
import HeaderIcon from "@/icons/HeaderIcon.svg?react";

const HeaderLogo = () => {

    const [rotate, setRotate] = useState(0);

    const [sign, setSign] = useState(false);
    const handleOnLogoHover = () => {
        animate("#header_logo", { rotate: sign ? `-${rotate % 120}deg` : `${rotate % 120}deg` }, { duration: 2, type: 'inertia', velocity: 200 } )
        setRotate((rotate + 45) % 120);
        setSign(prevState => !prevState)
    }

    useEffect(() => {
        animate("#header_logo", { rotate: '135deg' }, { duration: 3, type: 'inertia', velocity: 500 } )
    }, []);

    return <Link href={"/product"} className={'max-w-[290px] flex flex-col gap-[5px] lg:gap-[5px] text-center'}>
        <div className={""}>
            <div className={"flex items-center justify-center text-white gap-[5px] lg:gap-[15px]"}>
                <HeaderIcon id={"header_logo"} className={"max-w-[48px] max-h-[20px] sm:max-h-[40px]"}
                            onMouseEnter={handleOnLogoHover}/>
                <h1 className={"sm:text-[36px] text-[20px] font-jura"}>AlgoExpert</h1>
            </div>
            <div className={"text-[#8d96eb] font-bold font-jura sm:text-[18px] text-[12px]"}>Ace the Technical Interviews</div>
        </div>
    </Link>;
}

export default HeaderLogo