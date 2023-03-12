import SingleProject from "./SingleProject";
import test from "./img/test-project.png";
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

export default function Projects() {
  return (
    <div className="section-cont">
      <h3 className="section-cat-title">Project</h3>
      <h2 className="section-title">Web Apps I Enjoyed Building</h2>
      <SingleProject
        img={test}
        name="Ask A Local"
        description="Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante."
        tools={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        layout="reverse"
      />
    </div>
  );
}
