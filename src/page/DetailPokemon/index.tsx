import { AttributesCircle } from "../../components/AttributsCircle";
import { CardBorder } from "../../components/CardBorder";
import { ProgressBar } from "../../components/ProgressBar";
import { capitalizerFirstLetter } from "../../utils/CapitalizerFirstLetter";
import { removeDash } from "../../utils/RemoveDash";
import style from "./detailPokemon.module.css";
import { useDetailPokemonController } from "./useDetailPokemon.controller";
const DetailPokemon = () => {
  const controller = useDetailPokemonController();

  return (
    <section className={style.container}>
      <div>
        <img
          className={style.image}
          src={
            controller.pokemonDetail?.sprites.other?.dream_world.front_default
          }
          alt={`Foto ${controller.pokemonDetail?.name}`}
        />
      </div>
      <div className={style.detail}>
        <h1>
          {capitalizerFirstLetter(String(controller.pokemonDetail?.name))}
        </h1>

        <CardBorder>
          <div className={style.ability}>
            <h3>Abilities</h3>
            <div>
              <span>
                {capitalizerFirstLetter(
                  String(controller.pokemonDetail?.abilities[0].ability.name)
                )}
              </span>
              <span>-</span>
              <span>{controller.pokemonDetail?.abilities[1].ability.name}</span>
            </div>
          </div>
        </CardBorder>

        <CardBorder>
          <div className={style.progressBar}>
            <ProgressBar
              title="HP"
              maxValue={100}
              progress={Number(controller.pokemonDetail?.stats[0].base_stat)}
              type="second"
            />
            <ProgressBar
              title="XP"
              maxValue={1000}
              progress={Number(controller.pokemonDetail?.base_experience)}
              type="primary"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div className={style.attributes}>
            {controller?.stats.map((stat) => (
              <AttributesCircle
                title={capitalizerFirstLetter(removeDash(stat.stat.name))}
                value={stat.base_stat}
                size="large"
              />
            ))}
          </div>
        </CardBorder>
      </div>
      <u>
        <li>Abilities</li>
        <li>Stats</li>
        <li>Types</li>
        <li>Moves</li>
      </u>
    </section>
  );
};

export default DetailPokemon;
