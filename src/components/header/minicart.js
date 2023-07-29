import React from "react"
import useCart from '@hooks/useCart';
import MiniCartWrapper from './minicart.styled'

const MiniCart = () => {
    const {cartItems} = useCart()

    return (
        <MiniCartWrapper>
            <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href="#basket"/>
            </svg>
            <p>{cartItems || 0}</p>
        </MiniCartWrapper>
    )
}

export default MiniCart;