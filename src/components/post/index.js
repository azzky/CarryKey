import React, { useCallback, useState } from "react";
import useBasket from "@hooks/useBasket";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Item = (props) => {
    const {post} = props
    const {addItem, cart, editItem} = useBasket();
    const isInCart = cart && cart.filter(el => el.postId === post.postId).length > 0
    const preselectedType = (cart && cart.filter(el => el.postId === post.postId)?.[0]?.priceType) || null;
    const [priceType, setPriceType] = useState(preselectedType)

    
    console.log(post.postId);
    console.log(cart);
    console.log(isInCart);

    const handler = useCallback(() => {
        addItem(post, priceType)
    }, [addItem, post, priceType])

    const priceSelect = useCallback(value => {
        setPriceType(value)
    }, [])

    return (
        <>
            <h1>{post.title}</h1>
            <div>
                {post.gallery.map(pic => {
                    const image = getImage(pic)
                    return (
                        <GatsbyImage key={pic.file.url} image={image} alt="" />
                    )
                })}
            </div>
            <p>select price:</p>
            <button onClick={() => priceSelect('min')} disabled={priceType === 'min'}>{'min: '+post.price}</button>
            <button onClick={() => priceSelect('max')} disabled={priceType === 'max'}>{'full: '+post.priceMax}</button>
            <button onClick={isInCart ? () => editItem(priceType, post.postId) : handler}>{isInCart ? 'Edit' : 'Add to cart'}</button>
        </>
    )
}

export default Item;