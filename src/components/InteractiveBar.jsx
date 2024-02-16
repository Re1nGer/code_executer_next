const InteractiveBar = () => {
    return <div className={'mt-[50px] max-w-[1200px] mx-auto'}>
        <div  className={''}>
            <div className={'bg-white rounded-[4px] shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#445d6e] font-open_sans mb-[20px] px-[25px] py-[20px]'}>
                Hey there! Do you want to ace your upcoming coding interviews?
                <span className={'cursor__blink'}>|</span>
            </div>
            <div className={'flex'}>
                <button className={'mr-[20px] font-open_sans border-0 shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#445d6e] px-[35px] py-[12px] rounded-[4px] bg-white transition-all'}>Of Course!</button>
                <button className={'border-0 font-open_sans shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#445d6e] px-[35px] py-[12px] rounded-[4px] bg-white transition-all'}>Nope.</button>
            </div>
        </div>
    </div>
}

export default InteractiveBar;