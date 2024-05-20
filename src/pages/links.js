import React from 'react';
import Meta from "@components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { ContactLinks } from '@constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import SocialIcons from '../components/socials';
import SvgSprite from '../components/svg-sprite';
import Footer from "@components/footer";
import { Wrapper } from '@components/linksPage/linksPage.styled';

const LinksPage = () => {
    const {allContentfulLinksPage: {nodes}} = useStaticQuery(graphql`
    query {
        allContentfulLinksPage{
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
                    name
                    link
                    background {
                        gatsbyImageData(width: 450, quality: 85)
                    }
                }
                links {
                    text
                    link
                    icon {
                        gatsbyImageData(width: 100, quality: 90)
                    }
                }
            }
        }
    }
    `)

    const data = nodes[0]
    return (
        <>
            <Wrapper>
            <SvgSprite/>
                <div className='content'>
                <Link className="logo" to={'/'}>
                    <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                </Link>
                <GatsbyImage image={data.avatar.gatsbyImageData}
                    className='avatar'
                    alt=""/>
                <h1>Hi I'm Carry</h1>
                <SocialIcons isLinksPage size={25} gap={5}/>
                <ul className='links'>
                    {data.links.map(link => (
                        <li key={link.text}>
                            <a href={link.link} rel="me noreferrer" target="_blank">
                                <GatsbyImage image={link.icon.gatsbyImageData} alt=""/>
                                <span>{link.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <section>
                    <ul className='grid'>
                        {data.tiles.map(item => (
                            <li key={item.name}>
                                <a href={item.link} rel="me noreferrer" target="_blank">
                                    <GatsbyImage image={item.background.gatsbyImageData} alt=''/>
                                    <h2>{item.name}</h2>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                </div>
                <GatsbyImage className='hero' image={data.background.gatsbyImageData}
                    alt=""/>
            </Wrapper>
            <Footer/>
        </>
    )
}

export default LinksPage

export const Head = () => {
    return (
        <Meta title="CarryKey Links"
            url="links"
            thumbnail={''}
            />
    )
}