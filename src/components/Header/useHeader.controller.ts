import {useState} from "react";

export const useHeaderController = () => {
    const [isActive, setIsActive] = useState<boolean>(false)

    const habdleToggleMenu = () => {
        setIsActive(!isActive)
    }

    return {
        isActive,
        habdleToggleMenu
    }
}