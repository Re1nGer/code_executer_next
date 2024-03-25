import { motion } from "framer-motion";

const ProductInputSkeletons = () => {

    const list = {
        visible: {
            opacity: 1,
            transition: {
                delay: .5,
                when: "beforeChildren",
                staggerChildren: 0.1,
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: .3 } }}
            className={"bg-[#15314b] flex flex-col rounded-[4px] border-[2px] border-[#15314b] w-[260px] lg:w-[290px]  product__landing_input-skeleton"}
           >
        <div className={"h-[30px] flex justify-between"}>
            <h3 className={"pl-[10px]"}>Input</h3>
            <button className={"bg-[#0046c7] text-white text-center px-[15px] h-full"}>Run</button>
        </div>
        <motion.div
            variants={list}
            initial={"hidden"}
            animate={"visible"}
            className={"flex flex-col rounded-[3px] gap-[4px] p-[10px] bg-[#02203c] h-full"}>

            <motion.div variants={item} className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex pl-[.5rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <div className={'my-[.5rem]'}></div>
            <motion.div variants={item} className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex pl-[1rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
            <motion.div variants={item} className={"flex pl-[.5rem] gap-[4px] mb-[4px]"}>
                <div className={"bg-[#48aca2] w-[21px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#48aca2] w-[36px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#5e5efb] w-[42px] rounded-[4px] h-[13px]"}></div>
                <div className={"bg-[#be8a28] w-[60px] rounded-[4px] h-[13px]"}></div>
            </motion.div>
        </motion.div>
    </motion.div>;
}

export default ProductInputSkeletons