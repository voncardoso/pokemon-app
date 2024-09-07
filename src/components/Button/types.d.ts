export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: "primary" | "second" | "blue";
  type: "primary" | "second";
}

type ButtonControllerProps = Omit<ButtonProps, "title" | "disabled">;
