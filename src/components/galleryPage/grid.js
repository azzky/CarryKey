import React, { useCallback, useState } from "react"
import useShop from '@hooks/useShop'
import useWidth from '@hooks/useWindowSize'

import 'photoswipe/style.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Wrapper from "./grid.styled";

const GalleryItem = ({post}) => {
    return (
        <div className="item" id={post.photoIndex}>
            <Item
                id={post.photoIndex+ '-item'}
                original={post.asset.url + '?w=1920&h=1920&q=100&fm=webp'}
                thumbnail={post.asset.url + '?w=80&h=80&q=90&fm=webp'}
                width={post.asset.width}
                height={post.asset.height}
            >
            {({ ref, open }) => (
                <img ref={ref}
                    onClick={open}
                    src={post.asset.url + '?w=400&h=400&q=90&fm=webp'}
                    srcSet={`
                        ${post.asset.url}?w=400&h=400&q=90&fm=webp 1x,
                        ${post.asset.url}?w=800&h=800&q=90&fm=webp 2x
                    `}
                    alt={`Gallery item ${post.photoIndex}`} />
            )}
            </Item>
        </div>
    )
}

const Column = ({column, index}) => {
    return (
        <div key={index}>
            {column.map((post, postIndex) => (
                <GalleryItem post={post}
                    key={postIndex}/>
            ))}
        </div>
    )
}

const GalleryGrid = ({images}) => {
    const { width } = useWidth()
    const {
        columnNumber, getWidth, postSubArray
    } = useShop(images, width, false, null, 'gallery')
    return (
        <>
        
            <Wrapper $columnNumber={columnNumber}>
                <Gallery
                    id="gallery">
                {getWidth && postSubArray.map((column, index) => (
                    <Column column={column}
                        index={index}
                        key={index}/>
                ))}
                </Gallery>
            </Wrapper>
        </>
    )
}

export default GalleryGrid