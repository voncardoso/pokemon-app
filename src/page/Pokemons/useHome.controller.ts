import { useState } from "react";
import PokemonServices from "../../services/pokemons";

export const useHomeController = () => {
  const { useGetPokemons } = PokemonServices();

  const [offset, setOffset] = useState<number>(0);
  const limit = 9;

  const { pokemons, loading } = useGetPokemons(offset, limit);

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePreviousPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  return {
    pokemons,
    loading,
    offset,
    handleNextPage,
    handlePreviousPage,
  };
};
