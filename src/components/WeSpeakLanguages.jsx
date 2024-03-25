import JavaScriptIcon from "@/icons/JavaScriptLangIcon.svg";
import TypescriptIcon from "@/icons/TypescriptIcon.svg";
import PythonIcon from "@/icons/PythonIcon.svg";
import MobileIcon from "@/icons/MobileIcon.svg";
import AndroidIcon from "@/icons/AndroidIcon.svg";
import CIcon from "@/icons/CIcon.svg";
import JavaIcon from "@/icons/JavaIcon.svg";
import WindowsIcon from "@/icons/WindowsIcon.svg";
import GoIcon from "@/icons/GoIcon.svg";
import {motion} from "framer-motion";
import Image from "next/image";
import JavascriptImage from "@/images/javascript_img.png";

const PythonImage = 'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/33a06b60c0d00871f587.png';
const GoImage = 'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/4f67b9c3f3ba9f0538d0.png';
const CImage = 'https://assets.algoexpert.io/spas/main/prod/g640eb8276b-prod/dist/images/f31a3af6b144f73bf48d.png';

const WeSpeakLanguages = () => {
    return <div className={'pt-[100px]'}>
        <div className={'max-w-[1200px] mx-auto flex flex-col lg:flex-row'}>
            <div className={'flex flex-col justify-center relative'}>
                <h2 className={'mb-[20px] text-[#02203c] text-[35px] leading-[1.3] text-center lg:text-left'}>We Speak 9 languages</h2>
                <div>
                    <p className={'max-w-[700px] mb-[30px] text-center lg:text-left font-open_sans text-[#445d6e] leading-[1.7]'}>
                        There's nothing more frustrating than opening an interview prep book, only to find a bunch of solutions in a programming language that you don't know. That's why all of our questions come with complete written solutions in 9 popular languages
                    </p>
                    <ul className={'flex justify-center flex-col items-baseline'}>
                        <li className={'mb-[25px] text-[#02203c] flex items-center justify-start'}>
                            <JavaScriptIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>Javascript</span>
                            <p className={'text-[14px]'}>, for all you Front-End Developers</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center justify-start'}>
                            <TypescriptIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>Typescript</span>
                            <p className={'text-[16px] align-bottom'}>, for all you Edgy JavaScripters</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <PythonIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>Python</span>
                            <p className={'text-[14px]'}>, for all you Data Scientists</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <MobileIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>Swift</span>
                            <p className={'text-[14px]'}>, for all you iOS Engineers</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <AndroidIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>Androiders</span>
                            <p className={'text-[14px]'}>, for all you Androiders</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <CIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>C++</span>
                            <p className={'text-[14px]'}>, for all you Old Schoolers</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <JavaIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'md:text-[18px] font-bold font-open_sans'}>Java</span>
                            <p className={'text-[14px]'}>, for all you Masochists</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <WindowsIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>C#</span>
                            <p className={'text-[14px]'}>, for all you Microsofters</p>
                        </li>
                        <li className={'mb-[25px] text-[#02203c] flex items-center'}>
                            <GoIcon className={'w-[50px] mr-[25px]'} />
                            <span className={'text-[18px] font-bold font-open_sans'}>Go</span>
                            <p className={'text-[14px]'}>, for all you Kool Kidz</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'lg:w-[60px] lg:h-full h-0 w-0'}></div>
            <div className={'w-full items-center flex-col justify-center relative basis-[15%] lg:basis-[50%] hidden lg:flex'}>
                <div className={'flex basis-[15%] lg:basis-[50%] justify-center'}>
                    <div id={'spinner'} className={'h-full'}>
                        <div id={'shadowContainer'}></div>
                        <div id={'actualCube'} style={{ perspective: '800px', perspectiveOrigin: '50% 100%' }}>
                            <motion.div id={'cubeFaces'} initial={null} animate={{ rotateY: '1turn', transition: { duration: '45', repeat: Infinity } }} style={{ transformStyle: 'preserve-3d' }} className={'relative w-[100px] lg:w-[300px]'}>
                                <div id={'cubeFace cubeFront'} className={'bg-[#3e526a] cube__face w-[100px] lg'} style={{ transform: 'translateZ(150px)'}}>
                                    <Image src={JavascriptImage} width={'300'} height={'300'} className={'w-full'} alt={'javascript logo'} />
                                </div>
                                <div id={'cubeFace cubeBack'} className={'bg-[#3e526a] cube__face'} style={{ transform: 'translateZ(-150px) rotateY(180deg)'}}>
                                    <Image src={PythonImage} width={'300'} height={'300'} className={'w-full'} alt={'python logo'} />
                                </div>
                                <div id={'cubeFace cubeTop'} className={'bg-[#02203c] cube__face'}
                                     style={{ transform: 'translateZ(-150px) rotateY(180deg)', transformOrigin: 'top center'}}>
                                </div>
                                <div id={'cubeFace cubeBottom'} className={'bg-[#02203c] cube__face'}
                                     style={{ transform: 'rotateX(90deg) translateY(150px)', transformOrigin: 'bottom center'}}>
                                </div>
                                <div id={'cubeFace cubeLeft'} className={'bg-[#3e526a] cube__face'}
                                     style={{ transform: 'rotateY(270deg) translateX(-150px)', transformOrigin: 'center left'}}>
                                    <Image src={GoImage} width={'300'} height={'300'} className={'w-full'} alt={'go logo'} />
                                </div>
                                <div id={'cubeFace cubeRight'} className={'bg-[#3e526a] cube__face'}
                                     style={{ transform: 'rotateY(-270deg) translateX(150px)', transformOrigin: 'top right'}}>
                                    <Image src={CImage} width={'300'} height={'300'} className={'w-full'} alt={'c logo'} />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default WeSpeakLanguages;