import React from "react"
import Slider from "react-slick";
import useWidth from "@hooks/useWindowSize";
import fixImageUrl from '@utils/imageUrl';

import Wrapper, { RatingItem } from "./feedback.styled";

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1
};

const feedBackValue = (num) => {
    let string = ''
    for (let i = 1;i < 6;i++) {
        string = string + (i <= num ? '★' : '☆')
    }
    return string
}

const calculateAverage = (reviews) => {
    const initialData = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    }
    const renderRating = []
    for (let i = 0;i < reviews.length;i++) {
        initialData[reviews[i].rating] = initialData[reviews[i].rating] + 1
    }
    const count = initialData[1] + initialData[2] + initialData[3] + initialData[4] + initialData[5]
    for (let i = 0;i < 5;i++) {
        renderRating.push({
            value: feedBackValue(i + 1),
            count: initialData[i+1],
            percentage: initialData[i+1] / count * 100
        })
    }
    initialData.avg = ((1*initialData[1]) + (2*initialData[2]) + (3*initialData[3]) + (4*initialData[4]) + (5*initialData[5])) / count
    return { average: initialData.avg, renderRating: renderRating.reverse() }
}

const Feedback = ({reviews}) => {
    const { average, renderRating } = calculateAverage(reviews)
    const {isDesktop, isMobile} = useWidth();
    return (
        <Wrapper $width={average * 20}>
            <h2>Feedback</h2>
            <div className="starRating">
                <div>
                    <div className="average">
                        <p className="value">{average.toFixed(2)}</p>
                        <div className="progress">
                            <p className="full">★★★★★</p>
                            <p className="empty">☆☆☆☆☆</p>
                        </div>
                    </div>
                    <div className="items">
                        {renderRating.map(rating => (
                            <RatingItem $value={rating.percentage}>
                                <p className="value">{rating.value}</p>
                                <div className="progressbar"/>
                                <p className="count">{rating.count}</p>
                            </RatingItem>
                        ))}
                    </div>
                </div>
            </div>
            <Slider {...settings}
                slidesToShow={isMobile ? 2 : isDesktop ? 6 : 4}>
                {reviews.map((item, index) => {
                    return (
                    <div key={'slider-'+index} className="item">
                        <img alt="" src={fixImageUrl(item.avatar.asset.url)} srcSet={`${fixImageUrl(item.avatar.asset.url)}?w=242&h=363&q=90 1x,
                            ${fixImageUrl(item.avatar.asset.url)}?w=484&h=726&q=90 2x`} loading="lazy"/>
                        <div className="content">
                            <p className="nickname">{item.name}</p>
                            <p className="rating">{feedBackValue(item.rating)}</p>
                            <p className="text">{item.text.text}</p>
                        </div>
                    </div>
                )})}
            </Slider>
        </Wrapper>
    )
}

export default Feedback