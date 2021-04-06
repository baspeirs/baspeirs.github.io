import React from "react";
import GitHubLogo from "../../assets/photos/github.svg";
import LinkedInLogo from "../../assets/photos/linkedin.svg";
import EmailLogo from "../../assets/photos/email.svg";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row" id="footer-content">
                    <div className="col-lg-4" id="signature">
                        <p >2020</p>
                        <p>Bryce Speirs</p>
                    </div>
                    <div className="col-xl-4">
                        <div className="row" id="contact-links">
                            <div className="col-xl-4">
                            <div className="contact-image"><a href="https://github.com/baspeirs"><img src={GitHubLogo} alt="GitHub Logo from Pixel Perfect" id="github-logo" /></a></div>

                            </div>
                            <div className="col-xl-4">
                            <div className="contact-image"><a href="https://www.linkedin.com/in/bryce-speirs-bb1319199/"><img src={LinkedInLogo} alt="LinkedIn Logo from Freepik" id="linkedin-logo" /></a></div>
                                
                            </div>
                            <div className="col-xl-4">
                            <div className="contact-image"><a href="mailto:baspeirs@gmail.com"><img src={EmailLogo} alt="Email Logo from Freepik" id="mail-logo" /></a></div>
                                
                            </div>
                        </div>
                        {/* <div id="contact-links">
                        </div> */}
                    </div>
                    <div className="col-lg-4">
                        <p >Contact Number:</p>
                        <a href="tel:5159549221">515-954-9221</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;