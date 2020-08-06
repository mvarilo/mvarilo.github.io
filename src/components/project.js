import React from "react";
import "./skills.css";
import "./intro.css";
import { Fade, Flip } from "react-reveal";
import Button from "./button";

export default function Project(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="20px">
            <div className="skills-header-div">
            </div>
            <div className="skills-main" id="skills">
                <Flip left duration={2000}>
                    <div className="skills-image-div">
                        <img
                            alt="Kurssikartta"
                            src={require("../images/kurssikartta.png")}
                        ></img>
                    </div>
                </Flip>
                <div className="skills-text-div">
                    <h2>Course Map Software</h2>
                    <ul>
                        <li>Course map software meant to help students to gain information about the courses provided by departments of computer science and mathematics</li>
                        <li>Developed in collaboration with three other students and client TKO-Äly ry</li>
                    </ul>
                    <div className="portfolio-repo-btn-div">
                        <Button
                            text="Github"
                            newTab={true}
                            href={"https://github.com/kurssikartta-ohtuprojekti"}
                            theme={theme}
                            className="portfolio-repo-btn"
                        />
                        <Button
                            text="Live demo"
                            newTab={true}
                            href={"https://kurssikartta.herokuapp.com/"}
                            theme={theme}
                            className="portfolio-repo-btn"
                        />
                    </div>
                </div>
            </div>
            <div className="skills-main" id="skills">
                <Flip left duration={2000}>
                    <div className="skills-image-div">
                        <img
                            alt="Portfolio"
                            src={require("../svg/portfolio.svg")}
                        ></img>
                    </div>
                </Flip>
                <div className="skills-text-div">
                    <h2>Portfolio website</h2>
                    <ul>
                        <li>Built this very website using React with assets from Canva</li>
                    </ul>
                    <div className="portfolio-repo-btn-div">
                        <Button
                            text="Github"
                            newTab={true}
                            href={"https://github.com/mvarilo/portfolio"}
                            theme={theme}
                            className="portfolio-repo-btn"
                        />
                        <Button
                            text="Live demo"
                            newTab={true}
                            href={"http://mvarilo.github.io/"}
                            theme={theme}
                            className="portfolio-repo-btn"
                        />
                    </div>
                </div>
            </div>
        </Fade >
    );
}
