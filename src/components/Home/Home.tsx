import NavBar from "../NavBar/NavBar";
import imagenHome from "../../image/d459d6c5-99bb-4538-8916-0c7bd81aea93.jpeg";
//-------------------icono Linkedin:
import imagenLinkedin from "../../image/vinculado-en-logo-de-dos-letras (2).png";
import imagenGitHub from "../../image/github (2).png";
import imagenHome2 from "../../image/Perfil.jpg";
import styles from "./Home.module.css";
import CardProyect from "../CardProyect/CardProyect";
import data from "../../data.config.json";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react"; // debo importar esate to
import swal from "sweetalert";

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
        title: "Alert",
        text: "Debes completar todos los campos",
        icon: "warning",
      });
    } else {
      const form = event.target as HTMLFormElement; // de alguna manera se pregunta si es de tipo element de HTML.
      console.log(event);
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
              text: "Mensaje enviado con exito",
              icon: "success",
            });
            setStateForm({ name: "", email: "", message: "" });
            console.log(
              "¡El correo electrónico se envió correctamente!",
              response.status,
              response.text
            );
          },
          (error) => {
            console.error(
              "Hubo un error al enviar el correo electrónico:",
              error
            );
          }
        );
    }
  };

  return (
    <>
      <NavBar />
      <h1 className={styles.h1}>
        <section id="Perfil">
          <div className={styles.ContainerPresentacion}>
            <section className={styles.Container} id="Perfil">
              <div className={styles.main}>
                <h1>
                  Soy <span className={styles.spanName}> Ignacio </span>
                  Martin
                </h1>
                <p className={styles.p}>
                  Soy Desarrollador Full Stack Develop , me apasiona el
                  desarrollo web y la tecnologia , recien empiezo en este mundo
                  del desarrollo, hace mas 6 meses estoy codeando y
                  aprendiendo... Tengo muchas ganas y energia de seguir
                  aprendiendo y ganar mas experiencia , tengo mucho por lo que
                  aportar y aprender.. Estoy dispuesto a cualquier desafio y
                  objetivo a cumplicar en cualquier momento.
                </p>
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
                </div>
                <a href="/ruta-al-cv" download className={styles.botonCv}>
                  Descargar CV
                </a>
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
              <h2>Habilidades</h2>
              <div className={styles.Divider}></div>
              <div className={styles.ContainerDeHabilidad}>
                <p className={styles.pHabilidades}>
                  Tengo habilidades en JavaScript , TypeScript(basico) React ,
                  Redux , Css , Html , express , PosgresSQL , Sequalize...
                </p>
                <div className={styles.DivimagenHabilidad}>
                  <img className={styles.imagenHabilidad} src={React} />
                  <img className={styles.imagenHabilidad} src={Redux} />
                  <img className={styles.imagenHabilidad} src={Sequelize} />
                  <img className={styles.imagenHabilidad} src={PosgresSQL} />
                  <img className={styles.imagenHabilidad} src={Javascript} />
                  <img className={styles.imagenHabilidad} src={Css} />
                  <img className={styles.imagenHabilidad} src={Typescript} />
                  <img className={styles.imagenHabilidad} src={Html} />
                </div>
                <p className={styles.pHabilidades}>
                  Me gusta trabajar en equipo , compartir y ayudar a mis
                  compañeros. Tengo mucha voluntad , energia y ganas de seguir
                  creciendo y aprendiendo, soy dedicado y diciplinado , me gusta
                  dar mas de lo que espero de mi mismo. Estoy dispuesto a
                  enfrentar cualquier desafio.. y sobre todo me encanta
                  trabajar.
                </p>
              </div>
              <br />
            </div>
          </div>
        </section>
        {/* Section De Proyectos*/}
        <section className={styles.sectionPorfolio} id="Proyectos">
          <div className={styles.containerPorfolio}>
            <h2>Mis Proyectos</h2>
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
            <h2>Contacto</h2>
            <div className={styles.Divider}></div>
            <form onSubmit={funcionSubmitForm} className={styles.Form}>
              <input
                className="inputForm"
                type="text"
                placeholder="NOMBRE"
                onChange={onchange}
                name="name"
                value={stateForm.name}
              />
              <input
                className="inputForm"
                type="email"
                placeholder="EMAIL"
                onChange={onchange}
                name="email"
                value={stateForm.email}
              />
              <textarea
                placeholder="TU MENSAJE AQUI"
                value={stateForm.message}
                onChange={onchange}
                name="message"
              ></textarea>
              <button type="submit" className={styles.submit}>
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </section>
      </h1>
    </>
  );
};

export default Home;
