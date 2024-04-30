import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useShop from '@hooks/useShop'
import useWidth from '@hooks/useWindowSize'
import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css';
import Wrapper from "./grid.styled";

const Item = ({post, setImage }) => {
    return (
        <div className="item" onClick={() => setImage(post.file.url)}>
            <GatsbyImage image={post.gatsbyImageData} alt=""/>
        </div>
    )
}

const Column = ({column, index, setImage}) => {
    return (
        <div key={index}>
            {column.map((post, postIndex) => (
                <Item post={post}
                    setImage={setImage}
                    key={postIndex} />
            ))}
        </div>
    )
}

const GalleryGrid = ({images}) => {
    const { width } = useWidth()
    const [image, setImage] = useState(null)

    const {
        columnNumber, getWidth, postSubArray
    } = useShop(images, width, false, null, 'gallery')
    return (
        <>
        <div>
            <Wrapper $columnNumber={columnNumber}>
            {getWidth && postSubArray.map((column, index) => (
                <Column column={column}
                    index={index}
                    setImage={setImage}
                    key={index}/>
            ))}
            </Wrapper>
        </div>
        {image && (
          <Lightbox
            mainSrc={image + '?w=2048&h=2048&fl=progressive&q=95'}
            // nextSrc={images[(photoIndex + 1) % images.length]}
            // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setImage(null)}
          />
        )}
        </>
    )
}

export default GalleryGrid