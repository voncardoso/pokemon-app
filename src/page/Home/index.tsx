import Banner from "../../assets/bannerComplete1.5x.png";
import { Button } from "../../components/Button";
import style from "./Home.module.css";
import { useHomeController } from "./useHome.controller";

const Home = () => {
  const controller = useHomeController();

  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.coverText}>
          <h1>Encontre todos os seus Pokémons favoritos</h1>
          <h2>
            Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens
            e habilidades
          </h2>
          <Button
            title="Veja pokemons"
            color="primary"
            onClick={controller.handleNavigate}
          />
        </div>
        <div className={style.image}>
          <img src={Banner} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Home;
