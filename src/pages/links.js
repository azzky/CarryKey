import React from 'react';
import Meta from "@components/meta"
import { useStaticQuery, graphql } from "gatsby"
import SocialIcons from '../components/socials';
import SvgSprite from '../components/svg-sprite';
import Footer from "@components/footer";
import { Wrapper } from '@components/linksPage/linksPage.styled';
import Intl from "@components/intl";
import fixImageUrl from '@utils/imageUrl';

import backDesk from '@images/back-dates.jpg';

const LinksPage = () => {
    const {allSanityLinksPage: {nodes}} = useStaticQuery(graphql`
    query {
        allSanityLinksPage (filter: {title: {eq: "CarryKey link in bio"}}) {
            nodes {
                title
                avatar {
                    ...ImageWithPreview
                    asset {
                        url
                    }
                }
                background {
                    ...ImageWithPreview
                    asset {
                        url
                    }
                }
                tiles {
                    name
                    link
                    background {
                        ...ImageWithPreview
                        asset {
                            url
                        }
                    }
                }
                links {
                    text
                    link
                    icon {
                        ...ImageWithPreview
                        asset {
                            url
                        }
                    }
                }
            }
        }
    }
    `)

    const data = nodes[0]
    return (
        <Intl lang={'en'}>
            <Wrapper $bouncing={2}>
            <SvgSprite/>
                <div className='content'>
                <div className="logo">
                    <img src="/logo1.png" alt="CarryKey logo" className="logo" loading="lazy"/>
                </div>
                {data.avatar && <img className="avatar"
                    src={fixImageUrl(data.avatar.asset.url) + '?w=120&q=90&fm=webp'}
                    srcSet={`${fixImageUrl(data.avatar.asset.url)}?w=120&q=90&fm=webp 1x,
                        ${fixImageUrl(data.avatar.asset.url)}?w=240&q=90&fm=webp 2x`}
                    width={120}
                    height={120}/>}
                <h1>Hi I'm Carry</h1>
                <SocialIcons isLinksPage size={25} gap={5}/>
                <ul className='links'>
                    {data.links.map(link => (
                        <li key={link.text}>
                            <a href={link.link} rel="me noreferrer" target="_blank">
                                <img src={fixImageUrl(link.icon.asset.url) + '?w=48&q=90&fm=webp'}
                                    width={48}
                                    height={48}
                                    loading="lazy"
                                    srcSet={`${fixImageUrl(link.icon.asset.url)}?w=48&q=90&fm=webp 1x,
                                        ${fixImageUrl(link.icon.asset.url)}?w=96&q=90&fm=webp 2x`}/>
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
                                    <img src={fixImageUrl(item.background.asset.url) + '?w=271&q=90&fm=webp'}
                                        srcSet={`${fixImageUrl(item.background.asset.url)}?w=271&q=90&fm=webp 1x,
                                            ${fixImageUrl(item.background.asset.url)}?w=542&q=90&fm=webp 2x`}
                                            loading="lazy"/>
                                    <h2>{item.name}</h2>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                </div>
                {data.background && <img className='hero' src={fixImageUrl(data.background.asset.url) + '?w=1920&q=90&fm=webp'}
                    srcSet={`${fixImageUrl(data.background.asset.url)}?w=1920&q=90&fm=webp 1x,
                        ${fixImageUrl(data.background.asset.url)}?w=3840&q=90&fm=webp 2x`}
                    alt="" loading="lazy"/>}
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