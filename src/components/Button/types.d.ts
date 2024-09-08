export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string | undefined;
  color: "primary" | "second" | "blue" | string;
  type: "primary" | "second";
}

type ButtonControllerProps = Omit<ButtonProps, "title" | "disabled"> & {
  color: string;
};
