import InstructorImage from '../images/leonardo.jpg'
import Image from "next/image";
import { useRef } from "react";


const VideoExplanationTab = () => {

    const videoRef = useRef(null);

    const handleGoToConceptualOverview = () => {
        videoRef.current.currentTime = 0;
    }

    const handleGoToCodeReview = () => {
        videoRef.current.currentTime = 90;
    }

    return <div className={'p-[20px] bg-[#001528] h-full product__test_scrollbar'}>
        <div className={'mb-[15px] flex items-center gap-[10px] text-white'}>
            <Image src={InstructorImage} className={'w-[35px] h-[35px] rounded-full'} alt={'instructor'} />
            <p className={'font-bold'}>Instructor:</p>
            <p>Leonardo DiCaprio</p>
        </div>
{/*
        <video ref={videoRef} width="100%" height="100%" controls>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
*/}
        <iframe ref={videoRef} width="100%" height="90%" src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
        </iframe>
        <div className={'flex font-open_sans text-white items-center w-full mt-2'}>
            <button onClick={handleGoToConceptualOverview} className={'rounded-[4px] h-[50px] w-full bg-[#02203c] shadow-[0_4px_5px_-6px_rgba(0,0,0,.5)] hover:bg-[#001528]'}>Go to Conceptual Overview</button>
            <button onClick={handleGoToCodeReview} className={'rounded-[4px] h-[50px] w-full bg-[#02203c] shadow-[0_4px_5px_-6px_rgba(0,0,0,.5)] hover:bg-[#001528]'}>Go to Code Walkthrough</button>
        </div>
    </div>
}

export default VideoExplanationTab;
