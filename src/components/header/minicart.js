import React from "react"
import useCart from '../../hooks/useCart';
// import useCart from "@/hooks/useCart";
import { useState, useEffect } from 'react';
import MiniCartWrapper from './minicart.styled'

const MiniCart = () => {
    const {cart} = useCart()
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <MiniCartWrapper>
            <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href="#basket"/>
            </svg>
            <p>{isClient ?`${cart.length || 0}` : '0'}</p>
        </MiniCartWrapper>
    )
}

export default MiniCart;