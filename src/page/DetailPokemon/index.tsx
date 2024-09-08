import { AttributesCircle } from "../../components/AttributsCircle";
import { Button } from "../../components/Button";
import { CardBorder } from "../../components/CardBorder";
import { ProgressBar } from "../../components/ProgressBar";
import { capitalizerFirstLetter } from "../../utils/CapitalizerFirstLetter";
import { removeDash } from "../../utils/RemoveDash";
import { useDetailPokemonController } from "./useDetailPokemon.controller";
import style from "./detailPokemon.module.css";
import { CardLoadingPreview } from "../../components/CardLoadingPreview";
const DetailPokemon = () => {
  const controller = useDetailPokemonController();
  console.log(controller.loading);
  return (
    <section className={style.container}>
      <div>
        {controller.loading ? (
          <CardLoadingPreview height={600} />
        ) : (
          <img
            className={style.image}
            src={
              controller.pokemonDetail?.sprites.other?.dream_world.front_default
            }
            alt={`Foto ${controller.pokemonDetail?.name}`}
          />
        )}

        <div className={style.types}>
          <Button
            title={controller.pokemonDetail?.types[0].type.name}
            color={String(controller.pokemonDetail?.types[0].type.name)}
            type="second"
          />

          {controller.pokemonDetail?.types.length === 2 && (
            <Button
              title={controller.pokemonDetail?.types[1].type.name}
              type="second"
              color="blue"
            />
          )}
        </div>
      </div>
      <div className={style.detail}>
        <h1>
          {capitalizerFirstLetter(String(controller.pokemonDetail?.name))}
        </h1>

        <CardBorder>
          <div className={style.ability}>
            <h3>Group</h3>

            <div>
              {controller.pokemonSpacies?.egg_groups.map((eggGroup, index) => (
                <span>
                  {capitalizerFirstLetter(String(eggGroup.name))}{" "}
                  {index < 1 && " - "}
                </span>
              ))}
            </div>
          </div>
        </CardBorder>

        <CardBorder>
          <div className={style.ability}>
            <h3>Abilities</h3>
            <div>
              {controller.pokemonDetail?.abilities.map((ability, index) => (
                <span>
                  {capitalizerFirstLetter(String(ability.ability.name))}{" "}
                  {index < 1 && " - "}
                </span>
              ))}
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
      <ul className={style.imgVariebles}>
        <CardBorder>
          <div>
            <div>
              {controller.defaultSprites.map((img, index) => (
                <img
                  key={index}
                  src={String(img)}
                  alt={`Imagem ${controller.pokemonDetail?.name}`}
                />
              ))}
            </div>
            <p>Male</p>
          </div>
        </CardBorder>

        <CardBorder>
          <div>
            <div>
              {controller.shinySprites.map((img, index) => (
                <img
                  key={index}
                  src={String(img)}
                  alt={`Imagem ${controller.pokemonDetail?.name}`}
                />
              ))}
            </div>
            <p>Famele</p>
          </div>
        </CardBorder>
      </ul>
    </section>
  );
};

export default DetailPokemon;
