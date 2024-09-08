import { capitalizerFirstLetter } from "../../utils/CapitalizerFirstLetter";
import { typeColors } from "../../utils/TypeColors";
import { AttributesCircle } from "../AttributsCircle";
import { Button } from "../Button";
import { CardLoading } from "../CardLoading";
import style from "./style.module.css";
import { CardPreviewProps } from "./types";
import { useCardPreviewController } from "./useCardPrreview.controller";

export const CardPreview = ({
  pokemon,
  onClick,
  loading,
}: CardPreviewProps) => {
  const controller = useCardPreviewController({ pokemon, loading });

  return (
    <>
      {loading ? (
        <CardLoading height={160} />
      ) : (
        <div onClick={onClick} className={style.card}>
          <div className={style.info}>
            <div className={style.infoDetail}>
              <header>
                <h1>{capitalizerFirstLetter(pokemon.name)}</h1>
              </header>
              <div className={style.attributes}>
                <AttributesCircle
                  title="Attack"
                  value={controller.stats.attack}
                  size="small"
                />
                <AttributesCircle
                  title="Defense"
                  value={controller.stats.defense}
                  size="small"
                />
              </div>
              <footer className={style.footer}>
                <Button
                  title={pokemon.types[0].type.name}
                  color={pokemon.types[0].type.name}
                  type="second"
                />
                {pokemon.types.length === 2 && (
                  <Button
                    title={pokemon.types[1].type.name}
                    type="second"
                    color="blue"
                  />
                )}
              </footer>
            </div>
          </div>
          <div
            className={style.image}
            style={{ backgroundColor: typeColors[pokemon.types[0].type.name] }}
          >
            <img src={pokemon.sprites.other?.showdown.front_default} alt="" />
          </div>
        </div>
      )}
    </>
  );
};
