import { useNavigate } from "react-router-dom";

export const useHomeController = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/pokemons");

  return { handleNavigate };
};
