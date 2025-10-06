import React, {useState} from "react";
import Slider from "react-slick";
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import useWidth from "@hooks/useWindowSize";
import fixImageUrl from '@utils/imageUrl';

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
    post, nav1, nav2, setNav1, setNav2, isDesktop
}) => {
    return (
        <div className="images-grid">
            {post.gallery?.length > 1 ? (
                // big images on pdp
                <Gallery>
                <Slider {...settings(isDesktop)}
                className="gallery"
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}>
                {post.gallery.map((pic, index) => {
                    return pic.asset &&
                    <Item key={pic.asset.url}
                        original={pic.asset.url + '?w=1920&h=1920&q=100&fm=webp'}
                        thumbnail={pic.asset.url + '?w=80&h=80&q=90&fm=webp'}
                        width={pic.asset.width}
                        height={pic.asset.height}
                    >
                        {({ ref, open }) => (
                            <img ref={ref} onClick={open} src={pic.asset.url + '?w=450&fm=webp&q=90'}
                                alt={`${post.title} set image ${index + 1}`}
                                loading="lazy"
                                srcSet={`${fixImageUrl(pic?.asset?.url)}?w=450&fm=webp&q=90 1x,
                                    ${fixImageUrl(pic?.asset?.url)}?w=900&fm=webp&q=90 2x`}
                                className="slide-pic"/>
                        )}
                    </Item>
                })}
            </Slider>
            </Gallery>
            // single big image on pdp
            ) : post.gallery?.length === 1 ? (
                <Gallery>
                    <Item key={post.gallery[0].asset.url}
                        original={post.gallery[0].asset.url + '?w=1920&h=1920&q=100&fm=webp'}
                        thumbnail={post.gallery[0].asset.url + '?w=80&h=80&q=90&fm=webp'}
                        width={post.gallery[0].asset?.width || '1920'}
                        height={post.gallery[0].asset?.height || 'auto'}
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open} src={post.gallery[0].asset.url + '?w=450&fm=webp&q=90'}
                            alt={`${post.title} set image`}
                            loading="lazy"
                            srcSet={`${fixImageUrl(post.gallery[0]?.asset?.url)}?w=450&fm=webp&q=90 1x,
                                ${fixImageUrl(post.gallery[0]?.asset?.url)}?w=900&fm=webp&q=90 2x`}
                            className="slide-pic"/>
                    )}
                    </Item>
                </Gallery>
            ) : (
            <img src={post.preview.asset.url + '?w=450&fm=webp&q=90'}
                alt={`thumbnail for ${post.title} set`}
                loading="lazy"
                srcSet={`${fixImageUrl(post.preview?.asset?.url)}?w=450&fm=webp&q=90 1x,
                    ${fixImageUrl(post.preview?.asset?.url)}?w=900&fm=webp&q=90 2x`}
                className="slide-pic"/>
                        )}
            {/* thumbnails */}
            {post.gallery?.length > 1 && <Slider {...thumbSliderSettings}
                className="nav"
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}>
                {post.gallery.map((pic, index) => {                            
                    return post.preview.asset?.url && (
                        pic.asset && <img src={fixImageUrl(pic.asset.url + '?w=250&fm=webp&q=90')}
                        key={pic.asset.url}
                        className="thumb"
                        loading="lazy"
                        srcSet={`${fixImageUrl(pic.asset?.url)}?w=250&fm=webp&q=85 1x,
                                    ${fixImageUrl(pic.asset?.url)}?w=500&fm=webp&q=85 2x`}
                        alt={`thumbnail for ${post.title} set ${index + 1}`}/>
                    )
                })}
            </Slider>}
        </div>
    )
}

const MobileGallery = ({ post, isDesktop, isMobile }) => {
    return (
        <div className="images-grid">
            {post.gallery.length > 1 ? (
            <Gallery>
                <Slider {...settings(isDesktop)} slidesToShow={isMobile ? 1 : 3}>
                    {post.gallery.map((pic, index) => {
                        return pic.asset && (
                            <Item key={pic.asset.url}
                                original={pic.asset.url + '?w=1920&h=1920&q=100&fm=webp'}
                                thumbnail={pic.asset.url + '?w=80&h=80&q=90&fm=webp'}
                                width={pic.asset.width}
                                height={pic.asset.height}
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open}
                                    src={fixImageUrl(pic.asset.url + '?w=280&fm=webp&q=90')}
                                    className="slide-pic"
                                    loading="lazy"
                                    srcSet={`${fixImageUrl(pic.asset?.url)}?w=280&fm=webp&q=85 1x,
                                            ${fixImageUrl(pic.asset?.url)}?w=560&fm=webp&q=85 2x`}
                                    alt={`${post.title} - ${index + 1}`}/>
                            )}
                            </Item>
                        )
                    })}
                </Slider>
            </Gallery>
            ) : post.gallery.length === 1 && (
            <Gallery>
                <Item key={post.gallery[0]?.asset?.url || 'video'}
                        original={post.gallery[0].asset.url + '?w=1920&h=1920&q=100&fm=webp'}
                        thumbnail={post.gallery[0].asset.url + '?w=80&h=80&q=90&fm=webp'}
                        width={post.gallery[0].asset?.width || '1920'}
                        height={post.gallery[0].asset?.height || 'auto'}
                    >
                    {({ ref, open }) => (
                        <img ref={ref} onClick={open}
                            src={fixImageUrl(post.preview.asset.url + '?w=280&fm=webp&q=90')}
                            className="slide-pic"
                            loading="lazy"
                            srcSet={`${fixImageUrl(post.preview.asset?.url)}?w=280&fm=webp&q=85 1x,
                                    ${fixImageUrl(post.preview.asset?.url)}?w=560&fm=webp&q=85 2x`}
                            alt={post.title}/>
                    )}
                    </Item>
            </Gallery>
            )}
        </div>
    )
}

const GalleryEl = ({ post }) => {
    const {isDesktop, isMobile} = useWidth();
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    
    return <>
        {isDesktop ?
        <DesktopGallery
        post={post}
        nav1={nav1}
        nav2={nav2}
        setNav1={setNav1}
        setNav2={setNav2}
        isDesktop={isDesktop}
        /> :
        <MobileGallery
        post={post}
        isDesktop={isDesktop}
        isMobile={isMobile}
        />}
    </>
}

export default GalleryEl;