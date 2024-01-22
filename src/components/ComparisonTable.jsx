import HeaderIcon from "@/icons/HeaderIcon.svg";
import ComparisonTableTickBox from "@/components/ComparisonTableTickBox";
import ComparisonTableCrossBox from "@/components/ComparisonTableCrossBox";

const ComparisonTable = () => {

    return <section className={'py-[100px] px-[20px] relative w-full max-w-[1200px]'}>
        <h1 className={'mb-[20px] w-full text-center text-[35px] text-[#02203c]'}>A Better Way to Prep for Coding Interviews</h1>
        <div className={'shadow-[0_0_50px_-10px_rgba(0,0,0,.1)] overflow-auto'}>
            <table className={'bg-white rounded-[4px] text-[#445d6e] table-fixed min-w-[800px] border-collapse w-full'}>
                <thead className={'w-full'}>
                <tr>
                    <th className={'py-[30px] px-[20px] text-[18px] algo-expert__product-table_border'}></th>
                    <th className={'py-[30px] px-[20px] text-[18px] algo-expert__product-table_border'}>
                        <div className={'flex justify-center items-center'}>Cracking The Coding Interview</div>
                    </th>
                    <th className={'py-[30px] px-[20px] text-[18px] algo-expert__product-table_border'}>
                        <div className={'flex justify-center items-center'}>LeetCode</div>
                    </th>
                    <th className={'px-[20px] text-[18px] border-b-[1px] border-b-[#eee] bg-[#626ee3] rounded-tr-[4px]'}>
                        <div className={'flex justify-center items-center text-white'}>
                            <HeaderIcon className={'max-w-[25px] w-full max-h-[25px] h-full mr-[10px]'} />
                            AlgoExpert
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        100+ Practice Questions
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        Data Structures Content
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        Guided Format
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        Coding Workspace
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        Multiple Programming Languages
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        High-Quality Solutions
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        Video Explanations
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        Mock Interviews
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                <tr>
                    <th className={'text-left p-[20px] algo-expert__product-table_border'}>
                        All-In-One Platform
                    </th>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableCrossBox />
                    </td>
                    <td className={'text-right p-[20px] algo-expert__product-table_border'}>
                        <ComparisonTableTickBox />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
}

export default ComparisonTable;