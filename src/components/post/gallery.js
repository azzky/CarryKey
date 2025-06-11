import React, {useState} from "react";
import Slider from "react-slick";
import Lightbox from 'react-image-lightbox';
import useWidth from "@hooks/useWindowSize";


const settings = (isDesktop) => {
    return isDesktop ? {
        dots: false,
        arrows: false,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        adaptiveHeight: true
    } : {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToScroll: 1
    }
};

const thumbSliderSettings = {
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    gap: 10,
    focusOnSelect: true,
    infinite: false
}

const DesktopGallery = ({
    post, clickHandler, nav1, nav2, setNav1, setNav2, isDesktop
}) => {
    return (
        <div className="images-grid">
            {post.gallery?.length > 1 ? (
                <Slider {...settings(isDesktop)}
                className="gallery"
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}>
                {post.gallery.map((pic, index) => {
                    return pic.asset &&
                        <div key={pic.asset.url} onClick={() =>clickHandler(index)}>
                            <img src={pic.asset.url + '?w=450&fm=webp&q=90'}
                                alt={`${post.title} set image ${index + 1}`}
                                srcSet={`${pic?.asset?.url}?w=450&fm=webp&q=90 1x,
                                    ${pic?.asset?.url}?w=900&fm=webp&q=90 2x`}
                                className="slide-pic"/>
                        </div>
                })}
            </Slider>
            ) : post.gallery?.length === 1 ? (
                <img src={post.gallery[0].asset.url + '?w=450&fm=webp&q=90'}
                            alt={`${post.title} set image`}
                            srcSet={`${post.gallery[0]?.asset?.url}?w=450&fm=webp&q=90 1x,
                                ${post.gallery[0]?.asset?.url}?w=900&fm=webp&q=90 2x`}
                            className="slide-pic"/>
            ) : (
            <img src={post.preview.asset.url + '?w=450&fm=webp&q=90'}
                alt={`thumbnail for ${post.title} set`}
                srcSet={`${post.preview?.asset?.url}?w=450&fm=webp&q=90 1x,
                    ${post.preview?.asset?.url}?w=900&fm=webp&q=90 2x`}
                className="slide-pic"/>
                        )}
            {post.gallery?.length > 1 && <Slider {...thumbSliderSettings}
                className="nav"
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}>
                {post.gallery.map((pic, index) => {                            
                    return post.preview.asset?.url && (
                        pic.asset && <img src={pic.asset.url + '?w=250&fm=webp&q=90'}
                        key={pic.asset.url}
                        className="thumb"
                        srcSet={`${pic.asset?.url}?w=250&fm=webp&q=85 1x,
                                    ${pic.asset?.url}?w=500&fm=webp&q=85 2x`}
                        alt={`thumbnail for ${post.title} set image ${index + 1}`}/>
                    )
                })}
            </Slider>}
        </div>
    )
}

const MobileGallery = ({ post, clickHandler, isDesktop, isMobile }) => {
    return (
        <div className="images-grid">
            {post.gallery.length > 1 ? <Slider {...settings(isDesktop)} slidesToShow={isMobile ? 1 : 3}>
                {post.gallery.map((pic, index) => {
                    return pic.asset && (
                        <div key={pic.asset.url} 
                            onClick={() =>clickHandler(index)}>
                            <img src={pic.asset.url + '?w=280&fm=webp&q=90'}
                                className="slide-pic"
                                srcSet={`${pic.asset?.url}?w=280&fm=webp&q=85 1x,
                                        ${pic.asset?.url}?w=560&fm=webp&q=85 2x`}
                                alt={`${post.title} - ${index + 1}`}/>
                        </div>
                    )
                })}
            </Slider> : (
                <img src={post.preview.asset.url + '?w=280&fm=webp&q=90'}
                    className="slide-pic"
                    srcSet={`${post.preview.asset?.url}?w=280&fm=webp&q=85 1x,
                            ${post.preview.asset?.url}?w=560&fm=webp&q=85 2x`}
                    alt={post.title}/>
            )}
        </div>
    )
}

const Gallery = ({ post }) => {
    const {isDesktop, isMobile} = useWidth();
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const clickHandler = (index) => {
        setShowLightBox(true);
        setPhotoIndex(index);
    };
    const [showLightBox, setShowLightBox] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(null);
    
    return <>
        {isDesktop ?
        <DesktopGallery
        clickHandler={clickHandler}
        post={post}
        nav1={nav1}
        nav2={nav2}
        setNav1={setNav1}
        setNav2={setNav2}
        isDesktop={isDesktop}
        /> :
        <MobileGallery
        clickHandler={clickHandler}
        post={post}
        isDesktop={isDesktop}
        isMobile={isMobile}
        />}
    {showLightBox && (
        <Lightbox
            mainSrc={post.gallery[photoIndex].asset.url +'?w=1920&h=1920&q=90&fm=webp'}
            nextSrc={post.gallery[photoIndex < post.gallery.length -1 ? photoIndex + 1 : 0]?.asset ? post.gallery[photoIndex < post.gallery.length -1 ? photoIndex + 1 : 0]?.asset?.url + '?w=1920&h=1920&q=90&fm=webp' : null}
            prevSrc={post.gallery[photoIndex > 0 ? photoIndex - 1 : post.gallery.length - 1].asset ? post.gallery[photoIndex > 0 ? photoIndex - 1 : post.gallery.length - 1]?.asset?.url + '?w=1920&h=1920&q=90&fm=webp' : null}
            onCloseRequest={() => setShowLightBox(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + post.gallery.length - 1) % post.gallery.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % post.gallery.length)}
        />
    )}
    </>
}

export default Gallery;