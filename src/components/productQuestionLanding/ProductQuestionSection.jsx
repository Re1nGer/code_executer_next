import React from 'react';
import Link from "next/link";
import {motion, stagger, useAnimate, useInView} from "framer-motion";
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
    visible: { z: 0, transition: { ease: "easeInOut" }, opacity: 1 },
    hidden: {  z: 200, opacity: 0 },
}

const ProductQuestionSection = () => {

    const [scope, animate] = useAnimate();

    const inView = useInView(scope);


    React.useEffect(() => {
        if (inView) {
            animate('li', { z: 0, opacity: 1 },  { delay: stagger(0.07) })
        }
    }, [inView])

    console.log(inView);

    return <section className={'bg-[#02203c] py-[100px] px-[20px]'}>
        <h2 className={'text-white mb-[20px] text-[30px] md:text-[35px] text-center font-ubuntu'}>200 Questions Spanning 15 Categories</h2>
        <p className={'max-w-[800px] w-full text-center mx-auto mb-[15px] text-white leading-[1.7] font-open_sans'}>
            If you want to ace the coding interviews, being well-versed in all common data structures and popular problem-solving methods is paramount. With
            200 questions spanning 15 categories and 4 difficulty levels, we've got you covered
        </p>
        <div className={'flex justify-center items-center h-[50px]'}>
            <Link href={'/questions'}
                  className={'bg-[#626ee3] h-full font-open_sans shadow-[0_2px_5px_0_rgba(0,0,0,.5)] rounded-[4px] px-[40px] text-white flex justify-center items-center whitespace-nowrap'}>
                Explore Questions</Link>
        </div>
        <motion.div className={'mt-[40px] w-full'}>
            <motion.ul
               initial={'hidden'}
               variants={list}
               className={'text-white max-w-[1200px] mx-auto w-full flex gap-[20px] md:gap-[40px] flex-wrap justify-center'}
               style={{ perspective: '1000px' }}
               ref={scope}>
                    <ProductQuestionCard variants={item} title={'Arrays'} backText={'Harder than they seem'} />
                    <ProductQuestionCard variants={item} title={'Graphs'} backText={'Easier than they seem'} />
                    <ProductQuestionCard variants={item} title={'Tries'} backText={'Yes. Tries. Not a typo'} />
                    <ProductQuestionCard variants={item} title={'Linked Lists'} backText={'Reverse them'} />
                    <ProductQuestionCard variants={item} title={'Binary Trees'} backText={'Invert them.'} />
                    <ProductQuestionCard variants={item} title={'Strings'} backText={'"This is a string"'} />
                    <ProductQuestionCard variants={item} title={'Dynamic Programming'} backText={'Everyone hates it.'} />
                    <ProductQuestionCard variants={item} title={'Searching'} backText={'Searching for the purchase button?'} />
                    <ProductQuestionCard variants={item} title={'Sorting'} backText={'array = [3,1,2] sort(array) array = [1,2,3]'} />
                    <ProductQuestionCard variants={item} title={'Greedy Algorithms'} backText={'Not too greedy'} />
                    <ProductQuestionCard variants={item} title={'Recursion'} backText={'[[[[[[[[[[]]]]]]]]]]'} />
                    <ProductQuestionCard variants={item} title={'Famous Algorithms'} backText={'ヽ( ͡° ͜ʖ ͡°)ﾉ'} />
                    <ProductQuestionCard variants={item} title={'Heaps'} backText={'Fancy trees.'} />
                    <ProductQuestionCard variants={item} title={'Binary Search Trees'} backText={'BS Trees'} />
                    <ProductQuestionCard variants={item} title={'Stacks'} backText={'Push. Pop. That\'s about it '} />
            </motion.ul>
        </motion.div>
    </section>;
}


export default ProductQuestionSection;

