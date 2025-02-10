import React from 'react';
import "./blog.css";
import Image1 from "../../assets/screenshots/home.png";
import Image2 from "../../assets/burger.png";
import Image3 from "../../assets/internX.jpg";
import Image4 from "../../assets/lms.png";
import Image5 from "../../assets/electerohub.png";
import Image6 from "../../assets/todo.png";



const Blog = () => {
    return(
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Projects</h2>

            <div className="blog__container grid">
                
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href=""><span className="blog__category">Individual</span></a>
                        <a href=""><img src={Image1} alt=""
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">My Portfolio</h3>
                        <div className="blog meta">
                            <span>A personal portfolio showcasing projects and skills.</span><br></br>
                            <br></br><span>React</span>
                            <span className="blog__dot"></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Individual</span></a>
                        <a href="#"><img src={Image2} alt=""
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Burger</h3>
                        <div className="blog meta">
                            <span>The Responsive Burger Website is a modern and interactive web design.</span><br></br>
                            <br></br><span>HTML | CSS | JavaScript</span>
                            <span className="blog__dot"></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Group</span></a>
                        <a href="#"><img src={Image3} alt=""
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">InternX</h3>
                        <div className="blog meta">
                            <span>A platform that connects IT interns with internship opportunities.</span><br></br>
                            <br></br><span>ReactJS | NodeJS | MongoDB | Express</span>
                            <span className="blog__dot"></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Group</span></a>
                        <a href="#"><img src={Image4} alt=""
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Karagasthalawa LMS</h3>
                        <div className="blog meta">
                            <span>Library Management System for Karagastalawa Maha Vidyalaya.</span><br></br>
                            <br></br><span>ReactJS | NodeJS | MongoDB | Express</span>
                            <span className="blog__dot"></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Individual</span></a>
                        <a href="#"><img src={Image6} alt=""
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">OrganizeIt</h3>
                        <div className="blog meta">
                            <span>To-do list application for efficient task organization</span><br></br>
                            <br></br><span>ReactJS | NodeJS | MongoDB | Express</span>
                            <span className="blog__dot"></span>
                            <span></span>
                        </div>
                    </div>
                </div>


                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href="#"><span className="blog__category">Individual</span></a>
                        <a href="#"><img src={Image5} alt=""
                        className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">ElectroHub</h3>
                        <div className="blog meta">
                            <span>E-Commerce Website allows users to browse and purchase electronic products online.</span><br></br>
                            <br></br><span>HTML | CSS | JavaScript | Bootstrap | Node.js | Express | MongoDB</span>
                            <span className="blog__dot"></span>
                            <span></span>
                        </div>
                    </div>
                </div>


            </div>

        </section>
    )
}

export default Blog