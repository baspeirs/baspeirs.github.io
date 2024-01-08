import React from "react";
import GitHubIcon from "../../assets/photos/Icons/icons8-github-32.png";
import LinkedInIcon from "../../assets/photos/Icons/icons8-linkedin-32.png";
import EmailIcon from "../../assets/photos/Icons/icons8-email-32.png";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div id="footer-content">
                <p id="signature">2024 Bryce Speirs Development &copy;</p>

                <div id="contact-links">
                   <a href='mailto:baspeirs@gmail.com' target='_blank'><img className='contact-image' src={EmailIcon} alt='Portfolio' />Email</a>
                   <a href='https://www.linkedin.com/in/bryce-speirs-bb1319199/' target='_blank'><img className='contact-image' src={LinkedInIcon} alt='Linkedin' />LinkedIn</a>
                   <a href='https://github.com/baspeirs' target='_blank'><img className='contact-image' src={GitHubIcon} alt='git hub' />GitHub</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;