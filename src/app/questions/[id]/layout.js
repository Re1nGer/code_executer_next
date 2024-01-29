'use client'

import {QuestionContextProvider} from "@/contexts/QuestionContext";
import {HeaderContextProvider} from "@/contexts/HeaderContext";

const Layout = ({ children }) => {
    return (
        <HeaderContextProvider>
            <QuestionContextProvider>
                { children }
            </QuestionContextProvider>
        </HeaderContextProvider>
    )
}

export default Layout
