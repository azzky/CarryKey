import React from "react"
import MiniCartWrapper from './minicart.styled'
import Link from "@components/intl/link";
import { useSelector } from 'react-redux';

const MiniCart = ({lang}) => {
    const count = useSelector(state => state.cart.items);
    return (
        <MiniCartWrapper>
            <Link to="/cart" lang={lang}>
                <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#basket"/>
                </svg>
                <p>{count.length}</p>
            </Link>
        </MiniCartWrapper>
    )
}

export default MiniCart;