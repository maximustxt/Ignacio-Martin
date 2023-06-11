import NavBar from "../NavBar/NavBar";
import imagenHome from "../../image/d459d6c5-99bb-4538-8916-0c7bd81aea93.jpeg";
//-------------------icono Linkedin:
import imagenLinkedin from "../../image/vinculado-en-logo-de-dos-letras (2).png";
import imagenGitHub from "../../image/github (2).png";
import imagenGitHubBlack from "../../image/github (3).png";
import imagenHome2 from "../../image/Perfil.jpg";
import styles from "./Home.module.css";
import CardProyect from "../CardProyect/CardProyect";
import data from "../../data.config.json";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState, useEffect } from "react"; // debo importar esate to
import { useTranslation } from "react-i18next";
import swal from "sweetalert";

// @ts-ignore
import Cv from "../Home/MiCv.pdf";

//@ts-ignore : esto lo que hace es ignorar el error que se encuentra debajo de el , hay que usarlo con mucha precaucion... ya que solo se usa para errorer peqeños y de mala copilacion. Esto va siempre comentado.

import {
  React,
  Redux,
  PosgresSQL,
  Css,
  Sequelize,
  Javascript,
  Html,
  Typescript,
} from "../index";

const Home = () => {
  //*-------------------------Idiomas:
  const [t, i18n] = useTranslation("global");
  //*--------------------------------*//

  const [stateForm, setStateForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  interface Proyecto {
    id: number;
    name: string;
    image: string;
    description: string;
    Herramientas: string[];
  }
  const onchange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const property = event.target.name;
    const value = event.target.value;

    setStateForm({ ...stateForm, [property]: value });
  };

  const funcionSubmitForm = (event: FormEvent<HTMLFormElement>): void => {
    if (
      !stateForm.email.length ||
      !stateForm.message.length ||
      !stateForm.name.length
    ) {
      event.preventDefault();
      swal({
        title: t("texto.Alerta").toString(),
        text: t("texto.Error").toString(),
        icon: "warning",
      });
    } else {
      const form = event.target as HTMLFormElement; // de alguna manera se pregunta si es de tipo element de HTML.
      event.preventDefault();
      emailjs
        .sendForm(
          "service_j1bytoo",
          "template_p21scrn",
          form,
          "h1D7dx-SqocK5Mp_p"
        )
        .then(
          (response) => {
            swal({
              text: t("texto.success").toString(),
              icon: "success",
            });
            setStateForm({ name: "", email: "", message: "" });
          },
          (error) => {}
        );
    }
  };

  const nombre = "Ignacio";

  return (
    <>
      <NavBar />
      <h1 className={styles.h1}>
        <section id="Perfil">
          <div className={styles.ContainerPresentacion}>
            <section className={styles.Container} id="Perfil">
              <div className={styles.main}>
                <h1>
                  {t("texto.Titulo")}
                  {"   "}
                  {"   "}
                  {"   "}
                  {"   "}
                  <span className={styles.spanName}>{nombre}</span> Martin
                </h1>
                <p className={styles.p}>{t("texto.soyDesarrollador")}</p>
                <div className={styles.containerContact}>
                  <a
                    href="https://www.linkedin.com/in/ignacio-martin-339542263/"
                    target="_blank"
                    className="aLink"
                  >
                    <img className="imagenLink" src={imagenLinkedin} />
                  </a>
                  <a
                    href="https://github.com/maximustxt"
                    target="_blank"
                    className="aLink"
                  >
                    <img className="imagenLink" src={imagenGitHub} />
                  </a>
                  <div>
                    <a href={Cv} download="Mi-Cv">
                      <button>{t("texto.Boton")}</button>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <img className={styles.imagen} src={imagenHome} />
              </div>
            </section>
          </div>
        </section>
        {/* Section De about me*/}
        <section className={styles.section} id="Habilidades">
          <div className={styles.about}>
            <img className={styles.img} src={imagenHome2} />
            <div className={styles.Info}>
              <h2>{t("texto.TituloHabilidad")}</h2>
              <div className={styles.Divider}></div>
              <div className={styles.ContainerDeHabilidad}>
                <p className={styles.pHabilidades}> {t("texto.Habilidades")}</p>
                <div className={styles.DivimagenHabilidad}>
                  <img className={styles.imagenHabilidad} src={React} />
                  <img className={styles.imagenHabilidad} src={Redux} />
                  <img className={styles.imagenHabilidad} src={Sequelize} />
                  <img className={styles.imagenHabilidad} src={PosgresSQL} />
                  <img className={styles.imagenHabilidad} src={Javascript} />
                  <img className={styles.imagenHabilidad} src={Css} />
                  <img className={styles.imagenHabilidad} src={Typescript} />
                  <img className={styles.imagenHabilidad} src={Html} />
                  <img
                    className={styles.imagenHabilidad}
                    src={imagenGitHubBlack}
                  />
                  <img
                    className={styles.imagenHabilidad}
                    src="https://huaripaz.github.io/assets/img/skills/git.png"
                  />
                </div>
                <p className={styles.pHabilidades}>
                  {t("texto.HabilidadesBlandas")}
                </p>
              </div>
              <br />
            </div>
          </div>
        </section>
        {/* Section De Proyectos*/}
        <section className={styles.sectionPorfolio} id="Proyectos">
          <div className={styles.containerPorfolio}>
            <h2>{t("texto.Proyectos")}</h2>
            <div className={styles.Divider}></div>
            <div className={styles.divCards}>
              {data.Proyectos.map((data: Proyecto) => (
                <CardProyect
                  id={data.id}
                  name={data.name}
                  image={data.image}
                  description={data.description}
                  Herramientas={data.Herramientas}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Section De Contacto*/}
        <section className={styles.sectionContact} id="Contacto">
          <div className={styles.containerContact}>
            <h2>{t("texto.Contacto")}</h2>
            <div className={styles.Divider}></div>
            <form onSubmit={funcionSubmitForm} className={styles.Form}>
              <input
                className="inputForm"
                type="text"
                placeholder={`${t("texto.NombreForm")}`}
                onChange={onchange}
                name="name"
                value={stateForm.name}
              />
              <input
                className="inputForm"
                type="email"
                placeholder="Email"
                onChange={onchange}
                name="email"
                value={stateForm.email}
              />
              <textarea
                placeholder={`${t("texto.MensajeForm")}`}
                value={stateForm.message}
                onChange={onchange}
                name="message"
              ></textarea>
              <button type="submit" className={styles.submit}>
                {t("texto.BotonEnviarMensaje")}
              </button>
            </form>
          </div>
        </section>
      </h1>
    </>
  );
};

export default Home;
