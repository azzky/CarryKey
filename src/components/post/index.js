import React, { useCallback, useState } from "react";
import useCart from "@hooks/useCart";

const Item = (props) => {
    const {post} = props
    const [priceType, setPriceType] = useState(null)
    const {cart, addItem} = useCart();

    const handler = useCallback(() => {
        addItem(post, priceType)
    }, [addItem, post, priceType])

    const priceSelect = useCallback(value => {
        setPriceType(value)
    }, [])

    return (
        <>
            <h1>{post.title}</h1>
            <p>select price:</p>
            <button onClick={() => priceSelect('min')}>{'min: '+post.price}</button>
            <button onClick={() => priceSelect('max')}>{'full: '+post.priceMax}</button>
            <button onClick={handler}>add to cart</button>
        </>
    )
}

export default Item;