import React, { useCallback, useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import Image from "@components/image";
import useShop from '@hooks/useShop'
import useWidth from '@hooks/useWindowSize'
import Lightbox from 'react-image-lightbox'

import 'react-image-lightbox/style.css';
import Wrapper from "./grid.styled";

const Item = ({post, setImage, setPhotoIndex, postIndex}) => {
    const clickHandler = useCallback(() => {
        setImage(post.asset.url)
        setPhotoIndex(post.photoIndex)
    }, [post.asset.url, post.photoIndex, setImage, setPhotoIndex]);
    
    return (
        <div className="item" onClick={clickHandler} id={post.photoIndex}>
            <Image image={post}
                alt={'Gallery item ' + post.photoIndex}
                width={400}
                />
        </div>
    )
}

const Column = ({column, index, setImage, setPhotoIndex}) => {
    return (
        <div key={index}>
            {column.map((post, postIndex) => (
                <Item post={post}
                    setImage={setImage}
                    setPhotoIndex={setPhotoIndex}
                    postIndex={index}
                    key={postIndex}/>
            ))}
        </div>
    )
}

const GalleryGrid = ({images}) => {
    const { width } = useWidth()
    const [image, setImage] = useState(null)
    const [photoIndex, setPhotoIndex] = useState(null)

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
                    setPhotoIndex={setPhotoIndex}
                    key={index}/>
            ))}
            </Wrapper>
        </div>
        {image && (
          <Lightbox
            mainSrc={images[photoIndex].asset.url +'?w=1920&h=1920&q=90'}
            nextSrc={images[photoIndex < images.length -1 ? photoIndex + 1 : 0].asset.url + '?w=1920&h=1920&&q=90'}
            prevSrc={images[photoIndex > 0 ? photoIndex - 1 : images.length - 1].asset.url + '?w=1920&h=1920&q=90'}
            onCloseRequest={() => setImage(null)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
        </>
    )
}

export default GalleryGrid