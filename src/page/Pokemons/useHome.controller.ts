import { ChangeEvent, useEffect, useState } from "react";
import PokemonServices from "../../services/pokemons";
import { useNavigate } from "react-router-dom";

export const useHomeController = () => {
  const navigate = useNavigate();
  const { useGetPokemons, useSearchPokemons } = PokemonServices();
  const [seachName, setSeachName] = useState<string>("");
  const [seachPage, setSeachPage] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const limit = 9;

  const handleNavigate = (name: string) => navigate(`${name}`);

  const { pokemons, loading, totalPokemons } = useGetPokemons(offset, limit);
  const { fetchData, pokemonSearch } = useSearchPokemons(
    seachName.toLocaleLowerCase()
  );

  const page: number = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalPokemons / limit);

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePreviousPage = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  const handlePage = (event: ChangeEvent<HTMLInputElement>) => {
    setSeachPage(event.target.value);
  };

  const handleSeach = (event: ChangeEvent<HTMLInputElement>) => {
    setSeachName(event.target.value);
  };

  useEffect(() => {
    setOffset(
      (Number(seachPage) - 1) * limit === -9
        ? 1
        : (Number(seachPage) - 1) * limit
    );
  }, [seachPage]);

  useEffect(() => {
    if (seachName.length > 0) {
      fetchData();
    }
  }, [seachName]);

  return {
    pokemons,
    totalPokemons,
    loading,
    offset,
    page,
    seachPage,
    seachName,
    pokemonSearch,
    totalPages,
    handleNavigate,
    handleSeach,
    handleNextPage,
    handlePreviousPage,
    handlePage,
  };
};
