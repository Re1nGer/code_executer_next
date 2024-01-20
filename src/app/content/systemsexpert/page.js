'use client'

import Header from "@/components/Header";
import SystemExpertLanding from "@/components/SystemExpertLanding";


const SystemExpertPage = () => {
    return (
        <>
            <SystemsExpertHeader>
                <SystemExpertLanding />
            </SystemsExpertHeader>

        </>
    )
}


const SystemsExpertHeader = ({ children }) => {
    return <Header bgColor={'linear-gradient(-45deg,#0f0f0f 50%,#292929)'}>{children}</Header>
}

export default SystemExpertPage;