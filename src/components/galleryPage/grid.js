import React from "react"
// import useGalleryGrid from '@hooks/useGalleryGrid'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Tags } from '@components/tags';
import useShop from '@hooks/useShop'
import useWidth from '@hooks/useWindowSize'

import Wrapper from "./grid.styled";

const Item = ({post }) => {
    const image = getImage(post.preview)
    return (
        <div className="item">
            <GatsbyImage image={image} alt=""/>
        </div>
    )
}

const Column = ({column, index}) => {
    return (
        <div key={index}>
            {column.map((post, postIndex) => (
                <Item post={post}
                    key={postIndex} />
            ))}
        </div>
    )
}

const GalleryGrid = ({posts}) => {
    const { width } = useWidth()

    const {
        uniqueTags,setSortingValue, sortList, columnNumber, getWidth, postSubArray
    } = useShop(posts, width, false, null, 'gallery');
    return (
        <div>
            <Tags tags={uniqueTags} path="gallery"
                setSortingValue={setSortingValue}
                sortList={sortList}/>
            <Wrapper $columnNumber={columnNumber}>
            {getWidth && postSubArray.map((column, index) => (
                <Column column={column}
                    index={index}
                    key={index}/>
            ))}
            </Wrapper>
        </div>
    )
}

export default GalleryGrid