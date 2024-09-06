import Banner from '../../assets/bannerComplete1.5x.png';
import style from './Home.module.css';


const Home = () => {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.coverText}>
                    <h1>Encontre todos os seus Pokémons favoritos</h1>
                    <h2>Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens e habilidades</h2>
                    <button className={style.buttonHome}>Veja pokemons</button>
                </div>
                <div className={style.image}>
                    <img src={Banner} alt="banner"/>
                </div>
            </div>
        </section>
    );
}

export  default Home;