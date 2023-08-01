import React from 'react';
import useCart from "@hooks/useCart";
import Item from './cartItem';
import { Link } from 'gatsby';
import Recommend from './recommed';

import Wrapper, { Summary, Items } from "./content.styled";

const Content = ({posts}) => {
    const {
        cart,
        totalValue,
        removeItem,
        clickHandler
    } = useCart() 
    return (
        <>
        <Wrapper>
            <Items>
                <h1>
                    <span>Basket</span>
                    {` (Quantity: ${cart.length})`}
                </h1>
                <ul>
                    {cart.map(item => {
                        return (
                            <Item key={item.postId}
                                item={item}
                                removeItem={removeItem}/>
                        )
                    })}
                </ul>
            </Items>
            <Summary>
                <h2>Order summary</h2>
                {cart.map(item => {
                    return (
                        <p key={item.postId}>
                            {item.title}
                            <span>${item.priceType === 'min' ? item.price : item.priceMax}</span>
                        </p>
                    )
                })}
                <p>
                    Together
                    <span>${totalValue}</span>
                </p>
                <button onClick={clickHandler} className="button">Go to checkout</button>
                <Link to="/shop" className="continue">Continue shopping</Link>
                {/* <button onClick={publishOrder}>when payment done</button> */}
            </Summary>
        </Wrapper>
        <Recommend posts={posts} />
        </>
    )
}

export default Content