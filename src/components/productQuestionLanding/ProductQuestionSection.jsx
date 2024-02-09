import Link from "next/link";
import TickIcon from '@/icons/TickIcon.svg';


const ProductQuestionSection = () => {

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
        <div className={'mt-[40px]'} style={{ perspective: '1000px' }}>
            <ul className={'max-w-[1000px] mx-auto text-white flex gap-[40px] flex-wrap'}>
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
                <ProductQuestionCard title={'Arrays'} backText={'Harder than they seem'} />
            </ul>
        </div>
    </section>;
}


export default ProductQuestionSection;


const ProductQuestionCard = ({ title, backText }) => {
    return <li className={'max-w-[306px] w-full'}>
        <div className={'shadow-[2px_2px_15px_0_rgba(0,0,0,.4)] w-full relative rounded-[4px] product__question-section_landing-card_container product__question-section_landing-card_list'}>
            <div className={'flex flex-col bg-[#15314b] w-full justify-center items-center p-[30px] text-center product__question-section_landing-card_inner'}>
                <div className={'bg-[#e4e4e4] h-[35px] w-[35px] mb-[15px] rounded-full flex justify-center items-center'}>
                    <TickIcon className={'text-[#02203c] w-[20px]'} />
                </div>
                {title}
            </div>
            <div className={'absolute left-0 top-0 w-full h-full product__question-section_landing-card_back'}>{backText}</div>
        </div>
    </li>
}