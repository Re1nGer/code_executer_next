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
                <div className={'basis-[50%] max-h-[700px] product__banner_container min-w-[600px] hidden xl:block'}>
                    <div
                        className={'hidden xl:flex absolute min-w-[400px] w-full flex-wrap flex-row gap-[10px] text-white font-bold max-h-[500px] max-w-[800px] product__banner'}>
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