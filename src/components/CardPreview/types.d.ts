import { pokemonDetail } from "../../services/pokemons/types";

interface CardPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: pokemonDetail;
  onClick?: () => void;
}
