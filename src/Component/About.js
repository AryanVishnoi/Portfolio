import React from "react";
import "./About.css";

export default function About() {
    return ( <
        div >
        <
        section id = "about" >
        <
        h1 > About Me < /h1> <
        p >
        Motivated Computer Science Engineering student with strong proficiency in
        full - stack development and applied machine learning.Experienced in building scalable web and AI - driven applications using modern frameworks and technologies.Passionate about creating impactful, efficient, and user - focused digital solutions. <
        /p>

        <
        h1 > Education < /h1> <
        div className = "education" >
        <
        div className = "left" >
        <
        h5 > Vellore Institute of Technology, Vellore < /h5> <
        p > B.Tech in Computer Science and Engineering(Core) < /p> <
        p > CGPA: 8.02 < /p> <
        p > Expected Graduation: 2026 < /p> <
        /div> <
        div className = "right" >
        <
        h5 > St.Francis Academy, Auraiya(CBSE) < /h5> <
        p > Class XII– 92.6 % < /p> <
        p > Class X– 92.4 % < /p> <
        p > Completed: 2021 < /p> <
        /div> <
        /div>

        <
        div className = "experience" >
        <
        h1 > Experience < /h1> <
        h5 > Web Development Intern | NTPC Dibiyapur— June 2025 < /h5> <
        p >
        Built a full - stack eCommerce platform to promote women entrepreneurs’ products using Node.js, Express, MySQL, and Tailwind CSS. <
        /p> <
        p >
        Integrated Razorpay
        for secure payments and enhanced mobile responsiveness. <
        /p> <
        p >
        Collaborated with a 4 - member team
        for deployment and testing in NTPC’ s internal network. <
        /p>

        <
        h1 > Projects < /h1> <
        h5 > Sign Language Detection System < /h5> <
        p >
        Developed a real - time sign language recognition system combining CNN
        for spatial feature extraction and LSTM
        for sequential motion analysis.Trained on a custom dataset achieving high accuracy in live gesture classification. <
        /p>

        <
        h5 > eCommerce Website– NTPC Project < /h5> <
        p >
        Designed and developed a responsive eCommerce site
        for women entrepreneurs at NTPC Dibiyapur with payment gateway integration and optimized UI / UX using Tailwind CSS. <
        /p>

        <
        h5 > Portfolio Website < /h5> <
        p >
        Created a personal portfolio website using React.js and Node.js to showcase full - stack and ML projects, featuring backend data handling and dynamic rendering. <
        /p>

        <
        h1 > Certifications < /h1> <
        p > Oracle Cloud Infrastructure 2025 Certified Professional– Generative AI < /p>

        <
        /div> <
        /section> <
        /div>
    );
}