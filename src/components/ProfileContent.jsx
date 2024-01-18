import {signOut, useSession} from "next-auth/react";
import { motion } from "framer-motion";
import AccountIcon from "@/icons/Account.svg";
import ProfileIcon from "@/icons/ProfileIcon.svg";
import DoorIcon from "@/icons/DoorIcon.svg";
import React from "react";

const ProfileContent = () => {

    const handleLogOut = () => signOut();

    const { data } = useSession();

    const name = data?.user?.name.split(' ').at(0);

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
                <button onClick={handleLogOut} className={'bg-[#02203c] flex gap-[15px]' +
                    ' items-center justify-center text-white py-[.5rem] transition-colors hover:bg-[#001528]'}>
                    <DoorIcon className={'w-[17px] h-[17px]'} />
                    Log Out
                </button>
            </div>
        </div>
    </motion.div>
}

export default ProfileContent;