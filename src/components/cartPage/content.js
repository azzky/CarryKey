import React, { useEffect } from 'react';
import useCart from "@hooks/useCart";
import Item from './cartItem';
import { Link } from 'gatsby';
import Recommend from './recommend';
import reduxStore from '../../redux/store';
import {cartData } from '../../redux/actions'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { currency } from '@constants';
import { useForm } from "react-hook-form";
// import useLocalStorage from "@hooks/useLocalStorage"

import Wrapper, { Summary, Items, WhatsNextWrapper, Success, EmptyCart } from "./content.styled";

const options = {
    currency: "USD",
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    intent: "capture"
};

const style = {
    layout: "vertical",
    shape: "pill",
    height: 38,
    color: 'blue',
    label: 'checkout'
}

const WhatsNext = () => (
    <WhatsNextWrapper>
        <div className='item'>
            <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#hand'/>
            </svg>
            <div>
                <p className='heading'>What happens after the purchase</p>
                <p>Enter your e-mail and I’ll contact you to discuss the payment method and offer you a juicy discount ;)</p>
            </div>
        </div>
    </WhatsNextWrapper>
)

const Content = ({posts}) => {
    const {
        cart,
        totalValue,
        removeItem,
        // clickHandler,
        recommendArr,
        // email,
        showPaypal,
        // submitEmail,
        // showEmailReq,
        onApprove,
        createOrder,
        // formEdit,
        // setFormEdit,
        // handleOrder,
        showSuccess,
        // isButtonDisabled,
        proceedToPayment,
        // setEmail,
        orderData,
        setOrderData,
        total,
        setTotal
} = useCart({
        posts
    });

    const { register, handleSubmit, formState: {errors, isSubmitSuccessful, isSubmitting} } = useForm()
    // const {removeValue} = useLocalStorage()
    useEffect(() => {
        if(showSuccess) {
            reduxStore.dispatch(cartData([]))
            localStorage.removeItem('cart')
            // removeValue('cart')
        }
    }, [showSuccess]);

    console.log('aaa', process.env.NEXT_PUBLIC_CLIENT_ID);

    
    return showSuccess ? (
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
                <form onSubmit={handleSubmit(proceedToPayment)}>
                    <label className="visually-hidden"
                        htmlFor="email">
                        email
                    </label>
                    <input
                        placeholder='Enter your email'
                        name="email"
                        type="email"
                        {...register('email', { required: true })}
                        />
                        {errors.email && <div>This field is required</div>}
                    <textarea
                        className="visually-hidden"
                        name="order"
                        value={orderData}
                        required
                        aria-required="true"
                        onChange={e => setOrderData(e.target.value)}
                        {...register('data', { required: true })}/>
                    <input
                        placeholder='total'
                        className="visually-hidden"
                        name="total"
                        value={total}
                        type="text"
                        required
                        aria-required="true"
                        onChange={e => setTotal(e.target.value)}
                        {...register('total', { required: true})}
                        />
                    {!showPaypal && <input type="submit" className="button"
                        disabled={isSubmitting}
                        value="Order now"/>}
                </form>
                {showPaypal && <PayPalScriptProvider options={options}>
                    <PayPalButtons style={style}
                        createOrder={createOrder}
                        onApprove={onApprove}/>
                </PayPalScriptProvider>}
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

export const Head = () => {
    return (
        <>
            <script src={"https://www.paypal.com/sdk/js?client-id="+process.env.NEXT_PUBLIC_CLIENT_ID} defer="true"/>
        </>
    )
}