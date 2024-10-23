import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-1.svg"
import Image2 from "../../assets/service-2.svg"
import Image3 from "../../assets/service-3.svg"

const data = [
    {
      id: 1,
      image: Image1,
      title: "UI/UX design",
      description:
        "Creating visually appealing, user-friendly designs that prioritize functionality and modern trends.",
    },
    {
      id: 2,
      image: Image2,
      title: "Web Development",
      description:
        "Building dynamic, responsive websites with clean code and strong backend solutions.",
    },
    {
      id: 3,
      image: Image3,
      title: "Software Testing",
      description:
        "Ensuring high-quality software through rigorous testing processes, focusing on automation and manual testing.",
    },
  ];
  

const Services = () => {
    return(
        <section className="services container section" id="services">
            <h2 clasName="secion__title">Services</h2>

            <div className="services__container grid">
                {data.map(({id, image, title, description}) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className="services__title">{title}</h3>
                            <p classname="services__description">{description}</p>
                            </div>
                    );
                })}

            </div>

        </section>
    );
};

export default Services