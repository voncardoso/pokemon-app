import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import Home from "../page/Home";
import Pokemons from "../page/Pokemons";
import DetailPokemon from "../page/DetailPokemon";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<DetailPokemon />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
