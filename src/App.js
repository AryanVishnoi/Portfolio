import "./App.css";
import React from "react";

import About from "./Component/About";
import Home from "./Component/Home";
import Skill from "./Component/Skill";
import Project from "./Component/Project";
import Contact from "./Component/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    // Set dark mode background and text once
    React.useEffect(() => {
        document.body.style.backgroundColor = "#131231";
        document.body.style.color = "white";
    }, []);

    return ( <
        div >
        <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Home key = "home" / > }
        />  <
        Route exact path = "/about"
        element = { < About key = "about" / > }
        />  <
        Route exact path = "/skills"
        element = { < Skill key = "skill" / > }
        />  <
        Route exact path = "/projects"
        element = { < Project key = "project" / > }
        />  <
        Route exact path = "/contact"
        element = { < Contact key = "contact" / > }
        />  <
        /Routes> <
        /Router> <
        /div>
    );
}

export default App;