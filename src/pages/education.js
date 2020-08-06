import React, { Component } from "react";
import { Fade } from "react-reveal";
import Degree from "../components/degree";
import Footer from "../components/footer";
import "../App.css";

class Education extends Component {
    render() {
        const theme = this.props.theme
        return (
            <Fade bottom duration={2000} distance="40px">
                <div>
                    <div className="education-main">
                        <div className="basic-education">

                            <div className="heading-div">
                                <div className="heading-img-div">
                                    {<img
                                        src={require("../svg/education.svg")}
                                        alt="Education"
                                    />}
                                </div>
                                <div className="heading-text-div">
                                    <h1 className="heading-text" style={{ color: theme.text }}>
                                        Education
                                    </h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="divider div-transparent">
                    </div>
                    <Degree theme={this.props.theme} />
                    <Footer theme={this.props.theme} />
                </div>
            </Fade>
        );
    }
}

export default Education;
