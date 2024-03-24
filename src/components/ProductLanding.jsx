import { motion } from "framer-motion";
import BuyAlgoExpertButton from "@/components/BuyAlgoExpertButton.jsx";

const ProductLanding = () => {
    return <div className={"max-w-[500px] flex flex-col items-start justify-center"}>
        <h1 className={"text-[38px] mb-[20px] text-center w-full"}>AlgoExpert</h1>
        <p className={"font-open_sans text-[18px] mb-[30px] text-center"}>The ultimate resource to prepare for coding
            interviews.
            Everything you need, in one streamlined platform.</p>
        <motion.div initial={{scale: .5}} animate={{scale: 1, opacity: 1}} className={"w-full opacity-0 flex justify-center md:justify-start"}>
            <BuyAlgoExpertButton className={"w-full"}/>
        </motion.div>
    </div>;
}



export default ProductLanding