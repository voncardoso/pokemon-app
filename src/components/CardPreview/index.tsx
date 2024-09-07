import { AttributesCircle } from "../AttributsCircle";
import { Button } from "../Button";
import style from "./style.module.css";

export const CardPreview = () => {
  return (
    <div className={style.card}>
      <div className={style.info}>
        <div className={style.infoDetail}>
          <header>
            <h1>Charizard</h1>
          </header>
          <div className={style.attributes}>
            <AttributesCircle title="Ataque" value={80} size="small" />
            <AttributesCircle title="Defesa" value={80} size="small" />
          </div>
          <footer className={style.footer}>
            <Button title="Terra" color="primary" type="second" />
            <Button title="Fogo" color="blue" type="second" />
          </footer>
        </div>
      </div>
      <div className={style.image}>imagem</div>
    </div>
  );
};
