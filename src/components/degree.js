import React from "react";
import "./skills.css";
import "./intro.css";
import { Fade, Flip } from "react-reveal";

export default function Degree(props) {
    const theme = props.theme;
    return (
        <Fade bottom duration={2000} distance="20px">
            <div className="skills-header-div">
                <h1 className="skills-header" style={{ color: theme.text }}>
                    Degrees recieved
                    </h1>
            </div>
            <div className="skills-main" id="skills">
                <Flip left duration={2000}>
                    <div className="degree-image-div">
                        <img
                            alt="University of Helsinki"
                            src={require("../images/helsinki.png")}
                        ></img>
                    </div>
                </Flip>
                <div className="skills-text-div">
                    <h3>University of Helsinki</h3><h2><br></br><i>Bachelor of Science in Computer Science</i></h2>
                    2020
                </div>
            </div>
        </Fade >
    );
}
