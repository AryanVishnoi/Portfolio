import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return ( <
        div >
        <
        nav className = "navbar bg-body-navbar-dark bg-dark px-3 mb-10" >
        <
        NavLink className = "navbar-brand text-light"
        to = "/" >
        <
        h2 > Aryan < /h2> <
        /NavLink> <
        ul className = "nav nav-pills" >
        <
        li className = "nav-item" >
        <
        NavLink className = "nav-link text-light"
        to = "/" >
        Home <
        /NavLink> <
        /li> <
        li className = "nav-item" >
        <
        NavLink className = "nav-link text-light"
        to = "/about" >
        About <
        /NavLink> <
        /li> <
        li className = "nav-item" >
        <
        NavLink className = "nav-link text-light"
        to = "/skills" >
        Skills <
        /NavLink> <
        /li> <
        li className = "nav-item" >
        <
        NavLink className = "nav-link text-light"
        to = "/projects" >
        Projects <
        /NavLink> <
        /li> <
        li className = "nav-item" >
        <
        NavLink className = "nav-link text-light"
        to = "/contact" >
        Contact <
        /NavLink> <
        /li> <
        /ul> <
        /nav> <
        /div>
    );
}