import React from "react";
import { Link } from "gatsby";
import ThreeImages from "@components/threeImages";

import { AboutWrapper } from "./about.styled";

const AboutBlock = () => {
    return (
        <AboutWrapper>
            <h2>ABOUT</h2>
            <div className="numbers">
                <p>
                    <span className="number">90+</span>
                    <span>Characters cosplayed</span>
                </p>
                <p>
                    <span className="number">230+</span>
                    <span>Unique photoshoots</span>
                </p>
                <p>
                    <span className="number">30+</span>
                    <span>Custom shoots done</span>
                </p>
            </div>
            <div className="about">
                <p>Hi, I’m Katya a.k.a. Carry Key.<br/>Welcome to my site!</p>
                <p>I’ve been working as a photographer, photo editor and graphic designer until I decided to pursue my passion full-time and become a professional cosplay model. And here I am - crafting, painting, wigmaking, sometimes sewing, still photo editing, staying in shape and polishing my acting skills - who said it would be easy? 😄</p>
                {/* <p className="socialMedia mobile"><Link to={'/contact'}>Social media</Link></p> */}
                <p>I’m happy to share my passion with you and make characters come alive with a touch of my personal creative vision. Please enjoy my work and contact me anytime if you have any questions!</p>
                {/* <p className="socialMedia tablet"><Link to={'/contact'}>Social media</Link></p> */}
                <p>Yours faithfully<br/>
                    CarryKey</p>
            </div>
            <ThreeImages src={'about_'} />
        </AboutWrapper>
    )
}

export default AboutBlock