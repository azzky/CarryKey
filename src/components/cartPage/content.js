import React, { useEffect } from 'react';
import useCart from "@hooks/useCart";
import Item from './cartItem';
import { Link } from 'gatsby';
import Recommend from './recommend';
import { useForm as useFormSpreeForm, ValidationError } from '@formspree/react';
import reduxStore from '../../redux/store';
import {cartData } from '../../redux/actions'
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { currency } from '@constants';
// import { useForm } from "react-hook-form";

import Wrapper, { Summary, Items, WhatsNextWrapper, Success, EmptyCart } from "./content.styled";

// const options = {
//     currency: "EUR",
//     clientId: process.env.CLIENT_ID
// };

// const style = {
//     layout: "vertical",
//     shape: "pill",
//     height: 38,
//     color: 'blue',
//     label: 'checkout'
// }

const WhatsNext = () => (
    <WhatsNextWrapper>
        <div className='item'>
            <svg width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#numbers'/>
            </svg>
            <div>
                <p className='heading'>What happens after the purchase</p>
                <p>Brief information for the buyer.</p>
                <p>Brief information for the buyer.</p>
                <p>Brief information for the buyer.</p>
            </div>
        </div>
        <div className='item'>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#clock'/>
            </svg>
            <div>
                <p className='heading'>What happens after the purchase</p>
                <p>Brief information for the buyer.</p>
                <p>Brief information for the buyer.</p>
                <p>Brief information for the buyer.</p>
                <p>Brief information for the buyer.</p>
            </div>
        </div>
        <div className='item'>
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#hand'/>
            </svg>
            <div>
                <p className='heading'>What happens after the purchase</p>
                <p>Brief information for the buyer.</p>
                <p>Brief information for the buyer.</p>
            </div>
        </div>
        {/* <div className='payments'>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#paypalicon'/>
            </svg>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#paypalicon'/>
            </svg>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#paypalicon'/>
            </svg>
        </div> */}
    </WhatsNextWrapper>
)

const Content = ({posts}) => {
    const {
        cart,
        totalValue,
        removeItem,
        // clickHandler,
        recommendArr,
        email,
        // showPaypal,
        // submitEmail,
        // showEmailReq,
        // onApprove,
        // formEdit,
        // setFormEdit,
        // handleOrder,
        // showSuccess,
        // isButtonDisabled,
        setEmail,
        orderData,
        setOrderFata,
        total,
        setTotal
} = useCart({
        posts
    });
    const [state, handleSubmit] = useFormSpreeForm('xvoewgal');
    useEffect(() => {
        if(state.succeeded) {
            reduxStore.dispatch(cartData([]))
            localStorage.removeItem('cart')
        }
    }, [state.succeeded]);
    
    return state.succeeded ? (
        <Success>
            <div>
                <img alt="" src="success.webp"/>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.33 371.87">
                    <path className="el" d="m.5,0s1.97,143.1,67.05,206.51c65.08,63.41,207.95,82.9,186.43,47.67-21.51-35.23-37.67,10.92-34.65,40.27,3.02,29.35,39.24,80.86,94.53,76.67,55.29-4.19,159.43-75.38,223.15-25.07"/>
                </svg>
                <div>
                    <p className='text'>Your order is succeeded!<br/>We'll contact you soon</p>
                    <Link className='link' to='/shop'>Go back to Shop</Link>
                </div>
            </div>
        </Success>
    ) : (
        <>
        <Wrapper>
            <Items>
                <h1>
                    <span>Basket</span>
                    {` (Quantity: ${cart.length})`}
                </h1>
                {cart.length > 0 && <ul>
                    {cart.map(item => {
                        return (
                            <Item key={item.postId}
                                item={item}
                                removeItem={removeItem}/>
                        )
                    })}
                </ul>}
                {!cart?.length && <EmptyCart>You have no items in your cart</EmptyCart>}
            </Items>
            {cart.length > 0 && <>
                <Summary>
                <h2>Order summary</h2>
                {cart.map(item => {
                    return (
                        <p key={item.postId}>
                            {item.title}
                            <span>{currency+(item.priceType === 'min' ? item.price : item.priceMax)}</span>
                        </p>
                    )
                })}
                <p>
                    Together
                    <span>{currency + totalValue}</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <label className="visually-hidden"
                        htmlFor="email">
                        email
                    </label>
                    <input
                        placeholder='Enter your email'
                        name="email" value={email} type="email" required aria-required="true"
                        onChange={e => setEmail(e.target.value)}/>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        className="visually-hidden"
                        name="order" value={orderData} required aria-required="true"
                        onChange={e => setOrderFata(e.target.value)}/>
                    <input
                        className="visually-hidden"
                        name="total" value={total} type="text" required aria-required="true"
                        onChange={e => setTotal(e.target.value)}/>
                    <button  className="button" type="submit" disabled={state.submitting || state.errors}>
                        Order now
                    </button>
                </form>
                {/* {showPaypal && <PayPalScriptProvider options={options}>
                    <PayPalButtons style={style}
                        onClick={clickHandler}
                        onApprove={onApprove}/>
                </PayPalScriptProvider>}
                {!showPaypal && <button  className="button"
                    onClick={() => proceedToPayment()}>
                    Pay with paypal
                </button>} */}
                <Link to="/shop" className="continue">Continue shopping</Link>
            </Summary>
            <WhatsNext/>
            </>}
        </Wrapper>
        <Recommend posts={recommendArr} />
        </>
    )
}

export default Content

// export const Head = () => {
//     return (
//         <>
//             <script src={"https://www.paypal.com/sdk/js?client-id="+process.env.CLIENT_ID} defer="true"/>
//         </>
//     )
// }