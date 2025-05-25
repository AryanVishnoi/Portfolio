import React from "react";
import menupage from "./menupage.png";
import portfolio from "./protfolio.png";
import newsappimage from "./newsapp.png"; // Importing the image from the same folder
import "./Project.css";
import github from "./github.png";

export default function Project() {
  return (
    <div>
      <h1> PROJECT </h1>{" "}
      <p>
        {" "}
        Following projects showcases my skills and experience through real -
        world examples of my work.Each project is briefly described with links
        to code repositories and live demos in it.It reflects my ability to
        solve complex problems, work with different technologies, and manage
        projects effectively.{" "}
      </p>{" "}
      <div className="projectcards">
        <div className="card_group">
          <div className="card ">
            <img src={menupage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Restaurant Paradise </h5>{" "}
              <p className="card-text">
                {" "}
                Developed a dynamic and user - friendly front - end web
                application using React.js, enabling customers to seamlessly
                place orders, book tables, and enjoy home delivery.The website
                boasts an attractive design and intuitive navigation, enhancing
                the overall dining experience.{" "}
              </p>{" "}
            </div>{" "}
            <div className="card-footer">
              <small className="text-body-secondary">
                {" "}
                <img src={github} alt="" />{" "}
              </small>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card ">
            <img src={newsappimage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> KangarooKnews </h5>{" "}
              <p className="card-text">
                {" "}
                Created an engaging news platform with React, where users can
                access the latest headlines and detailed articles.Focused on a
                visually appealing layout and optimized for search engines(SEO)
                using a news API, ensuring users receive timely and relevant
                information at their fingertip{" "}
              </p>{" "}
            </div>{" "}
            <div className="card-footer">
              <small className="text-body-secondary">
                {" "}
                <img src={github} alt="" />{" "}
              </small>{" "}
            </div>{" "}
          </div>{" "}
          <div className="card ">
            <img src={portfolio} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> My Portfolio </h5>{" "}
              <p className="card-text">
                {" "}
                A portfolio website is a personal online platform where
                individuals showcase their work, skills, and accomplishments to
                potential employers, clients, or collaborators.It typically
                includes sections such as an "About Me" page, a showcase of
                projects, a list of skills, a resume or CV, and contact
                information.{" "}
              </p>{" "}
            </div>{" "}
            <div className="card-footer">
              <small className="text-body-secondary">
                {" "}
                <img src={github} alt="" />{" "}
              </small>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
