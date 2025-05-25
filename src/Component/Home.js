import React, { useEffect, useRef } from "react";
import dev from "./pngwing.png";
import Typed from "typed.js"; // Import Typed.js

import "./Home.css"; // Import your CSS file

export default function Home() {
  const elementRef = useRef(null); // Create a ref for the typed element
  useEffect(() => {
    const options = {
      strings: ["Web Developer.", "React Enthusiast.", "Tech Lover."], // Add your desired strings
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(elementRef.current, options); // Initialize Typed.js
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section id="home">
        <div className="left">
          <h1>
            {" "}
            <div>
              {" "}
              <span> Hi, My name is </span>{" "}
              <span className="purple"> Aryan Vishnoi </span>{" "}
            </div>{" "}
            <div> and I am a passionate </div>{" "}
            <span className="purple" ref={elementRef}>
              {" "}
            </span>{" "}
          </h1>{" "}
        </div>{" "}
        <div className="right">
          <img src={dev} alt="Developer" />
        </div>{" "}
      </section>{" "}
      <div className="btn">
        {" "}
        <button
          type="button"
          class="btn btn-danger"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1aYIQWYWWIt-MalpNt320ZwlE5kRBJhPX/view?usp=sharing",
              "_blank"
            )
          }
        >
          My Resume{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}
