import { motion } from "framer-motion";
import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton.jsx";

const ProductLanding = () => {
    return <div className={"max-w-[500px] flex flex-col items-start justify-center mx-auto px-[20px] md:px-0"}>
        <h1 className={"text-[38px] mb-[20px] text-center md:text-left w-full font-ubuntu"}>AlgoExpert</h1>
        <p className={"font-open_sans text-[18px] mb-[30px] text-center md:text-left leading-[1.7]"}>The ultimate resource to prepare for coding
            interviews.
            <br />
            Everything you need, in one streamlined platform.</p>
        <motion.div initial={{scale: .5}} animate={{scale: 1, opacity: 1}} className={"w-full opacity-0 flex justify-center md:justify-start"}>
            <BuyAlgoExpertButton className={"w-full"}/>
        </motion.div>
    </div>;
}



export default ProductLanding