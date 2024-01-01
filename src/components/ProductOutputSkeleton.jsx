import FailTestSkeleton from "@/components/FailedTestSkeleton.jsx";
import SuccessTestSkeleton from "@/components/SuccessTestSkeleton.jsx";

const ProductOutputSkeleton = () => {
    return <div
        className={"bg-[#15314b] max-h-[205px] flex flex-col rounded-[4px] border-[2px] border-[#15314b] max-w-[291px] h-full w-full"}>
        <div className={"max-h-[30px] h-full flex justify-between items-center"}>
            <h3 className={"pl-[10px]"}>Output</h3>
            <button
                className={"bg-[#008529] text-white text-center px-[15px] font-normal h-full"}>Submit
            </button>
        </div>
        <div className={"flex flex-col gap-[10px] bg-[#02203c] product__test_scrollbar"}>
            <FailTestSkeleton/>
            <SuccessTestSkeleton/>
            <SuccessTestSkeleton/>
            <SuccessTestSkeleton/>
            <FailTestSkeleton/>
        </div>
    </div>;
}

export default ProductOutputSkeleton