import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Link from 'next/link'
const ProductMenu = ({ isOpen, onClose }) => {
    return <AnimatePresence>
        { isOpen ?
            <motion.section
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className={'absolute z-10 bg-white mt-[65px] rounded-[6px] max-w-[580px] mx-auto left-[540px] shadow-[0_0_40px_5px_rgba(0,0,0,.5)]'}
                onMouseMove={(e) => e.stopPropagation()}
            >

                <div className={'p-[10px] relative rounded-[4px] grid grid-cols-2 gap-3 product__menu'}>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] rounded-[4px] max-w-[275px] w-full hover:bg-[#626ee3] hover:text-white cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans'}>AlgoExpert</h3>
                            <p>Ace the coding interviews</p>
                        </div>
                    </Link>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#890023] cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans'}>SystemsExpert</h3>
                            <p>Ace the system design interviews</p>
                        </div>
                    </Link>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#11967e] cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans'}>FrontendExpert</h3>
                            <p>Ace the frontend interviews</p>
                        </div>
                    </Link>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] w-full hover:text-white hover:bg-[#2c85cd] cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans'}>InfraExpert</h3>
                            <p>Ace the infrastructure interviews</p>
                        </div>
                    </Link>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#f21b3f] cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans'}>ProgrammingExpert</h3>
                            <p>Learn to code</p>
                        </div>
                    </Link>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#bb20dd] cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans'}>BlockchainExpert</h3>
                            <p className={'whitespace-nowrap'}>Learn blockchain development</p>
                        </div>
                    </Link>
                    <Link href={'/'} className={'p-[15px] bg-white text-[#02203c] max-w-[275px] rounded-[4px] w-full hover:text-white hover:bg-[#f37f1b] cursor-pointer'}>
                        <div>
                            <h3 className={'text-[18px] font-bold font-open_sans whitespace-nowrap text-nowrap'}>MLExpert</h3>
                            <p className={'text-nowrap'}>Ace the machine learning interviews</p>
                        </div>
                    </Link>
                </div>
            </motion.section> : null }
    </AnimatePresence>
};

export default ProductMenu;