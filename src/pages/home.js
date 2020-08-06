import React, { Component } from "react";
import Intro from "../components/intro";
import Skills from "../components/skills";
import Footer from "../components/footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Intro theme={this.props.theme} />
                <div class="divider div-transparent">
                </div>
                <Skills theme={this.props.theme} />
                <Footer theme={this.props.theme} />
            </div>
        );
    }
}

export default Home;
