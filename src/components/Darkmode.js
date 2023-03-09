import { setTheme } from "../hooks/setTheme";
import { useState, useEffect } from "react";

const Darkmode = ({ switchTheme }) => {
  const [togClass, setTogClass] = useState("light");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div id="dark-toggle">
      <label className="dark-switch">
        <input id="dark" type="checkbox" />
        <span onClick={() => handleOnClick()} className="dark-slider"></span>
      </label>
    </div>
  );
};

export default Darkmode;
