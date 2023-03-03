import "./Darkmode.css";

const Darkmode = ({ switchTheme }) => {
  return (
    <div id="dark-toggle">
      <label className="dark-switch">
        <input id="dark" type="checkbox" />
        <span onClick={() => switchTheme()} className="dark-slider"></span>
      </label>
    </div>
  );
};

export default Darkmode;
