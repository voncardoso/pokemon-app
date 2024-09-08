import { ButtonControllerProps } from "./types";
import style from "./button.module.css";
import { typeColors } from "../../utils/TypeColors";

export const useButtonController = ({ color, type }: ButtonControllerProps) => {
  const buttonStyle = {
    background: typeColors[color] || typeColors.primary,
  };

  const typeClss = type === "primary" ? style.button : style.buttonSecondary;

  return {
    buttonStyle,
    typeClss,
  };
};
