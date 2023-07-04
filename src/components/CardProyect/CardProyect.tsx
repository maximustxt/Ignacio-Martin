import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CardProyect.css";

interface Proyecto {
  id: number;
  name: string;
  image: string;
  GitHub: string;
}

const CardProyect = ({ id, name, image, GitHub }: Proyecto) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");

  const FuncionDetailBoton = (id: number) => {
    navigate(`/Detail/${id}`);
  };

  //----------------Cuando el componente se monte :

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="card"
    >
      <div className="card-info">
        <img className="img" src={image} />
        <a href={GitHub} target="_blank">
          GitHub
        </a>
        <p className="title">{t(name)}</p>
        <button onClick={() => FuncionDetailBoton(id)} className="cta">
          <span>{t("texto.BotonVerMas")}</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardProyect;
