import { Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Toolkit from "./components/Toolkit";
import Story from "./components/Story";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { keepTheme } from "./hooks/setTheme";

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Intro />
        <Toolkit />
        <Projects />
        <Story />
        <Contact />
      </main>
    </div>
  );
}

export default App;
