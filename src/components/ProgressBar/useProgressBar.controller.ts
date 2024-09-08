import styles from "./progressBar.module.css";
import { ProgressBarWithoutTitle } from "./types";
export const useProgressBar = ({
  progress,
  maxValue = 100,
  type,
}: ProgressBarWithoutTitle) => {
  const percent = (progress / maxValue) * 100;
  const typeClass =
    type === "primary" ? styles.progressPrimary : styles.progressSecond;

  return {
    percent,
    typeClass,
  };
};
