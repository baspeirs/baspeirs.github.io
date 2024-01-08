import React from "react";
import "./Skills.css";
import ReactLogo from '../../../assets/photos/Tech_Logos/React_Logo.png';
import SassLogo from '../../../assets/photos/Tech_Logos/SASS_Logo.png';
import JQueryLogo from '../../../assets/photos/Tech_Logos/JQuery_logo.png';
import BootstrapLogo from '../../../assets/photos/Tech_Logos/Bootstrap_Logo.png';
import NodeLogo from '../../../assets/photos/Tech_Logos/NodeJS_Logo.png';
import HtmlLogo from '../../../assets/photos/Tech_Logos/HTML5_Logo.png';
import ReduxLogo from '../../../assets/photos/Tech_Logos/Redux_Logo.png';
import CssLogo from '../../../assets/photos/Tech_Logos/CSS_Logo.png';
import GcpLogo from '../../../assets/photos/Tech_Logos/GCP_Logo.png';
import MySqlLogo from '../../../assets/photos/Tech_Logos/MySQL_Logo.png';
import ExpressLogo from '../../../assets/photos/Tech_Logos/Express_Logo.png';
import JsonLogo from '../../../assets/photos/Tech_Logos/json_logo.png';
import MongoDbLogo from '../../../assets/photos/Tech_Logos/MongoDB_Logo.png';
import GitHubLogo from '../../../assets/photos//Tech_Logos/github_logo.png';

export const Skills = () => {

    return (
        <div id='skills' className='about-block'>
            <h2 className='skills-header'>Skills</h2>
            <div className='scroller'>
                <ul className='tag-list scroller_inner'>
                    <li><img className='tech-logo' src={ReactLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={ReduxLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={NodeLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={HtmlLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={CssLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={ExpressLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={MongoDbLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={MySqlLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={GitHubLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={JQueryLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={BootstrapLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={GcpLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={SassLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={JsonLogo} alt='react logo' /></li>

                    <li><img className='tech-logo' src={ReactLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={ReduxLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={NodeLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={HtmlLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={CssLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={ExpressLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={MongoDbLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={MySqlLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={GitHubLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={JQueryLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={BootstrapLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={GcpLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={SassLogo} alt='react logo' /></li>
                    <li><img className='tech-logo' src={JsonLogo} alt='react logo' /></li>
                </ul>
            </div>
        </div>
    )
}