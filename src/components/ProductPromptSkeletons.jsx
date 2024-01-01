import { motion } from "framer-motion";

const ProductPromptSkeletons = () => {
    const randomWidth = () => Math.floor(Math.random() * 90) + 160

    return <div className={"bg-[#15314b] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] w-full"}>
        <div className={"h-[30px]"}>
            <h3 className={"pl-[10px]"}>Prompt</h3>
        </div>
        <div className={"flex flex-col rounded-[3px] p-[10px] bg-[#02203c]"}>
            <h3 className={"mb-[10px]"}>Max Profit With K Transactions</h3>
            <motion.div animate={{  transition: { staggerChildren: 0.5 }}} className={"flex flex-col gap-[10px] mb-[20px]"}>
                { Array.from(Array(5).keys()).map(key => (
                        <motion.div key={key} initial={{width: 0}} animate={{width: `${randomWidth()}px` }}
                                    className={"bg-[#1f384e] h-[13px] rounded-[4px]"}></motion.div>
                    )
                ) }
            </motion.div>
            <div className={"flex flex-col gap-[10px]"}>
                { Array.from(Array(5).keys()).map(key => (
                        <motion.div key={key} initial={{width: 0}} animate={{width: `${randomWidth()}px`}}
                                    className={"bg-[#1f384e] h-[13px] rounded-[4px]"}></motion.div>
                    )
                ) }
            </div>
        </div>
    </div>;
}

export default ProductPromptSkeletons
