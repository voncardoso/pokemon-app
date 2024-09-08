import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import PokemonServices from "../../services/pokemons";

export const useDetailPokemonController = () => {
  const navigate = useNavigate();
  const { useSearchPokemons, useGetSpecies } = PokemonServices();
  const name = useParams().name;

  const { fetchData, pokemonDetail } = useSearchPokemons(String(name));
  const { data: pokemonSpacies } = useGetSpecies(String(name));

  const handleNavigate = (name: string) => navigate(`pokemons/${name}`);

  const stats = pokemonDetail?.stats.slice(1) ?? [];
  const imgs = pokemonDetail?.sprites.other?.showdown ?? {};

  function divideSprites(sprites: { [key: string]: string | null }) {
    const shinySprites = Object.fromEntries(
      Object.entries(sprites).filter(
        ([key, value]) => key.includes("shiny") && value !== null
      )
    );

    const defaultSprites = Object.fromEntries(
      Object.entries(sprites).filter(
        ([key, value]) => key.includes("default") && value !== null
      )
    );

    return { shinySprites, defaultSprites };
  }
  const { shinySprites, defaultSprites } = divideSprites(imgs);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    pokemonDetail,
    shinySprites: Object.values(shinySprites),
    defaultSprites: Object.values(defaultSprites),
    stats,
    pokemonSpacies,
    handleNavigate,
  };
};
