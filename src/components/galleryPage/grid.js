import React, { useCallback, useState } from "react"
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
            <img src={post.asset.url + '?w=400&h=400&q=90&fm=webp'}
                alt={'Gallery item ' + post.photoIndex}
                srcSet={`${post.asset.url}?w=400&h=400&q=90&fm=webp 1x,
                    ${post.asset.url}?w=800&h=800&q=90&fm=webp 2x`}
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
          <Lightbox className="lightbox"
            mainSrc={images[photoIndex].asset.url +'?w=1920&h=1920&q=100&fm=webp'}
            nextSrc={images[photoIndex < images.length -1 ? photoIndex + 1 : 0].asset.url + '?w=1920&h=1920&&q=100&fm=webp'}
            prevSrc={images[photoIndex > 0 ? photoIndex - 1 : images.length - 1].asset.url + '?w=1920&h=1920&q=100&fm=webp'}
            onCloseRequest={() => setImage(null)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          />
        )}
        </>
    )
}

export default GalleryGrid