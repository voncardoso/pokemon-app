import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { PokemonApiResponse, pokemonDetail, PokemonSpacies } from "./types";

export const useGetPokemons = (offset: number, limit: number) => {
  const [pokemons, setPokemons] = useState<pokemonDetail[]>();
  const { data, error, loading } = useFetch<PokemonApiResponse>(
    `https://pokeapi.co/api/v2/pokemon`,
    offset,
    limit
  );

  const totalPokemons = data?.count ?? 0;

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
  const [pokemonDetail, setPokemonDetail] = useState<pokemonDetail>();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${seachName}`
      );
      const pokemonData = await pokemonResponse.json();
      setPokemonSearch([pokemonData]);
      setPokemonDetail(pokemonData);
      return pokemonData;
    } catch (err) {
      console.error(err as Error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    pokemonDetail,
    pokemonSearch,
    loading,
    fetchData,
  };
};

export const useGetSpecies = (name: string) => {
  const { data } = useFetch<PokemonSpacies>(
    `https://pokeapi.co/api/v2/pokemon-species/${name}/`
  );

  return {
    data,
  };
};
