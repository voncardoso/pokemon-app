import { ProgressBarProps } from "./types";
import styles from "./progressBar.module.css";
import { useProgressBar } from "./useProgressBar.controller";
export const ProgressBar = ({
  progress,
  title,
  type,
  maxValue = 100,
}: ProgressBarProps) => {
  const controller = useProgressBar({ progress, maxValue, type });

  return (
    <div>
      <span className={styles.scoring}>
        {progress}/{maxValue} {title}
      </span>
      <div className={styles.container}>
        <div
          className={controller.typeClass}
          style={{ width: `${controller.percent}%` }}
        />
      </div>
    </div>
  );
};
