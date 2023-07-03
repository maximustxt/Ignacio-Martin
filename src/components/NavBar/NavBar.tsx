import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  //*-------------------------Idiomas:
  const [t, i18n] = useTranslation("global");
  //*--------------------------------*//
  const [stateMenu, setStateMenu] = useState(false);

  const onChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    /// siempre poner react. ...y el resto del tipo de dato para los eventos.
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const FuncionOnClick = () => {
    setStateMenu(!stateMenu);
  };

  return (
    <nav className="nav">
      <div className="contenedorNav">
        <div className={`Container ${stateMenu && "open"}`}>
          <a className="Icono" href="#">
            I<span>M</span>
          </a>
          <a onClick={FuncionOnClick} className="menuHome" href="#Perfil">
            {t("texto.PerfilNav")}
          </a>
          <a onClick={FuncionOnClick} className="menu" href="#Habilidades">
            {t("texto.HabilidadesNav")}
          </a>
          <a onClick={FuncionOnClick} className="menu " href="#Proyectos">
            {t("texto.ProyectosNav")}
          </a>

          <a onClick={FuncionOnClick} className="menu" href="#Contacto">
            {t("texto.ContactoNav")}
          </a>
          <div className="ContainerTraduccion">
            <select className="SelectIdioma" onChange={onChangeLanguage}>
              <option value="es">Español</option>
              <option value="en">English(US)</option>
            </select>
          </div>
        </div>
        <div
          className={`nav_toggle ${stateMenu && "open"}`}
          onClick={() => setStateMenu(!stateMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
