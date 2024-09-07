import { AttributesCircle } from "../AttributsCircle";
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
            <AttributesCircle title="Attack" value={80} size="small" />
            <AttributesCircle title="Defense" value={80} size="small" />
          </div>
          <footer>
            <button>Grass</button>
            <button>Poison</button>
          </footer>
        </div>
      </div>
      <div className={style.image}>imagem</div>
    </div>
  );
};
