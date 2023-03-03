import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Darkmode from "./Darkmode";

const Navbar = ({ switchTheme }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  const menuHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="nav-main-cont">
      {/*  <Darkmode switchTheme={switchTheme} /> */}
      <div
        className={
          isClicked ? "nav-menu-cont nav-menu-cont-visible" : "nav-menu-cont"
        }
      >
        <NavHashLink
          to="/#fakeittillyoumakeit"
          className={
            isActive("/#fakeittillyoumakeit") ? "active-nav-links" : "nav-links"
          }
        >
          Toolkit
        </NavHashLink>
        <NavHashLink
          to="/#fakeittillyoumakeit"
          className={
            isActive("/#fakeittillyoumakeit") ? "active-nav-links" : "nav-links"
          }
        >
          About
        </NavHashLink>
        <NavHashLink
          to="/#fakeittillyoumakeit"
          className={
            isActive("/#fakeittillyoumakeit") ? "active-nav-links" : "nav-links"
          }
        >
          Projects
        </NavHashLink>
        <NavHashLink
          to="/#fakeittillyoumakeit"
          className={
            isActive("/#fakeittillyoumakeit") ? "active-nav-links" : "nav-links"
          }
        >
          Contact
        </NavHashLink>
      </div>
      <div className="nav-icon-cont">
        {" "}
        {isClicked ? (
          <button className="nav-icon" onClick={menuHandler}>
            {" "}
            <FaTimes />
          </button>
        ) : (
          <button className="nav-icon" onClick={menuHandler}>
            {" "}
            <FaBars />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
