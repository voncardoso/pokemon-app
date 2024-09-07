import style from "./attributsCircle.module.css";
import { AttributesCircleProps } from "./types";

export const AttributesCircle = ({
  title,
  value,
  size,
}: AttributesCircleProps) => {
  const sizeClass =
    size === "small" ? style.containerSmall : style.containerLarge;

  return (
    <div className={sizeClass}>
      <div>
        <span>{value}</span>
      </div>
      <p>{title}</p>
    </div>
  );
};
