import { useContext } from "react";
import { HeaderContext } from "@/contexts/HeaderContext";

export const useHeaderContext = () => {
    return useContext(HeaderContext);
}
