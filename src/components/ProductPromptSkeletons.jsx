import { motion } from "framer-motion";

const ProductPromptSkeletons = () => {
    const randomWidth = () => Math.floor(Math.random() * 90) + 160


    return <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                       className={"bg-[#15314b] flex flex-col rounded-[4px]" +
                           " border-[2px] border-[#15314b] max-w-[291px] w-full product__landing_prompt-skeleton"}>
        <div className={"h-[30px]"}>
            <h3 className={"pl-[10px]"}>Prompt</h3>
        </div>
        <div className={"flex flex-col rounded-[3px] p-[10px] bg-[#02203c]"}>
            <h3 className={"mb-[10px]"}>Max Profit With K Transactions</h3>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .75 } }} className={"flex flex-col gap-[10px] mb-[20px]"}>
                { Array.from(Array(5).keys()).map(key => (
                        <motion.span key={key} animate={{ width: `${randomWidth()}px`, transition: { delay: .5 + key * .2, duration: .4 } }}
                                     className={"bg-[#1f384e] w-0 h-[13px] rounded-[4px]"}></motion.span>
                    )
                ) }
            </motion.div>
            <div className={"flex flex-col gap-[10px]"}>
                { Array.from(Array(5).keys()).map(key => (
                        <motion.div key={key} animate={{width: `${randomWidth()}px`, transition: { delay: 1.5 + key * .2, duration: .4 }}}
                                    className={"bg-[#1f384e] w-0 h-[13px] rounded-[4px]"}></motion.div>
                    )
                ) }
            </div>
        </div>
    </motion.div>;
}

export default ProductPromptSkeletons
