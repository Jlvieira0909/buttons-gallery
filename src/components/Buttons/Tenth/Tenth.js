import "./Tenth.css";

function Tenth(props) {
  return (
    <div className="Tenth-vfr__container" id="szb-container">
      <div className="szb-vfr-btns">
        <button id="szb-vfr-button" className="vfr__button--clean">
          {props.vfr}
        </button>
        <button id="szb-chart-button" className="vfr__button--clean">
          {props.chart}
        </button>
        <div className="tooltipSizebay" style={{ display: "none" }}>
          {props.toolTipText01}
          <br />
          {props.toolTipText02}
          <div className="toolTipArrow"></div>
        </div>
      </div>
    </div>
  );
}

export default Tenth;
