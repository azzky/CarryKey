import React from "react";
// import { Link } from "gatsby";
import ThreeImages from "@components/threeImages";

import { AboutWrapper } from "./about.styled";
import { FormattedMessage } from "react-intl";

const AboutBlock = () => {
    return (
        <AboutWrapper>
            <h2>
                <FormattedMessage id="menu.about"/>
            </h2>
            <div className="numbers">
                <p>
                    <span className="number">90+</span>
                    <span><FormattedMessage id="about.characters"/></span>
                </p>
                <p>
                    <span className="number">230+</span>
                    <span><FormattedMessage id="about.photoshoots"/></span>
                </p>
                <p>
                    <span className="number">30+</span>
                    <span><FormattedMessage id="about.custom"/></span>
                </p>
            </div>
            <div className="about">
                <p><FormattedMessage id="about.description1"/><br/><FormattedMessage id="about.description2"/></p>
                <p><FormattedMessage id="about.description3"/></p>
                {/* <p className="socialMedia mobile"><Link to={'/contact'}>Social media</Link></p> */}
                <p><FormattedMessage id="about.description4"/></p>
                {/* <p className="socialMedia tablet"><Link to={'/contact'}>Social media</Link></p> */}
                <p>
                    <FormattedMessage id="about.description5"/>
                <br/>
                    <FormattedMessage id="global.name"/>
                </p>
            </div>
            <ThreeImages src={'about_'} />
        </AboutWrapper>
    )
}

export default AboutBlock