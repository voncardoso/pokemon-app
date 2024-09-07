import style from "./footer.module.css";
export const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer}>
        <p>Faça com ❤️ para o time Pokemon</p>
        <p>Nosso Time</p>
      </div>
    </footer>
  );
};
