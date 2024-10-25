import React from 'react';


const AboutBox = () => {
    return(
        <div className="about__boxes grid">
           
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className ="about__title">5+</h3>
                    <span className="about__subtitle">Projects completed</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className ="about__title">100+</h3>
                    <span className="about__subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className ="about__title">2+ yrs</h3>
                    <span className="about__subtitle">Vollunteering</span>
                </div>
            </div>

            <div className="about__box">
                <i className="about__icon icon-bulb"></i>
                <div>
                    <h3 className ="about__title">10+</h3>
                    <span className="about__subtitle">Hackathons</span>
                </div>
            </div>

        </div>

        
    )
}

export default AboutBox