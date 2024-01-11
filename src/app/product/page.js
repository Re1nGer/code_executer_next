'use client'

import PlayIcon from '../../icons/PlayIcon.svg';
import ProductCards from "@/components/ProductCards";



const Product = () => {
    return (
        <section className={'py-[250px] px-[20px]'}>
            <h1 className={'w-full text-center text-[35px] mb-[20px] text-[#02203c]'}>What is AlgoExpert</h1>
            <div className={'flex justify-center mb-[50px]'}>
                <button
                    className={'bg-transparent max-w-[190px] p-[5px] w-full rounded-[4px] border-[#02203c] border-[2px] flex justify-center gap-[4px] items-center'}>
                    <PlayIcon className={'w-[30px] h-[30px]'}/>
                    <h3>Watch the Video</h3>
                </button>
            </div>
            <div className={'flex justify-center w-full'}>
                <ProductCards />
            </div>
        </section>
    )
}

export default Product


const ComparisonTable = () => {}