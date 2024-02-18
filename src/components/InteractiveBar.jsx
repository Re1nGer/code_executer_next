import { useState } from "react";

const InteractiveBar = () => {

    const [isYesClicked, setIsYesClicked] = useState(false);
    const [isNoClicked, setIsNoClicked] = useState(false);

    const handleClickYes = () => {
        setIsYesClicked(true);
       setIsNoClicked(false);
    }

    const handleClickNo = () => {
        setIsNoClicked(true);
        setIsYesClicked(false);
    }

    return <div className={'mt-[50px] max-w-[1200px] mx-auto'}>
        <div  className={''}>
            <div className={`bg-white rounded-[4px] shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#445d6e] font-open_sans mb-[20px] px-[25px] py-[20px] ${(isYesClicked || isNoClicked) ? 'interactive__bar-yes' : ''}`}>
                { (!isYesClicked && !isNoClicked) ? (
                    ' Hey there! Do you want to ace your upcoming coding interviews? '
                ) : '' }
                { (isYesClicked && !isNoClicked) ? 'Awesome, you\'re in the right place! Be sure to check out one of our sample questions, or take the leap and become an AlgoExpert!' : '' }
                { (isNoClicked && !isYesClicked) ? 'Aww, that\'s too bad. Perhaps you\'ve wandered to the wrong side of the internet.' : '' }
                <span className={'cursor__blink'}>|</span>
            </div>
            { (!isYesClicked && !isNoClicked) ? (
                <div className={'flex'}>
                    <button onClick={handleClickYes} className={'mr-[20px] font-open_sans border-0 shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#445d6e] px-[35px] py-[12px] rounded-[4px] bg-white transition-all'}>Of Course!</button>
                    <button onClick={handleClickNo} className={'border-0 font-open_sans shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#445d6e] px-[35px] py-[12px] rounded-[4px] bg-white transition-all'}>Nope.</button>
                </div>
            ) : null }
        </div>
    </div>
}

export default InteractiveBar;