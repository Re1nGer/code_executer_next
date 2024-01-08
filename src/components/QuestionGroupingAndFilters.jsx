import Random from "@/icons/Random.svg";
import Filters from "@/icons/Filters.svg";
import { useState } from "react";

const QuestionGroupingAndFilters = () => {

    const [groupSelected, setGroupSelected] = useState(0);

    const shadowApplied = 'shadow-[0_2px_4px_rgba(50,50,93,.1)] text-[#02203c]';

    return <section className={"mx-auto text-[#626ee3] flex justify-between max-w-[1600px] w-full mb-[30px]"}>
        <button className={"flex gap-[10px] border-none items-center justify-center whitespace-nowrap"}>
            <Random className={"w-[25px] h-[25px]"}/>
            Pick random
        </button>
        <div className={"flex gap-[3rem] font-bold"}>
            <button
                    className={`transition-colors p-[1rem] bg-transparent border-none rounded-[4px] hover:text-[#02203c] ${groupSelected === 0 ? shadowApplied : ''}`}
                    onClick={() => setGroupSelected(0)}>Group by Difficulty</button>
            <button className={`transition-colors p-[1rem] bg-transparent border-none rounded-[4px] hover:text-[#02203c] ${groupSelected === 1 ? shadowApplied : ''}`}
                    onClick={() => setGroupSelected(1)}>Group by Category</button>
            <button className={`transition-colors p-[1rem] bg-transparent border-none rounded-[4px] hover:text-[#02203c] ${groupSelected === 2 ? shadowApplied : ''}`}
                    onClick={() => setGroupSelected(2)}>Group Randomly</button>
        </div>
        <button className={"flex gap-[10px]"}>
            <Filters className={"w-[25px] h-[25px]"}/>
            Filters
        </button>
    </section>;
}

export default QuestionGroupingAndFilters;