import { useContext } from "react";
import { QuestionContext } from "@/contexts/QuestionContext";

export const useQuestionContext = () => {
    return useContext(QuestionContext);
}
