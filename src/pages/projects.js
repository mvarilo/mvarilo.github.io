import React, { Component } from "react";
import { Fade } from "react-reveal";
import Footer from "../components/footer";
import Project from "../components/project";

class Projects extends Component {
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
                                        src={require("../svg/projects.svg")}
                                        alt="Projects"
                                    />}
                                </div>
                                <div className="heading-text-div">
                                    <h1 className="heading-text" style={{ color: theme.text }}>
                                        Projects
                                    </h1>
                                    <h3 className="heading-sub-text" style={{ color: theme.text }}>
                                        Projects I've worked on
                                    </h3>
                                </div>
                                <div class="divider div-transparent">
                                </div>
                            </div>
                        </div>
                    </div>
                    <Project theme={this.props.theme} />
                    <Footer theme={this.props.theme} />
                </div>
            </Fade>
        );
    }
}

export default Projects;
