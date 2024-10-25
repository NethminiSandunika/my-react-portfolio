import React from 'react';
import './pricing.css';
import ReactLogo from '../../assets/react (3).png';
import HTMLLogo from '../../assets/html.png';
import CSSLogo from '../../assets/css (2).png';
import JavaLogo from '../../assets/java (2).png';
import JavaScriptLogo from '../../assets/javascript.png';
import MySQLLogo from '../../assets/mysql.png';
import MongoDBLogo from '../../assets/mongodb.png';
import VSCodeLogo from '../../assets/vscode.png';
import EclipseLogo from '../../assets/eclipse.png';
import FigmaLogo from '../../assets/figma.png';
import MSOfficeLogo from '../../assets/msoffice.png';
import SeleniumLogo from '../../assets/selenium (2).png';
import JUnitLogo from '../../assets/junit.png';
import GitHubLogo from '../../assets/github.png';
import TrelloLogo from '../../assets/trello.png';
import JiraLogo from '../../assets/jira.png';

const Pricing = () => {
    return (
        <section className="skills container section">
            <h2 className="section__title">Skills</h2>

            <div className="skills__container">
                {/* Programming Languages & Frameworks */}
                <div className="skills__category">
                    <h3 className="skills__title">Programming Languages & Frameworks</h3>
                    <div className="skills__grid">
                        <img src={ReactLogo} alt="React" className="skills__logo" />
                        <img src={HTMLLogo} alt="HTML" className="skills__logo" />
                        <img src={CSSLogo} alt="CSS" className="skills__logo" />
                        <img src={JavaLogo} alt="Java" className="skills__logo" />
                        <img src={JavaScriptLogo} alt="JavaScript" className="skills__logo" />
                    </div>
                </div>

                {/* Databases */}
                <div className="skills__category">
                    <h3 className="skills__title">Databases</h3>
                    <div className="skills__grid">
                        <img src={MySQLLogo} alt="MySQL" className="skills__logo" />
                        <img src={MongoDBLogo} alt="MongoDB" className="skills__logo" />
                    </div>
                </div>

                {/* Tools */}
                <div className="skills__category">
                    <h3 className="skills__title">Tools</h3>
                    <div className="skills__grid">
                        <img src={VSCodeLogo} alt="VS Code" className="skills__logo" />
                        <img src={EclipseLogo} alt="Eclipse" className="skills__logo" />
                        <img src={FigmaLogo} alt="Figma" className="skills__logo" />
                        <img src={MSOfficeLogo} alt="Microsoft Office" className="skills__logo" />
                        <img src={SeleniumLogo} alt="Selenium" className="skills__logo" />
                        <img src={JUnitLogo} alt="JUnit" className="skills__logo" />
                        <img src={GitHubLogo} alt="GitHub" className="skills__logo" />
                        <img src={TrelloLogo} alt="Trello" className="skills__logo" />
                        <img src={JiraLogo} alt="Jira" className="skills__logo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
