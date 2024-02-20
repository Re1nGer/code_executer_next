import Link from "next/link";
import { motion } from "framer-motion";
import TrashIcon from "@/icons/TrashIcon.svg";

//TODO: Finish this component
const BetterWayToLandInterviews = () => {
    return <div className={'py-[100px] px-[20px] bg-[#02203c] relative'}>
        <div className={'flex mx-auto max-w-[1200px]'}>
            <div className={'flex flex-col justify-center items-center basis-[50%]'}>
                <h2 className={'text-white text-[35px] mb-[20px]'}>A Better Way To Land Interview</h2>
                <div className={'mb-[25px]'}>
                    <p className={'text-white mb-[15px]'}>Earn the AlgoExpert Certificate. Get referred to tech companies.</p>
                    <p className={'text-white mb-[15px]'}>No more InMail messages that get ignored.</p>
                    <p className={'text-white mb-[15px]'}>No more cold emails that go nowhere.</p>
                    <p className={'text-white mb-[15px]'}>No more job applications that get no attention.</p>
                    <p className={'text-white mb-[15px]'}>No more referral programs that don't work.</p>
                    <p className={'text-white mb-[15px]'}>No more recruiting agencies that cost a fortune.</p>
                    <p className={'text-white mb-[15px]'}>With AlgoExpert, preparing for interviews helps you land interviews.</p>
                </div>
                <div className={'flex justify-start w-full'}>
                    <Link href={'/recruiting/profile'}
                          className={'bg-[#626ee3] px-[40px] text-white shadow-[0_2px_5px_0_rgba(0,0,0,.5)] mt-[10px] mx-auto h-[50px] rounded-[4px] transition-all flex justify-start items-center'}>Learn More</Link>
                </div>
            </div>
            <div className={'w-[60px] h-full'}></div>
            <div className={'h-[350px] flex justify-center items-start flex-col basis-[50%] relative overflow-hidden'}>
                <div className={'absolute left-[45px] w-full'}>
                    <div className={'w-[1500px] h-[400px] z-[1000] relative'}>
                        <div className={'rounded-[8px] w-[80px] absolute top-[50%] left-[-45px]'}>
                            <TrashIcon className={'w-[50px] text-white'} />
                        </div>
                        <div className={'h-full w-full relative overflow-hidden rounded-tl-[200px] rounded-bl-[200px] text-white'}>
                            <div style={{ background: 'linear-gradient(90deg,rgba(0,21,40,.8),transparent 20%)' }} className={'h-full w-full absolute z-10'}></div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[400px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[350px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1) top-[300px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[250px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[200px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[150px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[100px] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                            <motion.div initial={{ x: Math.floor(Math.random() * 201) }}
                                        animate={{ x:-600, transition:{ duration: 10 + Math.floor(Math.random() * 50) , repeat: Infinity, repeatType: 'loop' } }}
                                        className={'bg-[#626ee3] rounded-[20px] p-[10px] absolute shadow-[0_2px_4px_rgba(50,50,93,.1)] top-[50x] left-[600px] z-20'}
                            >Dummy Text</motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BetterWayToLandInterviews;