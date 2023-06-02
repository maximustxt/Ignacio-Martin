import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import global_español from "./translations/Español/global.json";
import global_ingles from "./translations/Ingles/global.json";

i18next.use(initReactI18next).init({
  lng: "es", //va a ser el idioma en el cual va empezar la aplicacion
  fallbackLng: "es", // Establece el idioma de respaldo si no se encuentra una traducción adecuada
  interpolation: { escapeValue: false },
  resources: {
    es: {
      // esto serian los idiomas , son objetos donde contienen el global
      global: global_español,
    },
    en: {
      // esto serian los idiomas , son objetos donde contienen el global
      global: global_ingles,
    },
  },
}); // inicializamos el i18next

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
