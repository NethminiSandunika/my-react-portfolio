import React, { useState } from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);
    return(
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href='#home' className='nav__logo'>
                <img src={Logo} alt=""/>
            </a>

            <nav className="nav">
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <li className="icon-home"></li>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                            <li className="icon-user-following"></li>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                            <li className="icon-briefcase"></li>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#blog" className="nav__link">
                            <li className="icon-note"></li>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#resume" className="nav__link">
                            <li className="icon-graduation"></li>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <li className="icon-camera"></li>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                            <li className="icon-bubble"></li>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="nav__footer">
                <span className="copyright">
                    &copy; 2024.</span>
            </div>
        </aside>

        <div className={toggle ?  "nav__toggle nav__toggle-open" :
            "nav__toggle"} onclick={() => showMenu(!toggle)}>
            <i className="icon-menu"></i>

        </div>
        </>
    );
};

export default Sidebar;