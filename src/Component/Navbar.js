import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar(props) {
  return (
    <div>
      <nav
        id="navbar-example2"
        className={`navbar bg-body-${
          props.mode === "dark"
            ? "navbar-dark bg-dark"
            : "navbar-light bg-light"
        }px-3 mb-10`}
      >
        <NavLink
          className={`navbar-brand text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          to="/"
        >
          <h2> Aryan </h2>{" "}
        </NavLink>{" "}
        <ul className="nav nav-pills">
          <li>
            {" "}
            <div
              className={`nav-item form-check form-switch text-${
                props.mode === "light" ? "black" : "white"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode_blue}
              />{" "}
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "black" : "white"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                Change mode{" "}
              </label>{" "}
            </div>{" "}
          </li>{" "}
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            <NavLink className="nav-link" to="/skills">
              Skills{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">
              Projects{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact{" "}
            </NavLink>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  );
}
