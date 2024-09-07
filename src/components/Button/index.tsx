import style from "./button.module.css";
import { ButtonProps } from "./types";

export const Button = ({ title, ...props }: ButtonProps) => {
  const colorclass =
    props.color === "second"
      ? style.buttonHomeSecundary
      : style.buttonHomePrimary;
  return (
    <button {...props} className={colorclass}>
      {title}
    </button>
  );
};
