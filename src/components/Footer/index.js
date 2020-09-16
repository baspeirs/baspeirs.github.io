import React from "react";
import GitHubLogo from "../../assets/photos/GitHubLogo.svg";
import LinkedInLogo from "../../assets/photos/LinkedInLogo.svg";
import EmailLogo from "../../assets/photos/EmailLogo.svg";
import "./style.css";

function Footer() {
    return (
        <footer>
            <p id="signature">2020 Bryce Speirs</p>
            <p id="social-media">Social Media Links:</p>
            <div id="contact-links">
                <div className="contact-image"><a href="https://github.com/baspeirs"><img src={GitHubLogo} alt="GitHub Logo" id="github-logo" /></a></div>
                <div className="contact-image"><a href="https://www.linkedin.com/in/bryce-speirs-bb1319199/"><img src={LinkedInLogo} alt="GitHub Logo" id="linkedin-logo" /></a></div>
                <div className="contact-image"><a href="mailto:baspeirs@gmail.com"><img src={EmailLogo} alt="GitHub Logo" id="mail-logo" /></a></div>
            </div>
            <p id="phone-number">Contact Number: <a href="tel:5159549221">515-954-9221</a></p>
        </footer>
    )
}

export default Footer;