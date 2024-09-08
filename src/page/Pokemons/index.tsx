import { CardPreview } from "../../components/CardPreview";
import { useHomeController } from "./useHome.controller";

import style from "./style.module.css";
import { Pagination } from "../../components/Pagination";

const Pokemons = () => {
  const controller = useHomeController();

  return (
    <section className={style.container}>
      <h1>
        {controller.totalPokemons} Pokemon for you to choose your favorite
      </h1>
      <input
        value={controller.seachName}
        type="text"
        placeholder="Search pokemon..."
        onChange={controller.handleSeach}
      />
      <div className={style.containerPokemons}>
        {controller.seachName.length > 0
          ? controller.pokemonSearch?.map((pokemon) => (
              <CardPreview
                pokemon={pokemon}
                loading={controller.loading}
                onClick={() => {
                  controller.handleNavigate(pokemon.name);
                }}
              />
            ))
          : controller.pokemons?.map((pokemon) => (
              <CardPreview
                pokemon={pokemon}
                loading={controller.loading}
                onClick={() => {
                  controller.handleNavigate(pokemon.name);
                }}
              />
            ))}
      </div>

      <Pagination
        handlePage={controller.handlePage}
        seachPage={controller.seachPage}
        page={`${controller.page} de ${controller.totalPages}`}
        next={controller.handleNextPage}
        previous={controller.handlePreviousPage}
      />
    </section>
  );
};

export default Pokemons;
