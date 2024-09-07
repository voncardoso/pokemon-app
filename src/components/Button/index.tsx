import style from "./button.module.css";
import { ButtonProps } from "./types";

export const Button = ({ title, color, type, ...props }: ButtonProps) => {
  const colors: { [key: string]: string } = {
    primary: "var(--color-green)",
    second: "var(--color-yellow)",
    blue: "var(--color-blue)",
  };

  const buttonStyle = {
    background: colors[color] || colors.primary,
  };

  const typeClss = type === "primary" ? style.button : style.buttonSecondary;

  return (
    <button {...props} className={typeClss} style={buttonStyle}>
      {title}
    </button>
  );
};
