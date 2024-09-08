import style from "./cardLoadingPreview.module.css";
export const CardLoadingPreview = ({ height = 160 }: { height: number }) => {
  return (
    <div className={style.cardLoading} style={{ height: `${height}px` }} />
  );
};
