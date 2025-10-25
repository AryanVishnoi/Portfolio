import React, { useEffect, useRef } from "react";
import dev from "./pngwing.png";
import Typed from "typed.js";


import "./Home.css";

export default function Home() {
    const elementRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Web Developer.", "React Enthusiast.", "Tech Lover."],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(elementRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return ( <
        div > { /* Hero Section */ } <
        section id = "home" >
        <
        div className = "left" >
        <
        h1 >
        <
        div >
        <
        span > Hi, My name is < /span> <
        span className = "purple" > Aryan Vishnoi < /span> <
        /div> <
        div > and I am a passionate < /div> <
        span className = "purple"
        ref = { elementRef } > < /span> <
        /h1> <
        /div> <
        div className = "right" >
        <
        img src = { dev }
        alt = "Developer" / >
        <
        /div> <
        /section>

        { /* Resume Button */ } <
        div className = "btn" >
        <
        button type = "button"
        className = "btn btn-danger"
        onClick = {
            () =>
            window.open(
                "https://drive.google.com/file/d/1aGLW2gjrtTye9aSpDVp9zdOHviAJRBo5/view?usp=sharing",
                "_blank"
            )
        } >
        My Resume <
        /button> <
        /div>

        { /* Short Introduction */ } <
        section className = "intro" >
        <
        p >
        I am a software engineer specializing in building responsive web applications and integrating machine learning solutions.I enjoy solving complex problems and turning ideas into efficient and user - friendly software. <
        /p> <
        /section>




        { /* Call to Action */ } <
        section className = "cta" >
        <
        h3 > Looking
        for a Software Engineer ? < /h3> <
        button className = "btn btn-success"
        onClick = {
            () => (window.location.href = "/contact") } >
        Contact Me <
        /button> <
        /section> <
        /div>
    );
}