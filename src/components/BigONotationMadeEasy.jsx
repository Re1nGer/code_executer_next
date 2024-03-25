import SandClockIcon from "@/icons/SandClockIcon.svg";
import StorageIcon from "@/icons/StorageIcon.svg";
import Link from "next/link";

const BigONotationMadeEasy = () => {
    return <div className={'relative py-[100px]'}>
        <h2 className={'mb-[60px] text-[#02203c] text-[35px] leading-[1.3] text-center'}>Big O Notation Made Easy.</h2>
        <div className={'flex flex-col md:flex-row mx-auto max-w-[1200px]'}>
            <div className={'flex flex-col max-w-[570px] justify-center'}>
                <h2 className={'text-[24px] mb-[10px] text-[#02203c] text-center font-bold'}>Time Complexity</h2>
                <div className={'flex flex-col items-center'}>
                    <p className={'mb-[15px] text-[#445d6e] font-open_sans text-center'}>Why does building a heap only take O(N) time? What does O(logN) really mean? What's the time-complexity difference between appending a value to an array and adding a character to a string? We address all of these things, and more.</p>
                    <SandClockIcon className={'max-w-[350px] w-[40%] text-[#02203c] mt-[40px]'} />
                </div>
            </div>
            <div className={'w-[60px] h-full'}></div>
            <div className={'flex flex-col max-w-[570px] justify-center items-center'}>
                <h2 className={'text-[24px] mb-[10px] text-[#02203c] text-center font-bold'}>Space Complexity</h2>
                <div className={'flex flex-col justify-center items-center'}>
                    <p className={'mb-[15px] text-[#445d6e] font-open_sans text-center'}>
                        Space Complexity
                        You know that thing you're kinda familiar with but not really? Yeah, that's space complexity. And it turns out it's pretty important. All of our video explanations dive deep into space-complexity to turn you into a well rounded Big O expert.</p>
                    <StorageIcon className={'max-w-[350px] w-[40%] text-[#02203c] mt-[40px]'} />
                </div>
            </div>
        </div>
        <div className={'flex justify-center items-center mt-[60px]'}>
            <Link href={'/purchase'}
                  className={'bg-[#626ee3] hover:bg-[#4c5adf] shadow-[0_2px_5px_0_rgba(0,0,0,.5)] h-[50px] px-[40px] flex justify-center items-center text-white'}>Become An AlgoExpert</Link>
        </div>
    </div>
}

export default BigONotationMadeEasy;