import Image from "next/image";

const TestimonialCard = ({ imgSrc, name, title, story }) => {
    return <div as={'ul'} className={'w-[325px] mx-[6px]'}>
        <div className={'rounded-[4px] flex flex-col font-open_sans h-[320px] mt-[30px] mx-[5px] mb-[15px] px-[20px] pb-[20px] pt-[40px] border-t-[4px] border-t-[#626ee3] bg-white shadow-[0_2px_10px_rgba(50,50,93,.1)]'}>
            <div className={'flex justify-center items-center mt-[-5rem]'}>
                <Image height={60} width={60}
                       className={'rounded-full'} src={imgSrc} alt={'tesimonial'} />
            </div>
            <h5 className={'text-center w-full mb-[10px] mt-[20px]'}>{ name }</h5>
            <div className={'flex flex-col items-center justify-center'}>
                <h5 className={'text-center mb-[10px]'}>{ title }</h5>
                <Image height={'25'} width={'83'} className={'mt-[5px] mb-[10px]'} src={'https://assets.algoexpert.io/spas/main/prod/g5ac87ae678-prod/dist/images/6591cdc0702b32310306.png'} alt={'amazon'} />
            </div>
            <div className={'overflow-y-auto product__test_scrollbar'}>
                <p className={'text-[14px] font-open_sans whitespace-normal text-[#445d6e] px-[5px]'}>
                    { story }
                </p>
            </div>
        </div>
    </div>
}


export default TestimonialCard;