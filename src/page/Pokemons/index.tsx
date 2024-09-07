import { useHomeController } from "./useHome.controller";

const Pokemons = () => {
  const controller = useHomeController();

  return (
    <>
      <div>
        {controller.pokemons?.map((pokemon) => (
          <div key={pokemon.name}>{pokemon.name}</div>
        ))}
      </div>

      <button onClick={controller.handlePreviousPage}>previous</button>
      <button onClick={controller.handleNextPage}>next</button>
    </>
  );
};

export default Pokemons;
