const LogInButton = ({ onClick }) => {

    return <button className={"flex justify-center items-center" +
        " text-white font-[14px] font-open_sans hover:border-[#626ee3] rounded-sm" +
        " border-2 border-transparent transition-colors px-[8px] py-[5px]"}
                   onClick={onClick}>Log In
    </button>;
}

export default LogInButton