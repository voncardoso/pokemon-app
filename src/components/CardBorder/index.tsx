import { CardBorderProps } from "./types";
import style from "./cardBorder.module.css";
export const CardBorder = ({ children }: CardBorderProps) => {
  return <div className={style.container}>{children}</div>;
};
