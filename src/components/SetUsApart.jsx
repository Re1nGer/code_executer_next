import SolarIcon from "@/icons/SolarIcon.svg";
import KeyboardIcon from "@/icons/KeyboardIcon.svg";

const SetUsApart = () => {
    return <section className={'py-[100px] px-[20px] relative'}>
        <div className={'mx-auto max-w-[1200px] flex justify-center gap-[60px] items-center w-full'}>
            <div className={'max-w-[570px]'}>
                <h1 className={'text-[#02203c] text-[35px]'}>Our Videos Set Us Apart.</h1>
                <p className={'text-[#445d6e] font-open_sans leading-[1.7] mb-[25px]'}>The truth is that interview questions and algorithms are difficult. Even more difficult is trying to understand the inner workings of a complex algorithm from a book or from a poorly thought-out video shot on your grandma's camera. Our crisp 1080p videos boast crystal-clear audio and are strategically divided into two parts to give you the most comprehensive explanations to questions. That's over 100  hours of content specifically tailored to make interview questions and algorithms easy.</p>
                <div className={'flex mt-[15px] gap-[30px] items-center'}>
                    <div className={''}>
                        <div className={'flex items-center gap-[15px] mb-[10px]'}>
                            <SolarIcon className={'w-[50px] transition-all hover:scale-[1.2] hover:text-[#626ee3] cursor-pointer'} />
                            <h3 className={'text-[20px] text-[#02203c] font-bold whitespace-nowrap'}> Conceptual Overview </h3>
                        </div>
                        <p className={'text-[#445d6e] font-open_sans leading-[1.7]'}>Our videos all start with an in-depth conceptual overview of the algorithm at hand: how to approach it, how to implement it, how to optimize it, and how to analyze its space-time complexity.</p>
                    </div>
                    <div className={''}>
                        <div className={'flex items-center gap-[15px] mb-[10px]'}>
                            <KeyboardIcon className={'w-[50px] transition-all hover:scale-[1.2] hover:text-[#626ee3] cursor-pointer'} />
                            <h3 className={'text-[20px] text-[#02203c] font-bold'}> Code Walkthrough </h3>
                        </div>
                        <p className={'text-[#445d6e] font-open_sans leading-[1.7]'}>Our videos all start with an in-depth conceptual overview of the algorithm at hand: how to approach it, how to implement it, how to optimize it, and how to analyze its space-time complexity.</p>
                    </div>
                </div>
            </div>
            <div className={'w-full h-[320px]'}>
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                        title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    </section>
}

export default SetUsApart;