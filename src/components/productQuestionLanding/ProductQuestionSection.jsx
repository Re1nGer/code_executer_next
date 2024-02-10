import Link from "next/link";
import { useInView, useAnimate, motion } from "framer-motion";
import { useRef } from "react";
import ProductQuestionCard from "@/components/productQuestionLanding/ProductQuestionCard";

const list = {
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            when: "beforeChildren",
            staggerChildren: 0.07,
        },
    },
    hidden: { opacity: 1 },
}

const item = {
    visible: { z: 0, transition: { ease: "easeInOut" } },
    hidden: {  z: 200 },
}

const ProductQuestionSection = () => {

    const questionCardContainer = useRef(null);

    const isInView = useInView(questionCardContainer, { once: true });

    const [scope, animate] = useAnimate();

/*
    useEffect(() => {
        if (isInView) {
            animate('ul', { opacity: 1 })
        }
    }, [isInView]);
*/

    return <section className={'bg-[#02203c] py-[100px] px-[20px]'}>
        <h2 className={'text-white mb-[20px] text-[35px] text-center'}>200 Questions Spanning 15 Categories</h2>
        <p className={'max-w-[800px] w-full text-center mx-auto mb-[15px] text-white'}>
            If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With
            200 questions spanning 15 categories and 4 difficulty levels, we've got you covered
        </p>
        <div className={'flex justify-center items-center h-[50px]'}>
            <Link href={'/questions'}
                  className={'bg-[#626ee3] h-full font-open_sans shadow-[0_2px_5px_0_rgba(0,0,0,.5)] rounded-[4px] px-[40px] text-white flex justify-center items-center whitespace-nowrap'}>
                Explore Questions</Link>
        </div>
        <motion.div className={'mt-[40px]'} variants={list} initial={'hidden'} animate={'visible'} ref={scope}>
            <motion.ul className={'max-w-[1000px] mx-auto text-white flex gap-[40px] flex-wrap'} style={{ perspective: '1000px' }} ref={questionCardContainer}>
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
            </motion.ul>
        </motion.div>
    </section>;
}


export default ProductQuestionSection;

