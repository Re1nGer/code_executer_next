import {useSession} from "next-auth/react";
import Image from "next/image";
import ArrowDownIcon from "@/icons/ArrowDown.svg";
import {AnimatePresence} from "framer-motion";
import React from "react";
import ProfileContent from "@/components/ProfileContent";

const ProfileMenu = ({ profileMenuOpen, setProfileMenuOpen }) => {

    const { data } = useSession();

    const name = data?.user?.name.split(' ').at(0);
    const handleProfileClick = () => setProfileMenuOpen(!profileMenuOpen);

    return <section className={'relative w-full'} onClick={(e) => e.stopPropagation()}>
        <div className={'flex gap-[10px] items-center text-white'}>
            <Image src={data?.user?.image} className={'rounded-full'} alt={'user'} width={'35'} height={'35'} />
            <span className={'overflow-hidden text-ellipsis'}>{name}</span>
            <ArrowDownIcon className={'w-[11px] h-[11px] cursor-pointer'} onClick={handleProfileClick} />
        </div>
        <AnimatePresence>
            { profileMenuOpen ? (
                <ProfileContent />
            ) : null }
        </AnimatePresence>
    </section>
}

export default ProfileMenu;