import React from "react";
import ToolIcon from "./ToolIcon";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";

export default function Test() {
  return (
    <div>
      {" "}
      <div>
        <ToolIcon icon={<SiHtml5 />} name="HTML" />
        <ToolIcon icon={<SiCss3 />} name="CSS" />
        <ToolIcon icon={<SiJavascript />} name="Javascript" />
        <ToolIcon icon={<SiTypescript />} name="Typescript" />
        <ToolIcon icon={<SiReact />} name="React" />
        <ToolIcon icon={<SiNodedotjs />} name="Node.js" />
        <ToolIcon icon={<SiExpress />} name="Express" />
        <ToolIcon icon={<SiPostgresql />} name="PostgresSQL" />
        <ToolIcon icon={<SiMongodb />} name="Mongodb" />
        <ToolIcon icon={<SiTailwindcss />} name="TailwindCSS" />
        <ToolIcon icon={<SiGit />} name="Git/Github" />
      </div>
    </div>
  );
}
