import React from "react"
// import { GatsbyImage } from "gatsby-plugin-image";
import Link from "@components/intl/link";
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import Wrapper from './postCarousel.styled'

const PostCarousel = (props) => {
    const { className, posts, isReverse, lang } = props
    const items = isReverse ? posts.reverse() : posts
    const responsive = {
        desktopXL: {
            breakpoint: { max: 3000, min: 1450 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 1450, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    const settings = {
        swipeable: true,
        draggable: true,
        showDots: false,
        arrows: false,
        responsive: responsive,
        // ssr: true,
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 3000,
        keyBoardControl: true,
        customTransition: 'transform 700ms ease-in-out',
        rtl: isReverse
    };
    return (
        <Wrapper>
        <Carousel {...settings} className={className}>
            {items.map(slide => {                
                return (
                <div key={'slider1-'+slide.postId} className="item">
                    <img src={'https:'+slide.preview.file.url + '?h=400&q=85'} alt={'Visit ' + slide.title + ' cosplay set'}/>
                    <Link to={'/shop/set/'+slide.url} className="button" lang={lang}>Purchase</Link>
                </div>
            )})}
        </Carousel>
        </Wrapper>
    )
}
export default PostCarousel