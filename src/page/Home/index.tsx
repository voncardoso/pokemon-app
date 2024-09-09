import Banner from "../../assets/bannerComplete1.5x.png";
import { Button } from "../../components/Button";
import style from "./home.module.css";
import { useHomeController } from "./useHome.controller";

const Home = () => {
  const controller = useHomeController();

  return (
    <section className={style.container}>
      <div className={style.content}>
        <div className={style.coverText}>
          <h1>Find all your favorite Pokemon</h1>
          <h2>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </h2>
          <Button
            title="See pokemons"
            color="primary"
            type="primary"
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
