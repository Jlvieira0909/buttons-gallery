import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import First from "./components/Buttons/First/First";
import Second from "./components/Buttons/Second/Second";
import Third from "./components/Buttons/Third/Third";
import Fourth from "./components/Buttons/Fourth/Fourth";
import Fifth from "./components/Buttons/Fifth/Fifth";
import Sixth from "./components/Buttons/Sixth/Sixth";
import Seventh from "./components/Buttons/Seventh/Seventh";
import Eighth from "./components/Buttons/Eighth/Eighth";
import Ninth from "./components/Buttons/Ninth/Ninth";

import FigmaIframe from "./components/Iframe/Iframe";

import LanguageDropdown from "./components/LanguageDropdown/LanguageDropdown";

function App() {
  const [language, setLanguage] = useState("en");

  const BUTTONS_TEXT = {
    en: {
      vfr: "Find your size",
      chart: "Size guide",
      english: "English",
      italian: "Italian",
      spanish: "Spanish",
      french: "French",
      portuguese: "Portuguese",
      InfoText:
        "All of these options can be customized to change the font/color/icon of the elements inside them, also feel free to take a look at our",
      InfoButton: "Icons Gallery",
    },
    it: {
      vfr: "Trova la tua taglia",
      chart: "Guida alle taglie",
      english: "Inglese",
      italian: "Italiano",
      spanish: "Spagnolo",
      french: "Francese",
      portuguese: "Portoghese",
      InfoText:
        " Tutte queste opzioni possono essere personalizzate per cambiare il carattere/colore/icona degli elementi al loro interno, sentiti libero di dare un'occhiata anche al nostro",
      InfoButton: "Galleria delle icone",
    },
    es: {
      vfr: "Encuentra tu talla",
      chart: "Guía de tallas",
      english: "Inglés",
      italian: "Italiano",
      spanish: "Español",
      french: "Francés",
      portuguese: "Portugués",
      InfoText:
        "Todas estas opciones se pueden personalizar para cambiar la fuente/color/icono de los elementos dentro de ellas, también siéntete libre de echar un vistazo a nuestra",
      InfoButton: "Galería de iconos",
    },
    fr: {
      vfr: "Trouvez votre taille",
      chart: "Tableau de mesure",
      english: "Anglais",
      italian: "Italien",
      spanish: "Espagnol",
      french: "Français",
      portuguese: "Portugais",
      InfoText:
        "Toutes ces options peuvent être personnalisées pour modifier la police/couleur/icône des éléments qu'elles contiennent, n'hésitez pas à jeter un œil à notre",
      InfoButton: "Galerie d'icônes",
    },
    br: {
      vfr: "Encontre seu Tamanho",
      chart: "Tabela de Medidas",
      english: "Inglês",
      italian: "Italiano",
      spanish: "Espanhol",
      french: "Francês",
      portuguese: "Português",
      InfoText:
        "Todas essas opções podem ser personalizadas para alterar a fonte/cor/ícone dos elementos dentro delas, sinta-se à vontade para dar uma olhada na nossa",
      InfoButton: "Galeria de Ícones",
    },
  };

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  console.log(`
    ██████  ██▓▒███████▒▓█████  ▄▄▄▄    ▄▄▄     ▓██   ██▓
  ▒██    ▒ ▓██▒▒ ▒ ▒ ▄▀░▓█   ▀ ▓█████▄ ▒████▄    ▒██  ██▒
  ░ ▓██▄   ▒██▒░ ▒ ▄▀▒░ ▒███   ▒██▒ ▄██▒██  ▀█▄   ▒██ ██░
    ▒   ██▒░██░  ▄▀▒   ░▒▓█  ▄ ▒██░█▀  ░██▄▄▄▄██  ░ ▐██▓░
  ▒██████▒▒░██░▒███████▒░▒████▒░▓█  ▀█▓ ▓█   ▓██▒ ░ ██▒▓░
  ▒ ▒▓▒ ▒ ░░▓  ░▒▒ ▓░▒░▒░░ ▒░ ░░▒▓███▀▒ ▒▒   ▓▒█░  ██▒▒▒
  ░ ░▒  ░ ░ ▒ ░░░▒ ▒ ░ ▒ ░ ░  ░▒░▒   ░   ▒   ▒▒ ░▓██ ░▒░
  ░  ░  ░   ▒ ░░ ░ ░ ░ ░   ░    ░    ░   ░   ▒   ▒ ▒ ░░
        ░   ░    ░ ░       ░  ░ ░            ░  ░░ ░
               ░                     ░           ░ ░
      `);

  return (
    <div className="AppContainer">
      <div className="LanguageSelector">
        <LanguageDropdown
          currentLanguage={language}
          setLanguage={handleChangeLanguage}
          labels={{
            en: BUTTONS_TEXT[language].english,
            it: BUTTONS_TEXT[language].italian,
            es: BUTTONS_TEXT[language].spanish,
            fr: BUTTONS_TEXT[language].french,
            br: BUTTONS_TEXT[language].portuguese,
          }}
        />
      </div>
      <Header></Header>
      <div className="LogoContainer">
        <img className="SzbLogo" src="/SizebayLogo.svg" alt="SizebayLogo" />
      </div>
      <div className="ButtonsGalleryContainer">
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#1</span>
          </div>
          <div className="ButtonsWrapper">
            <First
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#2</span>
          </div>
          <div className="ButtonsWrapper">
            <Second
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#3</span>
          </div>
          <div className="ButtonsWrapper">
            <Third
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#4</span>
          </div>
          <div className="ButtonsWrapper">
            <Fourth
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#5</span>
          </div>
          <div className="ButtonsWrapper">
            <Fifth
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#6</span>
          </div>
          <div className="ButtonsWrapper">
            <Sixth
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#7</span>
          </div>
          <div className="ButtonsWrapper">
            <Seventh
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#8</span>
          </div>
          <div className="ButtonsWrapper">
            <Eighth
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#9</span>
          </div>
          <div className="ButtonsWrapper">
            <Ninth
              vfr={BUTTONS_TEXT[language].vfr}
              chart={BUTTONS_TEXT[language].chart}
            />
          </div>
        </div>
      </div>
      <div className="StylesDisclaimer">
        <svg
          data-testid="geist-icon"
          height="16"
          stroke-linejoin="round"
          viewBox="0 0 16 16"
          width="16"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.25002 7H7.00002H7.75C8.30229 7 8.75 7.44772 8.75 8V11.5V12.25H7.25V11.5V8.5H7.00002H6.25002V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="DisclaimerText">
          {BUTTONS_TEXT[language].InfoText}
          <FigmaIframe buttonName={BUTTONS_TEXT[language].InfoButton} />
        </span>
      </div>
    </div>
  );
}

export default App;
