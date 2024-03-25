import { useSession } from "next-auth/react";
import Image from "next/image";
import ArrowDownIcon from "@/icons/ArrowDown.svg";
import { AnimatePresence } from "framer-motion";
import React from "react";
import ProfileContent from "@/components/ProfileContent";
import {useHeaderContext} from "@/hooks/useHeaderContext";

const ProfileMenu = () => {

    const { data } = useSession();

    const name = data?.user?.name.split(' ').at(0);

    const { setIsProfileMenuOpen, isProfileMenuOpen } = useHeaderContext();

    const handleProfileClick = () => setIsProfileMenuOpen(!isProfileMenuOpen);

    return <section className={'relative w-full h-full'} onClick={(e) => e.stopPropagation()}>
        <div className={'flex gap-[10px] items-center text-white cursor-pointer'} onClick={handleProfileClick}>
            <Image src={data?.user?.image} className={'rounded-full'} alt={'user'} width={'35'} height={'35'} />
            <span className={'hidden sm:block overflow-hidden text-ellipsis text-[14px]'}>{name}</span>
            <ArrowDownIcon className={'hidden sm:block w-[11px] h-[11px]'} />
        </div>
        <AnimatePresence>
            { isProfileMenuOpen ? (
                <ProfileContent />
            ) : null }
        </AnimatePresence>
    </section>
}

export default ProfileMenu;