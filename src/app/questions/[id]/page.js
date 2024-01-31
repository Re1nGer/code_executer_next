'use client'

import { useEffect, useState } from "react";
import EditorPanel from "@/components/EditorPanel";
import PromptTabs from "@/components/PromptTabs";
import { useQuestionContext } from "@/hooks/useQuestionContext";
import TestTabs from "@/components/execute/TestTabs";
import ExecuteHeader from "@/components/execute/ExecuteHeader";



export default function Question({ params }) {

    const [promptW, setPromptW] = useState(800)

    const [drag, setDrag] = useState({
        active: false,
        y: ""
    });

    const [testD, setTestD] = useState({
        h: 215
    });

    const editorPanelWidthPercent = window ? ((innerWidth - promptW) / innerWidth) * 100 : 1

    const { setQuestion, setIsLoading } = useQuestionContext();

    const resizeFrame = e => {
        const { active, x, y } = drag;
        if (active) {
            const yDiff = Math.abs(y - e.clientY);

            const newH = y > e.clientY ? testD.h + yDiff : testD.h - yDiff;

            setDrag({ ...drag, x: e.clientX, y: e.clientY });
            setTestD({ h: newH });
        }
    };

    const startResize = e => {
        setDrag({
            active: true,
            y: e.clientY
        });
    };

    const stopResize = e => {
        setDrag({ ...drag, active: false });
    };

    const fetchQuestion = async (id) => {
        try {
            const request = await fetch(`/api/questions/${id}`,{ cache: 'no-store' })
            setQuestion(await request.json());
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleResize);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    const handleResize = (event) => {
        setPromptW(event.clientX);
    };

    const handleMouseDown = () => {
        window.addEventListener('mousemove', handleResize);
        window.addEventListener('mouseup', handleMouseUp);
    };


    useEffect(() => {
        fetchQuestion(params.id)
    }, [params.id])

    return (
        <section className={'bg-[#02203c] px-[15px] h-screen overflow-hidden'}>
            <ExecuteHeader />
            <div className={`rounded-[4px] flex h-full`}
                 onMouseMove={resizeFrame}
                 onMouseUp={stopResize}>
                <div className={'flex flex-col'} style={{width: `${promptW}px`}}>
                    <div className={'flex flex-col'} style={{height: `${window.innerHeight - testD.h}px`}}>
                        <PromptTabs />
                    </div>
                    <div onMouseDown={startResize}
                         className={'w-full h-[20px] flex-grow-1 py-[.5rem] bg-transparent cursor-row-resize transition-colors hover:bg-[#626ee3]'}>
                    </div>
                    <div style={{height: testD.h + 'px'}}>
                        <TestTabs />
                    </div>
                </div>
                <div onMouseDown={handleMouseDown}
                    className={'w-[15px] h-full bg-transparent cursor-col-resize transition-colors hover:bg-[#626ee3]'}>
                </div>
                <EditorPanel width={editorPanelWidthPercent + '%'}/>
            </div>
        </section>
    )
}










