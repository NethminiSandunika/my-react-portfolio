import React from 'react';
import "./about.css";
import Image from "../../assets/finalme.svg"
import AboutBox from './AboutBox';


const About = () => {
    return(
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" 
                style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }} 
                />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am a dedicated third-year Software Engineering undergraduate with a strong passion for Quality Assurance. With a focus on software testing and reliability, I leverage my attention to detail, problem-solving skills, and teamwork abilities to contribute effectively to high-quality software development. As a volunteer with IEEE, I am actively involved in fostering innovation and professional growth within the tech community, committed to promoting best practices in software quality and information security.</p>

                        <a href="/CV.pdf" download="My_CV.pdf" className="btn">Download CV</a>
                        

                    </div>









    



                </div>
            </div>

           <AboutBox />

        </section>
    );
};

export default About