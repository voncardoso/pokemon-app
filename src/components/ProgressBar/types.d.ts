export interface ProgressBarProps {
  progress: number;
  title: string;
  maxValue?: number;
  type: "primary" | "second";
}
export type ProgressBarWithoutTitle = Omit<ProgressBarProps, "title">;
