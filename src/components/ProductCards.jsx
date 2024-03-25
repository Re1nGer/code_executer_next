import ProductCard from "@/components/ProductCard";
import QuestionsIcon from "@/icons/QuestionsIcon.svg";
import VideoIcon from "@/icons/VideoIcon.svg";
import CrashIcon from "@/icons/CrashIcon.svg";
import CodeIcon from "@/icons/CodeIcon.svg";
import FeatureIcon from "@/icons/FeatureIcon.svg";
import AtomIcon from "@/icons/AtomIcon.svg";
import AssessmentIcon from "@/icons/AssessmentIcon.svg";
import MockIcon from "@/icons/MockIcon.svg";
import CertificateIcon from "@/icons/Certificate.svg";

const ProductCards = () => {
    return <div className={"max-w-[1200px] w-full flex flex-col items-center md:flex-row flex-wrap justify-center"}>
        <ProductCard
            Icon={QuestionsIcon}
            title={"200 hand picked questions"}
            paragraph={"Coding interview prep is a numbers game that many candidates lose. We've hand-picked 200  of the best coding interview questions to prepare you for every interview you could encounter."}/>
        <ProductCard
            Icon={VideoIcon}
            title={"100+ Hours of Video Explanation"}
            paragraph={"Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100  hours of content, all at your fingertips."}/>
        <ProductCard
            Icon={CrashIcon}
            title={"Data Structures Crash Course"}
            paragraph={"Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures."}/>
        <ProductCard
            Icon={CodeIcon}
            title={"200 hand picked questions"}
            paragraph={"Coding interview prep is a numbers game that many candidates lose. We've hand-picked 200  of the best coding interview questions to prepare you for every interview you could encounter."}/>
        <ProductCard
            Icon={FeatureIcon}
            title={"100+ Hours of Video Explanation"}
            paragraph={"Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100  hours of content, all at your fingertips."}/>
        <ProductCard
            Icon={AtomIcon}
            title={"Data Structures Crash Course"}
            paragraph={"Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures."}/>
        <ProductCard
            isLearnMore={false}
            Icon={AssessmentIcon}
            title={"200 hand picked questions"}
            paragraph={"Coding interview prep is a numbers game that many candidates lose. We've hand-picked 200  of the best coding interview questions to prepare you for every interview you could encounter."}/>
        <ProductCard
            isLearnMore={false}
            Icon={MockIcon}
            title={"100+ Hours of Video Explanation"}
            paragraph={"Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100  hours of content, all at your fingertips."}/>
        <ProductCard
            Icon={CertificateIcon}
            title={"Data Structures Crash Course"}
            paragraph={"Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures."}/>
    </div>;
}

export default ProductCards