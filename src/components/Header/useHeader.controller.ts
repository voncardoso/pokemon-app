import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useHeaderController = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = useLocation().pathname;

  const habdleToggleMenu = () => {
    setIsActive(!isActive);
  };

  const getLinkStyle = (path: string, currentPath: string) => ({
    borderBottom: path === currentPath ? "2px solid var(--color-dark)" : "none",
  });

  return {
    isActive,
    pathname,
    getLinkStyle,
    habdleToggleMenu,
  };
};
