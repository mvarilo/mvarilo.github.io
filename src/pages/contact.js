import React, { Component } from "react";
import { Fade } from "react-reveal";
import Button from "../components/button";

class Contact extends Component {
    render() {
        const theme = this.props.theme
        return (
            <div>
                <div className="education-main">
                    <div className="basic-education">
                        <Fade bottom duration={2000} distance="40px">
                            <div className="heading-div">
                                <div className="heading-img-div">
                                    {<img
                                        src={require("../svg/contact.svg")}
                                        alt="Contact"
                                    />}
                                </div>
                                <div className="heading-text-div">
                                    <h1 className="heading-text" style={{ color: theme.text }}>
                                        Get in touch
                </h1>
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
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contact;
