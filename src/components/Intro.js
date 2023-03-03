import ale from "./img/alessandra.jpeg";
import { FaGithub } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import React from "react";

export default function Intro() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h2>Ciao, I'm Alessandra.</h2>
        <p>
          {" "}
          I'm a Full-Stack Web Developer living in Berlin, Germany. I (happily)
          spend my days between git branches, React components, HTTP requests,
          and CSS classes. Prior to this, my work has been all about
          marketing—first as an individual contributor, then leading teams for
          global tech companies.
        </p>
        <div>
          <SocialIcon
            network="linkedin"
            style={{ height: 30, width: 30 }}
            url="https://www.linkedin.com/in/alessandramaffei/"
            bgColor="blue"
            target="_blank"
          />

          <SocialIcon
            network="github"
            style={{ height: 30, width: 30 }}
            url="https://github.com/a-maffei"
            bgColor="blue"
            target="_blank"
          />
        </div>
      </div>
      <img src={ale} style={{ width: "200px" }}></img>
    </div>
  );
}
