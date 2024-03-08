import { motion } from "framer-motion";
import QuestionsLoader from "@/components/QuestionsLoader";
import TestCase from "@/components/TestCase";

const CustomOutputTab = ({ testCases, isExecuting, hasFailed }) => {

    //TODO: stagger children animation
    const variants= {
        hidden : {
            opacity: 0,
        },
        shown: {
            opacity: 1,
            transition: {
                delay: .5,
                when: "beforeChildren",
                staggerChildren: 0.3,
                ease: "easeInOut"
            },
        }
    }

    return <div className={'overflow-y-auto max-h-[400px] product__test_scrollbar h-full'}>
        { (!isExecuting && testCases.length > 0) ? (
            <>
                { hasFailed ? (
                    <h1 className={'text-white font-bold text-[18px] font-open_sans text-center mb-[.5rem]'}>Aww, some of the tests cases failed.</h1>
                ) : <h1 className={'text-white font-bold text-[18px] font-open_sans text-center mb-[.5rem]'}>Yay, All test cases passed !</h1> }
                <motion.div variants={variants} initial={'hidden'} animate={"shown"}
                            style={{ border: hasFailed ? '1px solid red' : '1px solid green' }}
                            className={'flex flex-col gap-[.5rem]'}>
                    { testCases.map(item => <TestCase key={item.data} {...item} />) }
                </motion.div>
            </>
        ) : ( isExecuting ? (
                <div className={'flex justify-center items-center h-full'}>
                    <QuestionsLoader />
                </div>
            ) : (
                <h3 className={"text-[#445d6e] flex items-center h-full text-center w-full justify-center font-bold font-open_sans"}>Run
                    Or Submit your code when you are ready</h3>
            )
        )
        }
    </div>
};

export default CustomOutputTab