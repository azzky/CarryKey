import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Carousel from "nuka-carousel"
import useWidth from '@hooks/useWindowSize'

import Wrapper from './postCarousel.styled'

const PostCarousel = (props) => {
    const { className, posts, isReverse } = props
    const items = isReverse ? posts.reverse() : posts
    const {isTablet, isDesktop} = useWidth()
    const settings = {
        slidesToShow: isDesktop ? 6 : isTablet ? 4 : 3,
        withoutControls: true,
        disableEdgeSwiping: true,
        wrapAround: true
    };
    return (
        <Wrapper>
        <Carousel {...settings} className={className}>
            {items.map(slide => {
                const image = getImage(slide.preview)
                return (
                <div key={'slider1-'+slide.postId} className="item">
                    <GatsbyImage alt="" image={image} />
                    <Link to={'/shop/post/'+slide.postId} className="button">Purchase</Link>
                </div>
            )})}
        </Carousel>
        </Wrapper>
    )
}
export default PostCarousel