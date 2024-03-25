import FailTestSkeleton from "@/components/FailedTestSkeleton.jsx";
import SuccessTestSkeleton from "@/components/SuccessTestSkeleton.jsx";
import { LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

const list = {
    visible: {
        opacity: 1,
        transition: {
            delay: 2,
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

const ProductOutputSkeleton = () => {

    const [isShown, setIsShown] = useState(true);

    const handleCodeRun = () => {
        setIsShown(false);
        setTimeout(() => {
            setIsShown(true);
        }, [100])
    }

    return <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: .3 } }}
        className={"bg-[#15314b] flex flex-col rounded-[4px] h-[225px] border-[2px] border-[#15314b] w-[260px] lg:w-[291px] product__landing_output-skeleton"}>
        <div className={"h-[30px] flex justify-between items-center"}>
            <h3 className={"pl-[10px]"}>Output</h3>
            <button
                onClick={handleCodeRun}
                className={"bg-[#008529] text-white text-center px-[15px] font-normal h-full"}>Submit
            </button>
        </div>
        <motion.div className={'h-[180px] bg-[#02203c] product__test_scrollbar'}>
            <LayoutGroup>
                { isShown ? (
                    <>
                        <motion.section
                            className={'flex justify-center h-[150px] flex-1 items-center'}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 0, display: 'none', transition: { delay: 2 } }}
                            exit={{ opacity: 0 }}
                        >
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </motion.section>
                        <motion.div
                            layout
                            variants={list}
                            initial={"hidden"}
                            animate={"visible"}
                            className={"flex flex-col gap-[10px] bg-[#02203c] product__test_scrollbar"}>
                            <FailTestSkeleton variants={item}/>
                            <SuccessTestSkeleton variants={item}/>
                            <SuccessTestSkeleton variants={item}/>
                            <SuccessTestSkeleton variants={item}/>
                            <FailTestSkeleton variants={item}/>
                        </motion.div>
                    </>
                ) : null }
            </LayoutGroup>
        </motion.div>
    </motion.div>;
}

export default ProductOutputSkeleton