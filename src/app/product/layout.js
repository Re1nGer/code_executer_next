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
            <div className={'flex flex-col lg:flex-row justify-center min-h-[320px] gap-[50px]'}>
                <div className={'pl-[20px] text-white basis-[50%] flex justify-end'}>
                    <ProductLanding />
                </div>
                <div className={'flex-1 max-h-[700px] product__banner_container'}>
                    <div
                        className={'hidden xl:flex flex-wrap min-w-[300px] gap-[10px] text-white font-bold max-h-[500px] max-w-[600px] product__banner'}>
                        <ProductPromptSkeletons />
                        <ProductInputSkeletons />
                        <ProductTestSkeletons />
                        <ProductOutputSkeleton />
                    </div>
                </div>
            </div>
        </Header>
        { children }
    </>
}