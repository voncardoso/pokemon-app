import { useGetPokemons, useGetSpecies, useSearchPokemons } from "./service";

const PokemonServices = () => {
  return {
    useGetPokemons,
    useSearchPokemons,
    useGetSpecies,
  };
};

export default PokemonServices;
