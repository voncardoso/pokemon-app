import { ButtonProps } from "./types";
import { useButtonController } from "./useButton.controller";

export const Button = ({ title, color, type, ...props }: ButtonProps) => {
  const controller = useButtonController({ color, type });

  return (
    <button
      {...props}
      className={controller.typeClss}
      style={controller.buttonStyle}
    >
      {title}
    </button>
  );
};
