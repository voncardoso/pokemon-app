import { useGetPokemons, useSearchPokemons } from "./service";

const PokemonServices = () => {
  return {
    useGetPokemons,
    useSearchPokemons,
  };
};

export default PokemonServices;
