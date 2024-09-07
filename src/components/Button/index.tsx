import style from "./button.module.css";
import { ButtonProps } from "./types";

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button {...props} className={style.buttonHome}>
      {title}
    </button>
  );
};
