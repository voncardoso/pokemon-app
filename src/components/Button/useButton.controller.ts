import { ButtonControllerProps } from "./types";
import style from "./button.module.css";

export const useButtonController = ({ color, type }: ButtonControllerProps) => {
  const colors: { [key: string]: string } = {
    primary: "var(--color-green)",
    second: "var(--color-yellow)",
    blue: "var(--color-blue)",
  };

  const buttonStyle = {
    background: colors[color] || colors.primary,
  };

  const typeClss = type === "primary" ? style.button : style.buttonSecondary;

  return {
    buttonStyle,
    typeClss,
  };
};
