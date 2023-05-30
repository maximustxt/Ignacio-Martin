import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [stateMenu, setStateMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="contenedorNav">
        <div className={`Container ${stateMenu && "open"}`}>
          <a className="Icono" href="#">
            I<span>M</span>
          </a>
          <a className="menuHome" href="#Perfil">
            Perfil
          </a>
          <a className="menu" href="#Habilidades">
            Habilidades
          </a>
          <a className="menu " href="#Proyectos">
            Proyectos
          </a>

          <a className="menu" href="#Contacto">
            Contacto
          </a>
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
