import {createContext,  useState} from "react";

export const HeaderContext = createContext(null);

export const HeaderContextProvider = ({ children }) => {

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);

    const [isContentMenuOpen, setIsContentMenuOpen] = useState(false);

    const value = {
        isLoginModalOpen,
        isProductMenuOpen,
        isProfileMenuOpen,
        isContentMenuOpen,
        setIsLoginModalOpen,
        setIsProfileMenuOpen,
        setIsProductMenuOpen,
        setIsContentMenuOpen
    };

    return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}
