import { ButtonProps } from "./@types";
import style from "./button.module.css";

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button {...props} className={style.buttonHome}>
      {title}
    </button>
  );
};
