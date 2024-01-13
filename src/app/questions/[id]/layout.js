'use client'

import {QuestionContextProvider} from "@/contexts/QuestionContext";

const Layout = ({ children }) => {
    return (
        <QuestionContextProvider>
            { children }
        </QuestionContextProvider>
    )
}

export default Layout
