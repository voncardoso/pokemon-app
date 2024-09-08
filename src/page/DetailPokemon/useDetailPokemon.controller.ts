import { useNavigate, useParams } from "react-router-dom";
import { useSearchPokemons } from "../../services/pokemons/service";
import { useEffect } from "react";

export const useDetailPokemonController = () => {
  const navigate = useNavigate();
  const name = useParams().name;

  const { fetchData, pokemonDetail } = useSearchPokemons(String(name));

  const handleNavigate = (name: string) => navigate(`pokemons/${name}`);

  console.log(pokemonDetail);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    pokemonDetail,
    handleNavigate,
  };
};
