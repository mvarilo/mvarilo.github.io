import React from "react";
import "./intro.css";
import "../App.css";
import Button from "./button";
import { Fade } from "react-reveal";

export default function Intro(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1 className="greeting-text" style={{ color: theme.text }}>
                                Miro Varilo
                            </h1>
                            <h2 className="greeting-nickname" style={{ color: theme.text }}>
                                Software Developer
              </h2>
                            <p
                                className="greeting-text-p subTitle"
                                style={{ color: theme.secondaryText }}
                            >
                            </p>
                            <div className="portfolio-repo-btn-div">
                                <Button
                                    text="Email"
                                    newTab={true}
                                    href={"mailto:miro.varilo@gmail.com"}
                                    theme={theme}
                                    className="portfolio-repo-btn"
                                />
                                <Button
                                    text="Resume"
                                    newTab={true}
                                    href={"https://drive.google.com/file/d/1Vz5MU3dsqgLG7qmrJ-sU_MbWd8qpkZbL/view?usp=sharing"}
                                    theme={theme}
                                    className="portfolio-repo-btn"
                                />
                                <Button
                                    text="Github"
                                    newTab={true}
                                    href={"https://github.com/mvarilo"}
                                    theme={theme}
                                    className="portfolio-repo-btn"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="greeting-image-div">
                        <img
                            alt="Person"
                            src={require("../svg/person2.svg")}
                        ></img>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
