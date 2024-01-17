'use client'

import { motion } from "framer-motion";

const ProductInputSkeletons = () => {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: .5,
                when: "beforeChildren",
                staggerChildren: 0.3,
                ease: "easeInOut"

            },
        },
        hidden: { opacity: 0 },

    }

    const item = {
        visible: { opacity: 1, scale: 1, transition: { ease: "easeInOut" } },
        hidden: { opacity: 0, scale: 0 },
    }

    return <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: .2  } }}
        className={"bg-[#15314b] max-h-[205px] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] h-full w-full"}>
        <div className={"max-h-[30px] h-full"}>
            <h3 className={"pl-[10px]"}>Tests</h3>
        </div>
        <motion.div
            variants={list}
            initial={"hidden"}
            animate={"visible"}
            className={"flex flex-col gap-[10px] bg-[#02203c] product__test_scrollbar"}>
            <motion.span
                variants={item}
                className={"rounded-[4px] flex gap-[4px] items-center h-[50px] mt-[10px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </motion.span>
            <motion.span
                variants={item}
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </motion.span>
            <motion.span
                variants={item}
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </motion.span>
            <motion.span
                variants={item}
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </motion.span>
            <motion.span
                variants={item}
                className={"rounded-[4px] flex items-center gap-[4px] h-[50px] p-[10px] shadow-[0_2px_4px_rgba(50,50,93,.1)] bg-[#15314b]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
            </motion.span>
        </motion.div>
    </motion.div>;
}

export default ProductInputSkeletons