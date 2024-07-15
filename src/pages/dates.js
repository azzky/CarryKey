import React, { useState } from 'react';
import Meta from "@components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { ContactLinks } from '@constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import SocialIcons from '../components/socials';
import SvgSprite from '../components/svg-sprite';
import Footer from "@components/footer";
import { Wrapper } from '@components/datesPage/datesPage.styled';

const DatesPage = () => {
    const {allContentfulDatesPage: {nodes}} = useStaticQuery(graphql`
    query {
        allContentfulDatesPage{
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
                tiles {
                    title
                    link
                    image {
                        gatsbyImageData(width: 450, quality: 85)
                    }
                    description {
                        description
                    }
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
                <Link className="logo" to={'/'}>
                    <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                </Link>
                {/* <GatsbyImage image={data.avatar.gatsbyImageData}
                    className='avatar'
                    alt=""/> */}
                <h1>{data.title}</h1>
                <SocialIcons isLinksPage size={25} gap={5}/>
                <section>
                    <ul className='grid dates'>
                        {data.tiles.map(item => (
                            <li key={item.title}
                                onClick={() => setSelected(item)}>
                                {/* <a href={item.link} rel="me noreferrer" target="_blank"> */}
                                <GatsbyImage image={item.image.gatsbyImageData} alt=''/>
                                <div>
                                    <h2>{item.title}</h2>
                                    <a className="button" href={item.link} rel="me noreferrer" target="_blank">Visit</a>
                                {/* </a> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
                </div>
                {selected && <div className='popup'>
                    <button onClick={() => setSelected(null)}>
                        <span className="visually-hidden">Close</span>
                        <svg width="40" height="40" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#close"/>
                        </svg>
                    </button>
                    <GatsbyImage image={selected.image.gatsbyImageData} alt=""/>
                    <div className="description">
                        <p>{selected.description?.description || ''}</p>
                    </div>
                </div>}
                <GatsbyImage className='hero' image={data.background.gatsbyImageData}
                    alt=""/>
            </Wrapper>
            <Footer/>
        </>
    )
}

export default DatesPage

export const Head = () => {
    return (
        <Meta title="CarryKey Links"
            url="links"
            thumbnail={''}
            />
    )
}