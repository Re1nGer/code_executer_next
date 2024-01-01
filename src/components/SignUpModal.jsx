import { AnimatePresence, motion } from 'framer-motion'
import GoogleIcon from '../icons/GoogleIcon.svg?react'
import GithubIcon from '../icons/GitHubIcon.svg?react'
import Facebook from '../icons/FacebookIcon.svg?react'
import LinkedIn from '../icons/LinkedIn.svg?react'
import HeaderIcon from "../icons/HeaderIcon.svg?react";

const SignUpModal = ({ isOpen, onClose }) => {
	const handleClickOutside = () => onClose()

	return (
		<AnimatePresence>
			{ isOpen ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={'absolute h-screen flex justify-center w-full items-center z-10 bg-black bg-opacity-[.5]'} onClick={handleClickOutside}>
			<motion.div initial={{ x: 100 }} animate={{ x: 0 }} exit={{ x: 200, opacity: 0 }} onClick={(e) => e.stopPropagation()} className={'max-w-[325px] min-h-[calc(100% - 80px)] max-h-[460px] h-full w-full bg-white border-transparent p-[25px] border-t-[5px] border-t-[#626ee3] shadow-[2px_2px_10px_0_rgba(0,0,0,.3)] rounded-[6px] mx-auto'}>
				<h1 className={'font-open_sans text-[24px] text-center mb-[15px]'}>Sign in to</h1>
				<div className={'flex items-center justify-center text-white gap-[15px]'}>
					<HeaderIcon className={'max-w-[290px] max-h-[25px] text-[#02203c]'} />
					<h1 className={'text-[30px] font-jura text-[#02203c]'}>AlgoExpert</h1>
				</div>
				<h3 className={'text-center text-[#445d6e] mb-[30px] leading-[1.7]'}>Log in to save your progress. We won't post anything anywhere.</h3>
				<div className={'flex flex-col gap-[10px] font-bold text-[14px]'}>
					<button className={'flex items-center shadow-[0_2px_4px_0_rgba(0,0,0,.25)] border-[1px] border-transparent rounded-[4px] bg-[#4285f4] text-white h-[50px] transition-all hover:translate-y-[-3px] hover:shadow-[0_2px_10px_2px_rgba(0,0,0,.35)]'}>
						<div className={'bg-white flex justify-center items-center flex-grow-0 flex-shrink-0 h-full rounded-[4px] basis-auto w-[48px]'}>
							<GoogleIcon className={'w-[18px]'} />
						</div>
						<div className={'text-center w-full flex-1'}> Google </div>
					</button>
					<button className={'flex items-center shadow-[0_2px_4px_0_rgba(0,0,0,.25)] border-0 rounded-[4px] text-white bg-[#252525] h-[50px] transition-all hover:translate-y-[-3px] hover:shadow-[0_2px_10px_2px_rgba(0,0,0,.35)]'}>
						<div className={'flex justify-center items-center flex-grow-0 flex-shrink-0 h-full rounded-[4px] basis-auto w-[48px]'}>
							<GithubIcon className={'w-[35px]'} />
						</div>
						<div className={'text-center w-full flex-1'}> GitHub </div>
					</button>
					<button className={'flex items-center shadow-[0_2px_4px_0_rgba(0,0,0,.25)] border-0 rounded-[4px] text-white bg-[#1877f2] h-[50px] transition-all hover:translate-y-[-3px] hover:shadow-[0_2px_10px_2px_rgba(0,0,0,.35)]'}>
						<div className={'bg-transparent flex justify-center items-center flex-grow-0 flex-shrink-0 h-full rounded-[4px] basis-auto w-[48px]'}>
							<Facebook className={'w-[35px]'} />
						</div>
						<div className={'text-center w-full flex-1'}> Facebook </div>
					</button>
					<button className={'flex items-center shadow-[0_2px_4px_0_rgba(0,0,0,.25)] border-0 rounded-[4px] text-white bg-[#0072b1] h-[50px] transition-all hover:translate-y-[-3px] hover:shadow-[0_2px_10px_2px_rgba(0,0,0,.35)]'}>
						<div className={'flex justify-center items-center flex-grow-0 flex-shrink-0 h-full rounded-[4px] basis-auto w-[48px]'}>
							<LinkedIn className={'w-[35px]'} />
						</div>
						<div className={'text-center w-full flex-1'}> LinkedIn </div>
					</button>
				</div>
			</motion.div>
		</motion.div> : null}
		</AnimatePresence>
	)
}

export default SignUpModal