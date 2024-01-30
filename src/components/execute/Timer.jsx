import TimerIcon from '@/icons/ClockIcon.svg';

const Timer = () => {
    return <div>
        <button className={'rounded-bl-[4px] rounded-br-[4px] bg-[#15314b] font-bold px-[15px] h-[40px] hover:bg-[#626ee3]'}>
            <span className={'flex justify-center items-center whitespace-nowrap text-white'}>
                <TimerIcon className={'w-[25px]'} />
                <div className={'ml-[10px] font-open_sans text-[14px]'}>00:00:00</div>
            </span>
        </button>
    </div>
}

export default Timer;
