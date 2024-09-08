import { CardPreview } from "../../components/CardPreview";
import { useHomeController } from "./useHome.controller";

import style from "./style.module.css";

const Pokemons = () => {
  const controller = useHomeController();

  return (
    <section className={style.container}>
      <div className={style.containerPokemons}>
        {controller.pokemons?.map((pokemon) => (
          <CardPreview pokemon={pokemon} />
        ))}
      </div>

      <button onClick={controller.handlePreviousPage}>previous</button>
      <button onClick={controller.handleNextPage}>next</button>
    </section>
  );
};

export default Pokemons;
