import { ChangeEvent } from "react";
import style from "./pagination.module.css";
interface PaginationProps {
  page: number;
  seachPage: string;
  next: () => void;
  previous: () => void;
  handlePage: (event: ChangeEvent<HTMLInputElement>) => void;
}
export const Pagination = ({
  next,
  previous,
  page,
  handlePage,
  seachPage,
}: PaginationProps) => {
  return (
    <div className={style.pagination}>
      <div className={style.search}>
        <span>Buscar:</span>
        <input
          value={seachPage}
          onChange={handlePage}
          type="text"
          placeholder="Página"
        />
      </div>
      <button onClick={previous}>Anterior</button>
      <span>{page}</span>
      <button onClick={next}>Proxima</button>
    </div>
  );
};
