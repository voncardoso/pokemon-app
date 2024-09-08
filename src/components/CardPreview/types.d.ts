import { pokemonDetail } from "../../services/pokemons/types";

interface CardPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  pokemon: pokemonDetail;
  loading?: boolean;
  onClick?: () => void;
}
