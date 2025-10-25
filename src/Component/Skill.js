import React from "react";
import "./Skills.css";

import reactjs from "./react.png";
import python from "./python.png";
import cplus from "./c++.png";
import c from "./c.png";
import java from "./java.png";
import mysql from "./mysql.png";
import mongodb from "./mongodb.png";
import nodejs from "./node js.png";
import angular from "./angular.png";
import bootstrap from "./bootstrap.png";
import numpy from "./Numpy.png";
import tensorflow from "./Tensorflow.png";
import git from "./github.png";
import css from "./css.png";
import js from "./js.png";

export default function Skill() {
    return ( <
        div >
        <
        section className = "grid text-center" >
        <
        h1 > Skills < /h1> <
        div id = "skills" >
        <
        div className = "card" >
        <
        img src = { reactjs }
        className = "card-img-top"
        alt = "React JS" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > React JS < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { python }
        className = "card-img-top"
        alt = "Python" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > Python < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { cplus }
        className = "card-img-top"
        alt = "C++" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > C++ < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { c }
        className = "card-img-top"
        alt = "C" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > C < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { java }
        className = "card-img-top"
        alt = "Java" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > Java < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { css }
        className = "card-img-top"
        alt = "CSS" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > CSS < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { nodejs }
        className = "card-img-top"
        alt = "Node JS" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > Node JS < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { js }
        className = "card-img-top"
        alt = "JavaScript" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > JavaScript < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { angular }
        className = "card-img-top"
        alt = "Angular" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > Angular < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { mysql }
        className = "card-img-top"
        alt = "MySQL" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > MySQL < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { mongodb }
        className = "card-img-top"
        alt = "MongoDB" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > MongoDB < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { bootstrap }
        className = "card-img-top"
        alt = "Bootstrap" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > Bootstrap < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { numpy }
        className = "card-img-top"
        alt = "NumPy" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > NumPy < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { tensorflow }
        className = "card-img-top"
        alt = "TensorFlow" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > TensorFlow < /h1> <
        /div> <
        /div>

        <
        div className = "card" >
        <
        img src = { git }
        className = "card-img-top"
        alt = "Git" / >
        <
        div className = "card-body" >
        <
        h1 className = "card-text" > Git < /h1> <
        /div> <
        /div> <
        /div> <
        /section> <
        /div>
    );
}