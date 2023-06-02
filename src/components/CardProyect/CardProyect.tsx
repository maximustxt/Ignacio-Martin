import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CardProyect.css";

interface Proyecto {
  id: number;
  name: string;
  image: string;
  description: string;
  Herramientas: string[];
}

const CardProyect = ({
  id,
  name,
  image,
  description,
  Herramientas,
}: Proyecto) => {
  const navigate = useNavigate();

  const FuncionDetailBoton = (id: number) => {
    navigate(`/Detail/${id}`);
  };

  const [t, i18n] = useTranslation("global");

  return (
    <div className="card">
      <div className="card-info">
        <img className="img" src={image} />
        <p className="title">{t(name)}</p>

        {/* <button onClick={() => FuncionDetailBoton(id)} className="btn">
          Ver Mas
        </button> */}
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
