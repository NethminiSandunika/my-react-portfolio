import React from 'react';
import "./portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
    const [items, setitems] = useState(Menu);

    return(
        <section className="work container section" id="work">
            <h2 className="section__title">Recent works</h2>

            <div className="work__filters">
                <span className="work__item">Everything</span>
            </div>

            <div className="work__container grid">
               {items.map((elem) => {
                const{ id, image, title, category} = elem;
                return (
                    <div className="work__card" key={id}>
                        <div className="work__thumbnail">
                            <img src={image} alt="" className="work__img" />
                            <div className="work__mask"></div>
                        </div>

                        <span className="work__category">{category}</span>
                        <h3 className="work__title">{title}</h3>
                        <a href="#" className="work__button">
                            <i classNAme="icon-link work__button"></i>
                        </a>

                    </div>
                )
               })} 
            </div>



        </section>
    )
}

export default Portfolio