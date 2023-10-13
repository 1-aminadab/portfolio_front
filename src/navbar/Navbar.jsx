import React, { useEffect, useState, useLayoutEffect } from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { switchDardMode } from "../features/ld_mode/mode";
/// Toggle package
import DayNightToggle from "react-day-and-night-toggle";
// ICONS
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import MenuIcon from "@mui/icons-material/Menu";
const navOptions = ["home", "projects", "about", "skill", "contact"];

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [clickedOption, setClickedOption] = useState(0);
  const [openNav, setOpenNav] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    handleDarkmode();
    dispatch(switchDardMode(darkMode))
  }, [darkMode]);
  

  const clickHandler = (id) => {
    setClickedOption(id);
  };
  const handleDarkmode = () => {
    document.documentElement.style.setProperty(
      "--dark-mode",
      `${darkMode ? "#222" : "rgb(220,220,220)"}`
    );
    document.documentElement.style.setProperty(
      "--light-mode",
      `${darkMode ? "#ddd" : "rgb(51, 51, 51)"}`
    );
  };

  //  ////////////

  //////////
  return (
    <div className="nav-bar nav-blur">
      <div className="nav-menu" onClick={() => setOpenNav(!openNav)}>
        <MenuIcon fontSize="large" />
      </div>
      <div
        className="nav-options"
        style={{ animationName: `${openNav && "nav-animation"}` }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {navOptions.map((option, id) => {
            return (
              <li
                onClick={() => {
                  clickHandler(id);
                  setOpenNav(false);
                }}
                key={id}
                className={`${clickedOption === id && "active"}`}
              >
                <a href={`#${option}`}>{option.toUpperCase()}</a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="https://mail.google.com/mail/u/developer.amanuel@gmail.com?">
              <EmailIcon />
            </a>{" "}
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amanuel-tadesse-870416232">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://web.telegram.org">
              <TelegramIcon />
            </a>
          </li>
          <li>
            <a href="https://github.com/1-aminadab">
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="day-night-toggle">
        <DayNightToggle
          onChange={() => setDarkMode(!darkMode)}
          checked={darkMode}
        />
      </div>
    </div>
  );
}
const styles = {
  color:'white'
}
export default Navbar;
