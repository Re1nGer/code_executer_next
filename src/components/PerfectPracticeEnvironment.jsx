import Link from "next/link";
import Image from "next/image";

const PerfectPracticeEnvironment = () => {

    return <div className={'py-[100px] px-[20px]'}>
        <div className={'flex flex-col lg:flex-row items-center w-full mx-auto max-w-[1200px]'}>
            <div className={'flex flex-col justify-center relative basis-[50%] max-w-[570px]'}>
                <h2 className={'text-[35px] mb-[20px] font-bold text-[#02203c] whitespace-nowrap'}>The Perfect Practice Environment.</h2>
                <div className={'mb-[25px] font-open_sans'}>
                    <p className={'text-[#445d6e] mb-[15px]'}>In an ideal world, you'd prepare for coding interviews by writing out solutions to problems in your language of choice, getting some hints if necessary, running your code against test cases, and looking at solutions when done.</p>
                    <p className={'text-[#445d6e] '}>We've turned that ideal world into the real world. Pick a language. Read the prompt. Write your solution. Run your code. Get some hints. Run your code again. Check the output. Pass the tests. View our solution. Watch our video. All within the same workspace.</p>
                </div>
                <div className={'flex'}>
                    <Link href={'/questions/clrpeh1880000h3rp72i1xehr'}
                          className={'bg-[#626ee3] h-[50px] border-0 rounded-[4px] text-white flex justify-center items-center px-[40px] text-center transition-all hover:bg-[#4c5adf]'}>Try Our Workspace</Link>
                </div>
            </div>
            <div className={'lg:h-[500px] lg:w-[90px] h-0 w-0'}></div>
            <div className={'min-h-[500px] flex justify-center items-center relative basis-[50%]'} style={{ perspective: '1500px' }}>
                <div style={{ transform: "rotate3d(.5,-.866,0,15deg) rotate(1deg)"}} className={'absolute w-[610px] flex justify-center rounded-[4px] mx-auto'}>
                    <picture>
                        <Image width={600} height={450} src={'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/fbbc40f754e2336576a5.png'}
                               style={{ objectPosition: 'left top' }} className={'relative z-10 max-w-[400px] lg:max-w-[600px] w-full'} alt={'workspace'} />
                    </picture>
                </div>
            </div>
        </div>
    </div>
}

export default PerfectPracticeEnvironment;