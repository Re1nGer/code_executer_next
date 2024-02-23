import {createContext, useState} from "react";

export const QuestionContext = createContext(null);


const defaultQuestionValue = {
    uid: '',
    name: '',
    version: '',
    releaseDate: '',
    category: '',
    difficulty: 1,
    isFree: true,
    isFreeForStudents: true,
    isAvailable: true,
    languagesSupported: ['python'],
    correctcount: 155,
    failurecount: 1,
    instructor: 'Leonardo DiCaprio',
    codeWalkthroughTime: 12,
    prompt: '',
    spaceTime: '',
    resources: [{ archiveLink: '' }],
    userQuestions: [{ isComplete: false }],
    hints: [],
}

export const QuestionContextProvider = ({ children }) => {

    const [question, setQuestion] = useState(defaultQuestionValue);
    const [isLoading, setIsLoading] = useState(true);
    const [isScratchpadSaving, setIsScratchpadSaving] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('python'); //default language

    const value = {
        question,
        setQuestion,
        setIsLoading,
        isLoading,
        setIsScratchpadSaving,
        isScratchpadSaving,
        currentLanguage,
        setCurrentLanguage
    };

    return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>
}
