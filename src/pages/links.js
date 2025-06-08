import React from 'react';
import Meta from "@components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image';
import Image from '@components/image';
import SocialIcons from '../components/socials';
import SvgSprite from '../components/svg-sprite';
import Footer from "@components/footer";
import { Wrapper } from '@components/linksPage/linksPage.styled';
import Intl from "@components/intl";

import backDesk from '@images/back-dates.jpeg';

const LinksPage = () => {
    const {allSanityLinksPage: {nodes}} = useStaticQuery(graphql`
    query {
        allSanityLinksPage{
            nodes {
                title
                avatar {
                    ...ImageWithPreview
                }
                background {
                    ...ImageWithPreview
                }
                tiles {
                    name
                    link
                    background {
                        ...ImageWithPreview
                    }
                }
                links {
                    text
                    link
                    icon {
                        ...ImageWithPreview
                    }
                }
            }
        }
    }
    `)

    const data = nodes[0]
    return (
        <Intl lang={'en'}>
            <Wrapper>
            <SvgSprite/>
                <div className='content'>
                <Link className="logo" to={'/'}>
                    <img src="/logo1.png" alt="CarryKey logo" className="logo" quality={100}/>
                </Link>
                <Image image={data.avatar}
                    className='avatar'/>
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
                                    <Image image={item.background}/>
                                    <h2>{item.name}</h2>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                </div>
                <Image className='hero' image={data.background}/>
            </Wrapper>
            <Footer lang="en"/>
        </Intl>
    )
}

export default LinksPage

export const Head = () => {
    return (
        <>
        <Meta title="CarryKey Links"
            url="/links"
            thumbnail={backDesk}
            />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}