'use client'

import Header from "@/components/Header";
import ProductLanding from "@/components/ProductLanding";
import ProductPromptSkeletons from "@/components/ProductPromptSkeletons";
import ProductInputSkeletons from "@/components/ProductInputSkeletons";
import ProductTestSkeletons from "@/components/ProductTestSkeletons";
import ProductOutputSkeleton from "@/components/ProductOutputSkeleton";

export default function layout({ children }) {
    return <>
        <Header>
            <div className={'flex flex-col md:flex-row justify-center min-h-[320px] w-full gap-[50px]'}>
                <div className={'pl-[20px] text-white basis-[50%] flex justify-center md:justify-end'}>
                    <ProductLanding />
                </div>
                <div className={'h-[500px] product__banner_container w-[600px] hidden md:flex basis-0 md:basis-[50%]'}>
                    <div className={'absolute left-0 pt-[50px] top-[-50px] overflow-hidden w-full'}>
                        <div
                            className={'hidden md:flex flex-col text-white font-bold'} style={{ perspective: '700px' }}>
                            <div className={'product__banner'}>
                                <div className={'flex gap-[5px]'}>
                                    <ProductPromptSkeletons />
                                    <ProductInputSkeletons />
                                </div>
                                <div className={'flex gap-[5px] '}>
                                    <ProductTestSkeletons />
                                    <ProductOutputSkeleton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Header>
        { children }
    </>
}