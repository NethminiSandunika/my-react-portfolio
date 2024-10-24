import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';


const About = () => {
    return(
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am a dedicated third-year Software Engineering undergraduate, passionate about becoming a Quality 
						Assurance Engineer. I am committed to utilizing my attention to detail, problem-solving skills, and teamwork 
						abilities, along with a solid understanding of Agile methodologies, to contribute effectively in software 
						testing and quality assurance.</p>

                        <a href="/CV.pdf" download="My_CV.pdf" className="btn">Download CV</a>
                        

                    </div>









    



                </div>
            </div>

           <AboutBox />

        </section>
    );
};

export default About