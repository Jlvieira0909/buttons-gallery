import "./Seventh.css";

function Seventh(props) {
  return (
    <div class="vfr__container" id="seventh-szb-container">
      <div class="szb-vfr-btns">
        <button id="szb-vfr-button" class="vfr__button--clean">
          {props.vfr}
        </button>
        <button id="szb-chart-button" class="vfr__button--clean">
          {props.chart}
        </button>
      </div>
    </div>
  );
}

export default Seventh;
