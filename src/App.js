import "./App.css";
import React, { useState } from "react";

import About from "./Component/About";
import Home from "./Component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

function App() {
  const [mode, setmode] = useState("dark");
  const togglemode_b = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#131231";
      document.body.style.color = "white";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      <Router>
        <Navbar mode={mode} togglemode_blue={togglemode_b} />{" "}
        <Routes>
          {" "}
          {/* key is necessery because key is required for re mount of camponent */}{" "}
          <Route
            exact
            path="/"
            element={<Home key="home" />}
            mode={mode}
            togglemode_blue={togglemode_b}
          />{" "}
          <Route
            exact
            path="/about"
            element={<About key="about" />}
            mode={mode}
            togglemode_blue={togglemode_b}
          />{" "}
          <Route
            exact
            path="/skills"
            element={<Skill key="skill" />}
            mode={mode}
            togglemode_blue={togglemode_b}
          />{" "}
          <Route
            exact
            path="/projects"
            element={
              <Project
                key="project"
                mode={mode}
                togglemode_blue={togglemode_b}
              />
            }
          />{" "}
          <Route
            exact
            path="/contact"
            element={<Contact key="contact" />}
            mode={mode}
            togglemode_blue={togglemode_b}
          />{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
