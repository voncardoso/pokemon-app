import style from "./cardLoading.module.css";
export const CardLoading = ({ height = 160 }: { height: number }) => {
  return (
    <div className={style.cardLoading} style={{ height: `${height}px` }} />
  );
};
