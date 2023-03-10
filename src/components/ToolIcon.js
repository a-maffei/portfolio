import React from "react";
import { IconContext } from "react-icons";

export default function ToolIcon({ icon, name }) {
  return (
    <div className="tool-cont">
      <IconContext.Provider value={{ size: "3em" }}>
        <div className="tool-icon">{icon}</div>
      </IconContext.Provider>
      <h3 className="tool-name">{name}</h3>
    </div>
  );
}
