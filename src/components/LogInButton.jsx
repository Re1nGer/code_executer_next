import {useHeaderContext} from "@/hooks/useHeaderContext";

const LogInButton = () => {

    const { setIsLoginModalOpen } = useHeaderContext();

    const handleLoginClick = () => {
        setIsLoginModalOpen(true);
    }

    return <button className={"flex justify-center items-center" +
        " text-white font-[14px] font-open_sans hover:border-[#626ee3] rounded-sm" +
        " border-2 border-transparent transition-colors px-[8px] py-[5px] font-open_sans"}
                   onClick={handleLoginClick}>Log In
    </button>;
}

export default LogInButton