import "./About.css";
import html from "./ht.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";

import java from "./java.png";
import rest from "./rest.png";
import spring from "./spring.png";
import php from "./php.png";
import node from "./node.png";
import python from "./python.png";

import my from "./my.png";
import ms from "./ms.png";
import mongo from "./mongo.png";

import figma from "./figma.png";
import AI from "./AI.png";
import PS from "./PS.png";
import In from "./In.png";

import git from "./git.png";
import github from "./github.png";
import cpanel from "./cpanel.png";

const About = () => {

    return (
        <div className="about-container" id="about">
            <p className="about-intro">TECHNOLOGY STACK</p>
            <br />
            <div className="skill-buttons">
                <div className="skill-icon" data-name="HTML5">
                    <img src={html} alt="HTML5" />
                </div>
                <div className="skill-icon" data-name="CSS3">
                    <img src={css} alt="CSS3" />
                </div>
                <div className="skill-icon" data-name="JavaScript">
                    <img src={js} alt="JavaScript" />
                </div>
                <div className="skill-icon" data-name="React">
                    <img src={react} alt="React" />
                </div>
            </div>

            <div className="skill-buttons">
                <div className="skill-icon" data-name="Java">
                    <img src={java} alt="Java" />
                </div>
                <div className="skill-icon" data-name="REST API">
                    <img src={rest} alt="REST API" />
                </div>
                <div className="skill-icon" data-name="SpringBoot">
                    <img src={spring} alt="SpringBoot" />
                </div>
                <div className="skill-icon" data-name="PHP">
                    <img src={php} alt="PHP" />
                </div>
                <div className="skill-icon" data-name="Node.js">
                    <img src={node} alt="Node.js" />
                </div>
                <div className="skill-icon" data-name="Python">
                    <img src={python} alt="Python" />
                </div>
            </div>

            <div className="skill-buttons">
                <div className="skill-icon" data-name="MySQL">
                    <img src={my} alt="MySQL" />
                </div>
                <div className="skill-icon" data-name="MS SQL Server">
                    <img src={ms} alt="MS SQL Server" />
                </div>
                <div className="skill-icon" data-name="MongoDB">
                    <img src={mongo} alt="MongoDB" />
                </div>
            </div>

            <div className="skill-buttons">
                <div className="skill-icon" data-name="Figma">
                    <img src={figma} alt="Figma" />
                </div>
                <div className="skill-icon" data-name="Adobe Illustrator">
                    <img src={AI} alt="AI" />
                </div>
                <div className="skill-icon" data-name="Adobe Photoshop">
                    <img src={PS} alt="PS" />
                </div>
                <div className="skill-icon" data-name="Adobe Indesign">
                    <img src={In} alt="In" />
                </div>
            </div>

            <div className="skill-buttons">
                <div className="skill-icon" data-name="Git">
                    <img src={git} alt="Git" />
                </div>
                <div className="skill-icon" data-name="GitHub">
                    <img src={github} alt="GitHub" />
                </div>
                <div className="skill-icon" data-name="cPanel">
                    <img src={cpanel} alt="cPanel" />
                </div>
            </div>

        </div>
    )

}

export default About;