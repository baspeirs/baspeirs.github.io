import React from "react";
import GitHub from "../../assets/photos/github.svg";
import LinkedIn from "../../assets/photos/linkedin.svg";
import Gmail from "../../assets/photos/gmail.svg";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <p className="col-lg-4" id="signature">2020 Bryce Speirs</p>
                    <div className="col-xl-4">
                        <div className="row">
                            <div className="col-3 contact-links"><a href="https://github.com/baspeirs"><img src={GitHub} alt="GitHub Logo" /></a></div>
                            <div className="col-3 contact-links"><a href="https://www.linkedin.com/in/bryce-speirs-bb1319199/"><img src={LinkedIn} alt="LinkedIn logo" /></a></div>
                            <div className="col-3 contact-links"><a href="mailto:baspeirs@gmail.com"><img src={Gmail} alt="gmail logo" /></a></div>
                        </div>
                    </div>
                    <p className="col-lg-4" id="phone-number">Contact Number: <a href="tel:5159549221">515-954-9221</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;