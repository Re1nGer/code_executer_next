import { useEffect, useState } from "react";
import { Editor } from "@monaco-editor/react";
import TickIcon from "@/icons/TickIcon.svg";
import { useDebounce } from "@/hooks/useDebounce";
import { useParams } from 'next/navigation'
import ScratchpadLoader from "@/components/ScratchpadLoader";
import {useQuestionContext} from "@/hooks/useQuestionContext";


const ScratchPadTab = () => {

    const [isSaving, setIsSaving] = useState(false);

    const { id } = useParams();

    const { setQuestion, question: { scratchpad } } = useQuestionContext()

    const [localScratchPad, setLocalScratchPad] = useState(scratchpad);

    const debouncedScratchPad = useDebounce(localScratchPad, 300);

    const handleEditorChange = (value) => {
        setIsSaving(true)
        setLocalScratchPad(value)
    }

    const handleSave = async () => {
        try {
            const body = { uid: id, scratchpad: debouncedScratchPad };
            await fetch('/api/questions', { method: 'PUT', body: JSON.stringify(body) })
            setQuestion((prevState) => ({...prevState, scratchpad: debouncedScratchPad}))
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsSaving(false)
        }
    }

    useEffect(() => {
        handleSave()
    }, [debouncedScratchPad])

    return <div className={'max-h-[550px] product__test_scrollbar overflow-x-hidden bg-[#001528] relative'}>
        <Editor
            height={'60vh'}
            theme={'vs-dark'}
            defaultValue={scratchpad}
            onChange={handleEditorChange}
        />
        <div className={'absolute top-0 right-[10px]'}>
        { isSaving ? (
            <ScratchpadLoader />
        ) : (
            <TickIcon className={'w-[20px] h-[20px] text-white'} />
        ) }
        </div>
    </div>
}

export default ScratchPadTab;