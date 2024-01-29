
import { useState } from "react";

const ProductCard = ({ Icon, title, paragraph, isLearnMore = true }) => {

    const [mouseOver, setMouseOver] = useState(false);

    return <section onMouseMove={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}
                    className={`${mouseOver ? 'product__card--hover' : ''} transition-transform flex flex-col rounded-[4px]' +
        ' max-w-[200px] lg:max-w-[400px] w-full text-center p-[20px] gap-[15px] cursor-pointer`}>
        <div className={'flex justify-center'}>
            <Icon className={'w-[50px] h-[50px] text-[#626ee3] transition-transform'} />
        </div>
        <h1 className={'text-[20px]'}>{ title }</h1>
        <p className={'text-[#445d6e] font-open_sans text-[14px]'}>{ paragraph }</p>
        { isLearnMore &&
            <p className={'text-[14px] text-[#626ee3]'}>Learn more</p>
        }
    </section>
}

export default ProductCard