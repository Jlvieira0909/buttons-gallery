import "./App.css";
import Header from "./components/Header/Header";
import First from "./components/Buttons/First/First";

function App() {
  return (
    <div className="AppContainer">
      <Header></Header>
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
            <span className="ButtonCardNumber">#1</span>
          </div>
          <div className="ButtonsWrapper">
            <First />
          </div>
        </div>
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
            <span className="ButtonCardNumber">#1</span>
          </div>
          <div className="ButtonsWrapper">
            <First />
          </div>
        </div>
        <div className="ButtonCard" id="first-button">
          <div className="ButtonCardHeader">
            <span className="ButtonCardNumber">#1</span>
          </div>
          <div className="ButtonsWrapper">
            <First />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
