import React, { useState } from 'react';
import Meta from "@components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { ContactLinks } from '@constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import SocialIcons from '../components/socials';
import SvgSprite from '../components/svg-sprite';
import Footer from "@components/footer";
import { Wrapper } from '@components/datesPage/datesPage.styled';
import { renderRichText } from "gatsby-source-contentful/rich-text";

import backDesk from '@images/back-dates.jpeg';

const options = {
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
}

const DatesPage = () => {
    const {allContentfulMobileSetsPage: {nodes}, allContentfulMobileSetTile: {nodes: tiles}} = useStaticQuery(graphql`
    query {
        allContentfulMobileSetsPage{
            nodes {
                title
                avatar {
                    gatsbyImageData(width: 200, quality: 90)
                }
                background {
                    gatsbyImageData(width: 1920, quality: 85)
                    file {
                    url
                    }
                }
            }
        }
        allContentfulMobileSetTile {
            nodes {
                title
                link
                image {
                    gatsbyImageData(width: 480, quality: 85)
                }
                popupImage {
                    gatsbyImageData(width: 450, quality: 85)
                }
                richDescription {
                    raw
                }
            }
        }
    }
    `)

    const data = nodes[0]

    const [selected, setSelected] = useState(null)
    return (
        <>
            <Wrapper>
            <SvgSprite/>
                <div className='content'>
                <header className='header'>
                    <Link className="logo" to={'/'}>
                        <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                    </Link>
                    <SocialIcons isLinksPage size={18} gap={10}/>
                </header>
                
                <h1>{data.title}</h1>
                <section>
                    <ul className='grid dates'>
                        {tiles.map(item => (
                            <li key={item.title}
                                onClick={() => setSelected(item)}>
                                {/* <a href={item.link} rel="me noreferrer" target="_blank"> */}
                                <GatsbyImage image={item.image.gatsbyImageData} alt=''/>
                                <div>
                                    <h2>{item.title}</h2>
                                {/* </a> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                </div>
                {selected && <div className='popup'>
                    <div className='popup-content'>
                        <div className="popup-header">
                            <button className="close-btn"
                                onClick={() => setSelected(null)}>
                                <span className="visually-hidden">Close</span>
                                <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <use href="#close"/>
                                </svg>
                            </button>
                        </div>
                        <h2>{selected.title}</h2>
                        <GatsbyImage image={selected.popupImage.gatsbyImageData || selected.image.gatsbyImageData} alt=""/>
                        <div className="description">
                            {selected.richDescription && <p>{renderRichText(selected.richDescription, options)}</p>}
                        </div>
                        <a className="button" href={selected.link} rel="me noreferrer" target="_blank">Visit</a>
                    </div>
                </div>}
                <GatsbyImage className='hero' image={data.background.gatsbyImageData}
                    alt=""/>
            </Wrapper>
            <Footer lang="en"/>
        </>
    )
}

export default DatesPage

export const Head = () => {
    return (
        <>
        <Meta title="CarryKey Mobile Sets"
            url="mobile-sets"
            thumbnail={backDesk}
            />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}