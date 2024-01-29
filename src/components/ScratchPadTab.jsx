'use client'

import {useEffect, useMemo, useState} from "react";
import { Editor } from "@monaco-editor/react";
import TickIcon from "@/icons/TickIcon.svg";
import { useDebounce } from "@/hooks/useDebounce";
import { useParams } from 'next/navigation'
import ScratchpadLoader from "@/components/ScratchpadLoader";
import { useQuestionContext } from "@/hooks/useQuestionContext";


const ScratchPadTab = () => {

    const { id } = useParams();

    const {
            setQuestion,
            question: { scratchpads },
            setIsScratchpadSaving,
            isScratchpadSaving
    } = useQuestionContext();

    const [localScratchPad, setLocalScratchPad] = useState(scratchpads ? scratchpads[0]?.text : '');

    const scratchpadId = useMemo(() => scratchpads ? scratchpads[0]?.id : '', [scratchpads]);

    const debouncedScratchPad = useDebounce(localScratchPad, 100);

    const handleEditorChange = (value) => {
        setIsScratchpadSaving(true)
        setLocalScratchPad(value);
    };

    const handleSave = async () => {
        try {
            const body = { uid: id, scratchpad: debouncedScratchPad, id: scratchpadId };
            const res = await fetch('/api/questions', { method: 'PUT', body: JSON.stringify(body) });
            const result = await res.json();
            setQuestion((prevState) => ({...prevState, scratchpads: [{ id: result.id, text: debouncedScratchPad }]}));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsScratchpadSaving(false);
        }
    };

    useEffect(() => {
        handleSave();
    }, [debouncedScratchPad]);


    return <div className={'max-h-[550px] product__test_scrollbar overflow-x-hidden bg-[#001528] relative'}>
        <Editor
            height={'60vh'}
            theme={'vs-dark'}
            defaultValue={scratchpads ? scratchpads[0]?.text : ''}
            onChange={handleEditorChange}
        />
        <div className={'absolute top-0 right-[10px]'}>
        { isScratchpadSaving ? (
            <ScratchpadLoader />
        ) : (
            <TickIcon className={'w-[20px] h-[20px] text-white'} />
        ) }
        </div>
    </div>
};

export default ScratchPadTab;