import React from 'react';
import useCart from "@hooks/useCart";
import Item from './cartItem';
import { Link } from 'gatsby';
import Recommend from './recommend';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { currency } from '@constants';
import { useForm } from "react-hook-form"

import Wrapper, { Summary, Items, WhatsNextWrapper } from "./content.styled";

const options = {
    currency: "EUR",
    clientId: process.env.CLIENT_ID
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
        <div className='payments'>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#paypalicon'/>
            </svg>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#paypalicon'/>
            </svg>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href='#paypalicon'/>
            </svg>
        </div>
    </WhatsNextWrapper>
)

const Content = ({posts}) => {
    const {
        cart,
        totalValue,
        removeItem,
        clickHandler,
        recommendArr,
        email,
        showPaypal,
        proceedToPayment,
        submitEmail,
        showEmailReq,
        onApprove,
        formEdit,
        setFormEdit
    } = useCart({posts})
    const { register, handleSubmit, formState: {errors} } = useForm()
    
    console.log(showEmailReq);
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
                            <span>{currency+(item.priceType === 'min' ? item.price : item.priceMax)}</span>
                        </p>
                    )
                })}
                <p>
                    Together
                    <span>{currency + totalValue}</span>
                </p>
                {(!email || formEdit) ? <form className="form"
                    onSubmit={handleSubmit(submitEmail)}>
                    <input type='email' placeholder='Enter your email'
                        {...register("email", { required: true })}/>
                    <button type='submit'>Add...</button>
                    {(errors.email || showEmailReq) && <p className='error'>
                        You need to set your email first!
                    </p>}
                </form> : <div className="form">
                    <p>{email}</p>
                    <button onClick={() => setFormEdit(true)}>Edit</button>
                </div>}
                {showPaypal && <PayPalScriptProvider options={options}>
                    <PayPalButtons style={style}
                        onClick={clickHandler}
                        onApprove={onApprove}/>
                </PayPalScriptProvider>}
                {!showPaypal && <button  className="button"
                    onClick={() => proceedToPayment()}>
                    Go to checkout
                </button>}
                <Link to="/shop" className="continue">Continue shopping</Link>
            </Summary>
            <WhatsNext/>
        </Wrapper>
        <Recommend posts={recommendArr} />
        </>
    )
}

export default Content

export const Head = () => {
    return (
        <>
            <script src={"https://www.paypal.com/sdk/js?client-id="+process.env.CLIENT_ID} defer="true"/>
        </>
    )
}