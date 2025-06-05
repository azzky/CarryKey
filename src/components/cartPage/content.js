import React, { useEffect } from 'react';
import useCart from "@hooks/useCart";
import Item from './cartItem';
import Link from "@components/intl/link";
import Recommend from './recommend';
import reduxStore from '../../redux/store';
import {cartData } from '../../redux/actions'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { currency, shippingValue } from '@constants';
import { useForm } from "react-hook-form";

import Wrapper, { Summary, Items, WhatsNextWrapper, Success, EmptyCart } from "./content.styled";
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';

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
                <p className='heading'><FormattedMessage id="cart.whatsNextTitle"/></p>
                <p><FormattedMessage id="cart.whatsNextText1"/></p>
                <p><FormattedMessage id="cart.whatsNextText2"/></p>
            </div>
        </div>
    </WhatsNextWrapper>
)

const Content = ({posts, lang}) => {
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
        haveMerch,
        // setEmail,
        orderData,
        setOrderData,
        total,
        setTotal
} = useCart({
        posts, lang
    });

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm()
    const intl = useIntl()
    useEffect(() => {
        if(showSuccess) {
            reduxStore.dispatch(cartData([]))
            localStorage.removeItem('cart')
        }
    }, [showSuccess]);
    
    return showSuccess ? (
        <Success>
            <div>
                <img alt="" src="success.webp"/>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.33 371.87">
                    <path className="el" d="m.5,0s1.97,143.1,67.05,206.51c65.08,63.41,207.95,82.9,186.43,47.67-21.51-35.23-37.67,10.92-34.65,40.27,3.02,29.35,39.24,80.86,94.53,76.67,55.29-4.19,159.43-75.38,223.15-25.07"/>
                </svg>
                <div>
                    <p className='text'>
                        <FormattedMessage id="cart.success1"/>
                        <br/>
                        <FormattedMessage id="cart.success2"/>
                    </p>
                    <Link className='link' to='/shop' lang={lang}>
                        <FormattedMessage id="cart.backToShop"/>
                    </Link>
                </div>
            </div>
        </Success>
    ) : (
        <>
        <Wrapper>
            <Items>
                <h1>
                    <span>
                        <FormattedMessage id="cart.basket"/>
                    </span>
                    <FormattedMessage id="cart.quantity"/> {cart.length}
                </h1>
                {cart.length > 0 && <ul>
                    {cart.map(item => {
                        return (
                            <Item key={item.postId}
                                item={item}
                                lang={lang}
                                removeItem={removeItem}/>
                        )
                    })}
                </ul>}
                {!cart?.length && <EmptyCart><FormattedMessage id="cart.empty"/></EmptyCart>}
            </Items>
            {cart.length > 0 && <>
                <Summary>
                <h2><FormattedMessage id="cart.summary"/></h2>
                {cart.map(item => {
                    return (
                        <p key={item.postId}>
                            {item.title}
                            <span>
                                <FormattedNumber style="currency"
                                    currency={currency[lang].code}
                                    value={item.priceType === 'min' ? item.price : item.priceMax}/>
                            </span>
                        </p>
                    )
                })}
                {haveMerch && <p>
                    <FormattedMessage id="cart.shipping"/>
                    <span>
                        <FormattedNumber style="currency"
                            currency={currency[lang].code}
                            value={shippingValue}/>
                    </span>
                </p>}
                <p>
                    <FormattedMessage id="cart.total"/>
                    <span>
                        <FormattedNumber style="currency"
                            currency={currency[lang].code}
                            value={haveMerch ? totalValue + shippingValue : totalValue}/>
                    </span>
                </p>
                <form onSubmit={handleSubmit(proceedToPayment)}>
                    {haveMerch && <>
                        <label htmlFor="address">
                            <FormattedMessage id="cart.shippingLabel"/>
                        </label>
                        <input
                        style={{ width: 'initial', marginInlineStart: '10px'}}
                        placeholder={intl.formatMessage({id: 'cart.emailPlaceholder'})}
                        name="address"
                        id="address"
                        type="checkbox"
                        {...register('address', { required: true })}
                        />
                        {errors.address && <div style={{ color: 'red'}}><FormattedMessage id="cart.shippingHint"/></div>}
                    </>}
                    {/* {haveMerch && <>
                        <label className="visually-hidden"
                        htmlFor="address">
                        shipping address
                    </label>
                    <textarea
                        placeholder='Enter your address'
                        name="address"
                        type="text"
                        {...register('address', { required: true })}
                        />
                        {errors.address && <div>This field is required for merch delivery</div>}
                    </>} */}
                    <label className="visually-hidden"
                        htmlFor="email">
                        <FormattedMessage id="cart.email"/>
                    </label>
                    <input
                        placeholder={intl.formatMessage({id: 'cart.emailPlaceholder'})}
                        name="email"
                        type="email"
                        required
                        {...register('email', { required: true })}
                        />
                        {errors.email && <div><FormattedMessage id="global.requred"/></div>}
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
                    {!showPaypal && <button type="submit" className="button"
                        disabled={isSubmitting}>
                            <FormattedMessage id="cart.order"/>
                        </button>}
                </form>
                {showPaypal && <PayPalScriptProvider options={{
                    currency: currency[lang].code,
                    clientId: process.env.GATSBY_CLIENT_ID,
                    intent: "capture"
                }}>
                    <PayPalButtons style={style}
                        createOrder={createOrder}
                        onApprove={onApprove}/>
                </PayPalScriptProvider>}
                <Link to="/shop" className="continue" lang={lang}><FormattedMessage id="set.continue"/></Link>
            </Summary>
            <WhatsNext/>
            </>}
        </Wrapper>
        <Recommend posts={recommendArr} lang={lang}/>
        </>
    )
}

export default Content

export const Head = () => {
    return (
        <>
            <script src={"https://www.paypal.com/sdk/js?client-id="+process.env.GATSBY_CLIENT_ID} defer="true"/>
        </>
    )
}