import React from "react";
import signlanguage from "./SignLanguage.png";
import portfolio from "./protfolio.png";
import ecommerce from "./eCommerce.png";
import "./Project.css";
import github from "./github.png";

export default function Project() {
    return ( <
        div >
        <
        h1 > PROJECT < /h1> <
        p >
        Following projects showcase my skills and experience through real - world examples of my work.Each project is briefly described with links to code repositories and live demos.It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. <
        /p>

        <
        div className = "projectcards" >
        <
        div className = "card_group" > { /* Sign Language Detection */ } <
        div className = "card" >
        <
        img src = { signlanguage }
        className = "card-img-top"
        alt = "Sign Language" /
        >
        <
        div className = "card-body" >
        <
        h5 className = "card-title text-light" > 🖐️Sign Language Detection System <
        /h5> <
        div className = "card-text" >
        <
        p > •Developed a real - time sign language recognition system combining CNN
        for spatial feature extraction and LSTM
        for sequential motion analysis. <
        /p> <
        p > •Trained on a custom dataset achieving high accuracy in live gesture classification. <
        /p> <
        p > •Designed
        for accessibility and inclusivity in communication applications. <
        /p> <
        /div> <
        /div> <
        div className = "card-footer" >
        <
        a href = "https://github.com/AryanVishnoi/Sign-language-detection-using-LSTM-CNN"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = { github }
        alt = "GitHub Link"
        className = "github-icon" / >
        <
        /a> <
        /div> <
        /div>

        { /* eCommerce Website */ } <
        div className = "card" >
        <
        img src = { ecommerce }
        className = "card-img-top"
        alt = "eCommerce" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title text-light" > 🛒eCommerce Website - NTPC Project <
        /h5> <
        div className = "card-text" >
        <
        p > •Designed and developed a responsive eCommerce site
        for women entrepreneurs at NTPC Dibiyapur. <
        /p> <
        p > •Focused on clean UI / UX, performance optimization, and payment integration. <
        /p> <
        /div> <
        /div> <
        div className = "card-footer" >
        <
        a href = "https://github.com/AryanVishnoi/ntpc-ecommerce"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = { github }
        alt = "GitHub Link"
        className = "github-icon" / >
        <
        /a> <
        /div> <
        /div>

        { /* Portfolio Website */ } <
        div className = "card" >
        <
        img src = { portfolio }
        className = "card-img-top"
        alt = "Portfolio" / >
        <
        div className = "card-body" >
        <
        h5 className = "card-title text-light" > 💼Portfolio Website < /h5> <
        div className = "card-text" >
        <
        p > •Created a personal portfolio showcasing full - stack and ML projects. <
        /p> <
        p > •Implemented backend data handling, routing, and dynamic rendering. <
        /p> <
        /div> <
        /div> <
        div className = "card-footer" >
        <
        a href = "https://github.com/AryanVishnoi/Portfolio"
        target = "_blank"
        rel = "noopener noreferrer" >
        <
        img src = { github }
        alt = "GitHub Link"
        className = "github-icon" / >
        <
        /a> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}