import { useParams } from "react-router-dom";
import "./Detail.css";
import ArrayHerramienta from "../Detail/Herramientas";
import data from "../../data.config.json";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  //*----------------------Idiomas:
  const [t, i18n] = useTranslation("global");
  //*------------------------------------*//

  interface Proyecto {
    id: number;
    name: string;
    image: string;
    description: string;
    Herramientas: string[];
    video: string;
  }

  useLayoutEffect(() => {
    //
    // Restablecer la posición de desplazamiento a la parte superior de la página
    window.scrollTo(0, 0);
  }, [location]); // En este ejemplo, utilizamos el hook useLocation de React Router para obtener la ubicación actual. Luego, dentro del hook useLayoutEffect, utilizamos window.scrollTo para establecer las coordenadas (0, 0), lo que coloca la página en la parte superior.

  const { id } = useParams(); //* typescript me va a tirar error en esto porque el id de useParams es de tipo string y el id de el objeto del array es de tipo string.

  const ObjetoDelProyecto = data.Proyectos.find((Pro: Proyecto) => {
    return Pro.id === Number(id);
  });

  if (!ObjetoDelProyecto) {
    // preguntar siempre si llega bien un tipo de dato , sino typescript se queja de que puede ser undefined.
    return <h1>No se encontro esta informacion</h1>;
  }
  const { name, description, Herramientas, video } = ObjetoDelProyecto;

  return (
    <>
      <div className="cardDetail" key={id}>
        <div className="card-infoDetail">
          <div className="ContainerVideo">
            <div>
              <h1 className="title2">{t(name)}</h1>
            </div>
            <div className="ContenerdorDelDivDelVideo">
              <div className="divDelVideo">
                <ReactPlayer url={video} controls />
              </div>
            </div>
            <Link to="/">
              <button className="BotonVolverHome">{t("texto.Home")}</button>
            </Link>
            <p>{t(ObjetoDelProyecto.description)}</p>
          </div>
          <div className="containerDeHabilidades">
            <h1>{t("texto.HerramientasDetail")}</h1>
            <div className="Divider"></div>
            <section className="SectionHerramientas">
              <ArrayHerramienta Herramientas={Herramientas} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
