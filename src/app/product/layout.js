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
                <div className={'pl-[20px] text-white basis-[50%] flex justify-end'}>
                    <ProductLanding />
                </div>
                <div className={'basis-[50%] h-[700px] relative product__banner_container w-[300px] lg:w-[600px] hidden md:flex'}>
                    <div
                        className={'hidden md:flex relative w-[600px] flex-col text-white font-bold h-[500px] product__banner'}>
                        <div className={'flex'}>
                            <ProductPromptSkeletons />
                            <ProductInputSkeletons />
                        </div>
                        <div className={'flex'}>
                            <ProductTestSkeletons />
                            <ProductOutputSkeleton />
                        </div>
                    </div>
                </div>
            </div>
        </Header>
        { children }
    </>
}