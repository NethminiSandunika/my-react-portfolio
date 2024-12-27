import React from 'react';
import "./services.css";
import Image1 from "../../assets/service-2.svg"
import Image2 from "../../assets/databses.png"
import Image3 from "../../assets/tools1.png"

const data = [
    {
      id: 1,
      image: Image1,
      title: "Programming Languages & Frameworks",
      description:
        "HTML, CSS, JavaScript, Java, React.js, Node.js, Express.js,TypeScript, GraphQL",
    },
    {
      id: 2,
      image: Image2,
      title: "Databases",
      description:
        "MySQL, Mongodb",
    },
    {
      id: 3,
      image: Image3,
      title: "Tools",
      description:
        " Figma, Sass, VS Code, Eclipse, AWS, Postman, Selenium, JUnit, Git, Trello, Agile, Blender",
    },
  ];
  

const Services = () => {
    return(
        <section className="services container section" id="services">
            <h2 className="section__title">Skills</h2>

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