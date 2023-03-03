import React from "react";
import { IconContext } from "react-icons";

export default function ToolIcon({ icon, name }) {
  return (
    <div>
      <IconContext.Provider value={{ size: "3em" }}>
        <div>{icon}</div>
      </IconContext.Provider>
      <h3>{name}</h3>
    </div>
  );
}
