import React from "react";
import "./footer.css";
import "../App.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
    return (
        <Fade bottom duration={2000} distance="20px">
            <div>
                <div class="divider div-transparent">
                </div>
                <div className="footer" style={{ color: props.theme.secondaryText }}>
                    2020 © Crafted in Helsinki by Miro Varilo
                </div>
            </div>
        </Fade>
    );
}
