import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { PokemonApiResponse, pokemonDetail } from "./types";

export const useGetPokemons = (offset: number, limit: number) => {
  const [pokemons, setPokemons] = useState<pokemonDetail[]>();
  const { data, error, loading } = useFetch<PokemonApiResponse>(
    "https://pokeapi.co/api/v2/pokemon",
    offset,
    limit
  );
  const fetchData = async (data: PokemonApiResponse) => {
    try {
      // Segunda requisição para obter os detalhes de cada Pokémon
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: { url: string }) => {
          const pokemonResponse = await fetch(pokemon.url);
          return pokemonResponse.json();
        })
      );

      setPokemons(detailedPokemons);
    } catch (err) {
      console.error(err as Error);
    }
  };

  useEffect(() => {
    if (data) {
      fetchData(data);
    }
  }, [data, offset, limit]);

  return {
    pokemons,
    error,
    loading,
  };
};
