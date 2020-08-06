import React from "react";
import "./skills.css";
import "./intro.css";
import { Fade, Flip } from "react-reveal";
import { ReactLogo, Html5, Css3, Npm, Php } from "@styled-icons/fa-brands"
import { Javascript, Nodejs } from "@styled-icons/boxicons-logos"
import { Postgresql, Mongodb, Canva, Adobephotoshop, Adobexd } from "@styled-icons/simple-icons"

export default function Skills(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="20px">
            <div className="skills-header-div">
                <h1 className="skills-header" style={{ color: theme.text }}>
                    What Do I Do?
                    </h1>
            </div>
            <div className="skills-main" id="skills">
                <Flip left duration={2000}>
                    <div className="skills-image-div">
                        <img
                            alt="Full Stack Development"
                            src={require("../svg/web.svg")}
                        ></img>
                    </div>
                </Flip>
                <div className="skills-text-div">
                    <h2>Full Stack Development</h2>
                    <Css3 size="48" />
                    <ReactLogo size="48" />
                    <Html5 size="48" />
                    <Javascript size="48" />
                    <Nodejs size="48" />
                    <Npm size="48" />
                    <Postgresql size="48" />
                    <Mongodb size="48" />
                    <Php size="48" />
                    <ul>
                        <li>Building responsive frontend websites using React-Redux</li>
                        <li>Creating application backend in Node &amp; Express</li>
                    </ul>
                </div>
            </div>
            <div className="skills-main" id="skills">
                <Flip left duration={2000}>
                    <div className="skills-image-div">
                        <img
                            alt="UI/UX"
                            src={require("../svg/design.svg")}
                        ></img>
                    </div>
                </Flip>
                <div className="skills-text-div">
                    <h2>UI/UX Design</h2>
                    <Adobephotoshop size="48" />
                    <Canva size="48" />
                    <Adobexd size="48" />
                    <ul>
                        <li>Designing elegant and effective user interfaces for applications</li>
                        <li>Creating and customizing logo designs</li>
                    </ul>
                </div>
            </div>
        </Fade >
    );
}
