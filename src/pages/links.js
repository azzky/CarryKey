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
                fanslyAvatar {
                    gatsbyImageData(width: 100, quality: 90)
                }
                wishlistAvatar {
                    gatsbyImageData(width: 100, quality: 90)
                }
                onlyFansAvatar {
                    gatsbyImageData(width: 100, quality: 90)
                }
                tile1Name
                tile1Url
                tile1Image {
                    gatsbyImageData(width: 450, quality: 85)
                }
                tile2Name
                tile2Url
                tile2Image {
                    gatsbyImageData(width: 450, quality: 85)
                }
                tile3Name
                tile3Url
                tile3Image {
                    gatsbyImageData(width: 450, quality: 85)
                }
                tile4Name
                tile4Url
                tile4Image {
                    gatsbyImageData(width: 450, quality: 85)
                }
            }
        }
    }
    `)

    const data = nodes[0]
    const links = [1,2,3,4]
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
                    <li>
                        <a href='https://fansly.com/CarryKeycos'>
                            <GatsbyImage image={data.fanslyAvatar.gatsbyImageData} alt=""/>
                            <span>Fansly</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://onlyfans.com/carrykey_cosplay'>
                            <GatsbyImage image={data.onlyFansAvatar.gatsbyImageData} alt=""/>
                            <span>OnlyFans</span>
                        </a>
                    </li>
                    <li>
                        <a href='https://throne.com/carrykey'>
                            <GatsbyImage image={data.wishlistAvatar.gatsbyImageData} alt=""/>
                            <span>Wishlist</span>
                        </a>
                    </li>
                </ul>
                <section>
                    <ul className='grid'>
                        {links.map(item => (
                            <li key={item}>
                                <a href={data[`tile${item}Url`]}>
                                    <GatsbyImage image={data[`tile${item}Image`].gatsbyImageData} alt=''/>
                                    <h2>{data[`tile${item}Name`]}</h2>
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