import React from "../../image/icons8-reaccionar-100.png";
import Redux from "../../image/icons8-redux-50.png";
import Sequelize from "../../image/sequelize_original_wordmark_logo_icon_146349.png";
import Javascript from "../../image/icons8-javascript-48.png";
import Css from "../../image/css_original_wordmark_logo_icon_146576.png";
import Bootstrap from "../../image/bootstrap_plain_wordmark_logo_icon_146620.png";
import Node from "../../image/nodejs_original_wordmark_logo_icon_146412.png";
import PosgresSQL from "../../image/postgresql_original_wordmark_logo_icon_146392.png";
import Alert from "../../image/rosquilla.png";

interface Props {
  Herramientas: string[];
}

const ArrayHerramienta = ({ Herramientas }: Props) => {
  console.log(Herramientas);

  const image: any = {
    "Node.js": Node,
    React: React,
    // "Vite": visitEachChild,
    Bootstrap: Bootstrap,
    // "React-Bootstrap",
    Redux: Redux,
    Javascript: Javascript,
    "React Module Css": Css,
    Sequalize: Sequelize,
    PosgresSQL: PosgresSQL,
    // "Express",
    // "Insomnia",
    "Sweet Alert 2": Alert,
  };

  return (
    <>
      {Herramientas.map((Her: string) => (
        <div className="Herramienta">
          <img style={{ width: "50px", height: "50px" }} src={image[Her]} />
          <h3>{Her}</h3>
        </div>
      ))}
    </>
  );
};

export default ArrayHerramienta;
