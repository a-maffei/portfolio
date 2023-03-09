import ale from "./img/alessandra.jpeg";
import Alelio from "./Alelio";
import { SocialIcon } from "react-social-icons";
import { useState, useEffect } from "react";
import { ALES } from "../ales";
import { TypeAnimation } from "react-type-animation";
import tape from "./img/mushitape.png";

export default function Intro() {
  return (
    <div className="wrapper intro-cont">
      <div className="intro-text-cont">
        <h2>
          Ciao! I'm <span className="pink-text">Alessandra</span>,<br></br>
          <span className="pink-text">Full-Stack Web Developer </span>and{" "}
          <br></br>
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "check checjndfjnv k",
              2000,
              "rrr cdfvvfheck 2",
              2000,
              "check fvf 3",
              2000,
              "kfn deiwndkjdsn",
              2000,
            ]}
            speed={30} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />{" "}
        </h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante.
        </p>
        <p>
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
          amet, ante. Donec eu libero sit amet quam egestas semper.
        </p>
      </div>
      {
        <div
          className="
      box"
        >
          <img src={tape} alt="mushi tape" className="tape"></img>
          <Alelio />
        </div>
      }
    </div>
  );
}
