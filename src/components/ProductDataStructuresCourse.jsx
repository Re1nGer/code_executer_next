import Link from "next/link";

const ProductDataStructuresCourse = () => {
    return <div className={'py-[100px] relative max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row'}>
        <div style={{ perspective: '1500px' }} className={'min-h-[550px] relative flex basis-[50%]'}>
            <div className={'rounded-[8px] product__datastructures-picture max-w-[600px] absolute right-0 md:right-[30px]'}>
                <picture>
                    <img src={'https://assets.algoexpert.io/spas/main/prod/g06ca8b96c2-prod/dist/images/06df1ca4f429059c4945.jpg'}
                         className={'w-[100%]'}
                         style={{ objectFit: 'cover' }}
                         alt={'data structures'} />
                </picture>
                <div className={'absolute product__datastructures-picture_gradient w-full'}></div>
            </div>
        </div>
        <div className={'w-[60px] h-full'}></div>
        <div className={'basis-[50%]'}>
            <h1 className={'text-[#02203c] mb-[20px] text-[35px] text-center lg:text-left'}>Data Structures Crash Course.</h1>
            <p className={'mb-[15px] text-[#445d6e] font-open_sans leading-[1.7]'}>Algorithms and data structures go hand in hand; the solution to virtually any coding interview problem will require the implementation of some kind of abstract data type in order to access and manipulate information.</p>
            <p className={'mb-[15px] text-[#445d6e] font-open_sans leading-[1.7]'}>Our video series on data structures is the ultimate crash course on this important topic. We cover fundamental concepts pertaining to memory, complexity analysis, and Big O notation, and then break down popular data structures to give you a detailed look at how these concepts are applied under the hood. Linked Lists and Binary Trees will never instill fear in your heart again.</p>
            <div className={'flex justify-center lg:justify-start'}>
                <Link href={'/data-structures'} className={'bg-[#626ee3] shadow-[0_2px_5px_0_rgba(0,0,0,.5)] inline-flex justify-center items-center h-[50px] rounded-[4px] text-white px-[40px] hover:bg-[#4c5adf] transition-colors'}>Start The Course</Link>
            </div>
        </div>
    </div>
}

export default ProductDataStructuresCourse;