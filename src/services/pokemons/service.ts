import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { PokemonApiResponse, pokemonDetail } from "./types";

export const useGetPokemons = (offset: number, limit: number) => {
  const [pokemons, setPokemons] = useState<pokemonDetail[]>();
  const { data, error, loading } = useFetch<PokemonApiResponse>(
    `https://pokeapi.co/api/v2/pokemon`,
    offset,
    limit
  );

  const totalPokemons = data?.count;

  const fetchData = async (data: PokemonApiResponse) => {
    try {
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
    totalPokemons,
  };
};

export const useSearchPokemons = (seachName: string) => {
  const [pokemonSearch, setPokemonSearch] = useState<pokemonDetail[]>();

  const fetchData = async () => {
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${seachName}`
      );
      const pokemonData = await pokemonResponse.json();
      setPokemonSearch([pokemonData]);
      return pokemonData;
    } catch (err) {
      console.error(err as Error);
    }
  };

  return {
    pokemonSearch,
    fetchData,
  };
};
