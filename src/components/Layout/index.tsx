import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import style from "./layout.module.css";

export const Layout = () => {
  return (
    <div className={style.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
