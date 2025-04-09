import "./App.css";
import Header from "./components/Header/Header";
import First from "./components/Buttons/First/First";
import Second from "./components/Buttons/Second/Second";
import Third from "./components/Buttons/Third/Third";
import Fourth from "./components/Buttons/Fourth/Fourth";
import Fifth from "./components/Buttons/Fifth/Fifth";
import Sixth from "./components/Buttons/Sixth/Sixth";
import Seventh from "./components/Buttons/Seventh/Seventh";

function App() {
  return (
    <div className="AppContainer">
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
            <First />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#2</span>
          </div>
          <div className="ButtonsWrapper">
            <Second />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#3</span>
          </div>
          <div className="ButtonsWrapper">
            <Third />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#4</span>
          </div>
          <div className="ButtonsWrapper">
            <Fourth />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#5</span>
          </div>
          <div className="ButtonsWrapper">
            <Fifth />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#6</span>
          </div>
          <div className="ButtonsWrapper">
            <Sixth />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#7</span>
          </div>
          <div className="ButtonsWrapper">
            <Seventh />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#8</span>
          </div>
          <div className="ButtonsWrapper">
            <Fifth />
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
          All of these options can be customized to change the font/color/icon
          of the elements inside them
        </span>
      </div>
    </div>
  );
}

export default App;
