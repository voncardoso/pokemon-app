import { useNavigate, useParams } from "react-router-dom";
import { useSearchPokemons } from "../../services/pokemons/service";
import { useEffect } from "react";

export const useDetailPokemonController = () => {
  const navigate = useNavigate();
  const name = useParams().name;

  const { fetchData, pokemonDetail } = useSearchPokemons(String(name));

  const handleNavigate = (name: string) => navigate(`pokemons/${name}`);

  const stats = pokemonDetail?.stats.slice(1) ?? [];

  useEffect(() => {
    fetchData();
  }, []);

  return {
    pokemonDetail,
    stats,
    handleNavigate,
  };
};
