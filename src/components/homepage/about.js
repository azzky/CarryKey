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
                    <span className="number">8+</span>
                    <span>Years in cosplay</span>
                </p>
                <p>
                    <span className="number">1000+</span>
                    <span>Content customers</span>
                </p>
                <p>
                    <span className="number">1500+</span>
                    <span>Unique photo shoots</span>
                </p>
            </div>
            <div className="about">
                <p>Hi, I’m Katy.<br/>
                    I’m a super heroes from Little, Sky.</p>
                <p>8 years ago I started with a freelance shooting and now proudly represent my own photo studio called “CarryKey” cosplay.</p>
                <p className="socialMedia mobile"><Link to={'/contact'}>Social media</Link></p>
                <p>At “CarryKey” we love our job and try to be creative every time, so our customers can get some really unique content.</p>
                <p className="socialMedia tablet"><Link to={'/contact'}>Social media</Link></p>
                <p>Yours faithfully<br/>
                    CEO & Founder at “CarryKey”<br/>
                    Ekaterina Supergirl</p>
            </div>
            <ThreeImages src={'about_'} />
        </AboutWrapper>
    )
}

export default AboutBlock