import { pokemonDetail } from "../../services/pokemons/types";

interface CardPreviewProps {
  pokemon: pokemonDetail;
  onClick?: () => void;
}
