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
                        <p className="about__description">I am a dedicated third-year Software Engineering undergraduate passionate about building innovative, user-centric software solutions. With hands-on experience in full-stack development and strong problem-solving abilities, I bring adaptability and a collaborative approach to every project. My goal is to develop scalable applications that enhance user experience and deliver real value. As an active IEEE volunteer, I am committed to fostering innovation and promoting best practices in software development and information security.</p>

                        <a href="/CV D.M Nethmini Sandunika.pdf" download="CV_Nethmini_Sandunika.pdf" className="btn">Download CV</a>
                        

                    </div>

                </div>
            </div>

           <AboutBox />

        </section>
    );
};

export default About