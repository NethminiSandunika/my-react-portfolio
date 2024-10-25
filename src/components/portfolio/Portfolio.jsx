import React, {useState} from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
    const [items, setitems] = useState(Menu);

    return(
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Gallery</h2>

            <div className="work__filters">
                <span className="work__item"></span>
            </div>

            <div className="work__container grid">
               {items.map((elem) => {
                const{ id, image, title, subtitle, category} = elem;
                return (
                    <div className="work__card" key={id}>
                        <div className="work__thumbnail">
                            <img src={image} alt="" className="work__img" />
                            <div className="work__mask"></div>
                        </div>

                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}
                        {subtitle && <span className="work__subtitle">{subtitle}</span>} {/* Subtitle here */}
                        </h3>

                    </div>
                )
               })} 
            </div>



        </section>
    )
}

export default Portfolio