import BuyIcon from "@/icons/BuyIcon.svg";

const BuyExpertButton = ({ className, type='algo', text }) => {

    const getStyles = () => {
        if (type === 'algo') return '#626ee3';
        else if (type === 'system') return '#890023';
        else return '#626ee3';
    }

    return (
        <button
            className={`${className} bg-[#626ee3] transition-colors max-w-[228px]
             shadow-[0_2px_5px_0_rgba(0,0,0,.5)] rounded-[4px] p-[10px] hover:bg-[#4c5adf]`}
            style={{ background: getStyles() }}
        >
            <div className={'flex gap-[10px] justify-center'}>
                <BuyIcon className={'w-[25px] h-[25px] text-white'} />
                <span className={'flex justify-center items-center text-center text-white'}>{ text }</span>
            </div>
        </button>
    );
}

export default BuyExpertButton;