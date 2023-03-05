import { Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Toolkit from "./components/Toolkit";
import Story from "./components/Story";
import { Contact } from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="App" data-theme={theme}>
      <header>
        {" "}
        <Navbar switchTheme={switchTheme} />
      </header>
      <main>
        <Intro />
        <Toolkit />
        <Story />
        <Contact />
      </main>
    </div>
  );
}

export default App;
