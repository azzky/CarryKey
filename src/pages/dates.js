import React, { useState } from 'react';
import Meta from "@components/meta"
import { useStaticQuery, graphql, Link } from "gatsby"
// import { ContactLinks } from '@constants';
import SocialIcons from '../components/socials';
import SvgSprite from '../components/svg-sprite';
import Footer from "@components/footer";
import { Wrapper } from '@components/datesPage/datesPage.styled';
import { PortableText } from '@portabletext/react';
import Intl from "@components/intl";
import fixImageUrl from '@utils/imageUrl';

import backDesk from '@images/back-dates.jpg';

const DatesPage = () => {
    const {allSanityDatesPage: {nodes}} = useStaticQuery(graphql`
    query {
        allSanityDatesPage(
            filter: {title: {eq: "Roleplay Dates"}}
        ){
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
                    title
                    link
                    image {
                        ...ImageWithPreview
                        asset {
                            url
                        }
                    }
                    popupImage {
                        ...ImageWithPreview
                        asset {
                            url
                        }
                    }
                    _rawRichDescription
                }
            }
        }
    }
    `)

    const data = nodes[0]
    const tiles = data.tiles

    const [selected, setSelected] = useState(null)
    return (
        <Intl lang={'en'}>
            <Wrapper>
            <SvgSprite/>
                <div className='content'>
                <header className='header'>
                    <Link className="logo" to={'/'}>
                        <img src="/logo1.png" alt="CarryKey logo" className="logo" loading="lazy" quality={100}/>
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
                                <img src={fixImageUrl(item.image.asset.url + '?w=480&q=90&fm=webp')}
                                    srcSet={`${fixImageUrl(item.image.asset.url)}?w=480&q=90&fm=webp 1x,
                                        ${fixImageUrl(item.image.asset.url)}?w=960&q=90&fm=webp 2x`}
                                        loading="lazy"/>
                                {/* </a> */}
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
                        <img className='image'
                            src={fixImageUrl(selected.popupImage?.asset.url || selected.image.asset.url) + '?w=800&q=90&fm=webp'}
                            srcSet={`${fixImageUrl(selected.popupImage?.asset.url || selected.image.asset.url)}?w=800&q=90&fm=webp 1x,
                                ${fixImageUrl(selected.popupImage?.asset.url || selected.image.asset.url)}?w=1600&q=90&fm=webp 2x`}
                            alt="" loading="lazy"/>
                        <div className="description">
                            <PortableText value={selected._rawRichDescription} />
                        </div>
                        <a className="button" href={selected.link} rel="me noreferrer" target="_blank">Visit</a>
                    </div>
                </div>}
                <img className='hero' src={fixImageUrl(data.background.asset.url + '?w=1920&q=90&fm=webp')}
                    srcSet={`${fixImageUrl(data.background.asset.url)}?w=1920&q=90&fm=webp 1x,
                        ${fixImageUrl(data.background.asset.url)}?w=3840&q=90&fm=webp 2x`}
                    alt="" loading="lazy"/>
            </Wrapper>
            <Footer lang="en"/>
        </Intl>
    )
}

export default DatesPage

export const Head = () => {
    return (
        <>
        <Meta title="CarryKey Dates"
            url="dates"
            thumbnail={backDesk}
            />
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}