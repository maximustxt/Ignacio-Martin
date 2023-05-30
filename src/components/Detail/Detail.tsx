import { useParams } from "react-router-dom";
import "./Detail.css";
import ArrayHerramienta from "../Detail/Herramientas";
import data from "../../data.config.json";
import ReactPlayer from "react-player";

const Detail = () => {
  interface Proyecto {
    id: number;
    name: string;
    image: string;
    description: string;
    Herramientas: string[];
    video: string;
  }

  const { id } = useParams(); //* typescript me va a tirar error en esto porque el id de useParams es de tipo string y el id de el objeto del array es de tipo string.

  const ObjetoDelProyecto = data.Proyectos.find((Pro: Proyecto) => {
    return Pro.id === Number(id);
  });

  console.log(ObjetoDelProyecto);

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
              <h1 className="title2">{name}</h1>
            </div>
            <div className="divDelVideo">
              <ReactPlayer url={video} controls />
            </div>
            <p>{description}</p>
          </div>
          <div className="containerDeHabilidades">
            <h1>Herramientas utilizadas</h1>
            <div className="Divider"></div>
            <section className="SectionHerramientas">
              {/* <div className="DivHerramientasPadre">
                <div className="DivHerramientas"> */}
              <ArrayHerramienta Herramientas={Herramientas} />
              {/* </div>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
