import { HeaderLinks } from "../../utils/HeaderLinks.ts";
import BurgenBt from "../../assets/burgenBtn.svg";
import closeIcon from "../../assets/closeIcon.svg";
import Logo from "../../assets/Logo.png";
import style from "./header.module.css";
import { useHeaderController } from "./useHeader.controller.ts";

export const Header = () => {
  const controller = useHeaderController();
  return (
    <header className={style.container}>
      <div className={style.content}>
        <img src={Logo} alt="Logo" className="logo" />
        <nav className={style.nav}>
          <div>
            {HeaderLinks.map((link) => (
              <a href={link.path}>{link.name}</a>
            ))}
          </div>
          <button onClick={controller.habdleToggleMenu}>
            {controller.isActive ? (
              <img src={closeIcon} alt="Menu" className="Menu" />
            ) : (
              <img src={BurgenBt} alt="Menu" className="Menu" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
