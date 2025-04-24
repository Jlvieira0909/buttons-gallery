import "./Eighth.css";

function Eighth(props) {
  return (
    <div class="vfr__container" id="eighth-szb-container">
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

export default Eighth;
