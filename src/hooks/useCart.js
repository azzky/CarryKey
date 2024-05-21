import { useState, useRef } from 'react'
import useBasket from "@hooks/useBasket"
import {createClient} from 'contentful-management'
// import useLocalStorage from "./useLocalStorage"
import { currency } from '@constants';
// import { useForm as useFormSpreeForm } from '@formspree/react';

const useCart = ({
    posts
}) => {
    const {cart, removeItem} = useBasket()
    let recommendArr = posts
    // const [order, setOrder] = useState(null)
    const orderNumber = useRef(null)
    const email = useRef('')
    const [orderData, setOrderData] = useState(cart.length > 0 ? `
Order info:
        ${cart.map((product, i) => {
            return `
product ${i + 1}:
title: ${product.title};
id: ${product.postId};
set price: ${product.priceType} - ${product.priceType === 'min' ? product.price : product.priceMax}${currency};
`;
        })}
    ` : '')
    const [showPaypal, setShowPaypal] = useState(false)
    // const [showEmailReq, setShowEmailReq] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    // const [formEdit, setFormEdit] = useState(false)
    // const {removeValue} = useLocalStorage()
    // const [state, handleOrder] = useFormSpreeForm(process.env.ORDERFORM_FORMSPREE_KEY);
    // console.log(state);

    let totalValue = 0

    cart.map(item => {
        totalValue = totalValue + (item.priceType === 'min' ? item.price : item.priceMax);
        recommendArr = recommendArr.filter(post => post.postId !== item.postId)
        return null
    })
    const [total, setTotal] = useState(totalValue > 0 ? (totalValue + currency) : '')
    const entryFields = {
            email: {
                'en-US': email.current,
            },
            status: {
                'en-US': 'unpaid'
            },
            // TODO before local test update order key locally to yours!!!!!!!!!!!!!
            // sets: cart.map(set=>({
            //         id: {'en-US': set.id},
            //         postId: {'en-US': set.postId},
            //         title: {'en-US': set.title},
            //         // preview: {'en-US': set.preview},
            //     })),
            priceType: {
                'en-US': [...cart.map(set=>`${set.title} (id ${set.postId}) | ${set.priceType === 'min' ? 'cosplay' : 'topless'}`)]
            }
        }
    const contentType = 'order' // Contentful model type
    const clickHandler = async (e = email.current) => {
        const client = await createClient({
            accessToken: process.env.PERSONAL_TOKEN
        })
        const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
        const env = await space.getEnvironment('master')
        // Execute entry creation
        const entry = await env.createEntry(contentType, {
            fields: entryFields
        });

        console.log('fiedls', entryFields, e);
        // If we get a new entry ID, then success, otherwise default to null
        // setOrder(entry.sys.id);
        orderNumber.current = entry.sys.id;
        console.log('order created yoba', entry);
        console.log('order started', orderNumber.current);
    }
    const publishOrder = async (n = orderNumber.current) => {
        const client = await createClient({
            accessToken: process.env.PERSONAL_TOKEN
        })
        const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
        const env = await space.getEnvironment('master');
        // Execute entry creation
        const entry = await env.getEntry(orderNumber.current);
        console.log('order number is', n);
        console.log('got an entry to edit', entry);
        entry.fields.status['en-US'] = 'paid';
        entry.update();
        // entry.publish();
        console.log('paid, now can remove order');
        // removeValue('cart');
        // TODO clear localstorage in main page
    }
    const proceedToPayment = (data) => {
        if (data.email) {
            email.current = data.email
            setShowPaypal(true)
        }
    }

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        console.log('Order', order);
        console.log('order id', data.orderId); // TODO check what we have - maybe order ID or something
        publishOrder();
        setShowSuccess(true);
    }

    console.log(cart);

    const createOrder = (data,actions) => {
        clickHandler();
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
                {
                    items: cart.map((product, i) => {
                        return {
                            name: product.title,
                            description: product.priceType === 'min' ? 'cosplay' : 'topless',
                            sku: product.postId,
                            url: process.env.SITE_URL + '/shop/post/' + product.postId,
                            quantity: 1,
                            category: 'DIGITAL_GOODS',
                            unit_amount: {
                                value: product.priceType === 'min' ? product.price : product.priceMax,
                                currency_code: 'USD'
                            }
                        }
                    }),
                    amount: {
                        value: totalValue,
                        breakdown: {
                            item_total: {
                                value: totalValue,
                                currency_code: 'USD'
                            }
                        }
                    },
                },
            ],
        });
    };
    
    return {
        cart,
        totalValue,
        removeItem,
        // clickHandler,
        proceedToPayment,
        recommendArr,
        // email,
        showPaypal,
        // showEmailReq,
        showSuccess,
        // submitEmail,
        onApprove,
        createOrder,
        // formEdit,
        // setFormEdit,
        // handleOrder,
        // showSuccess: state.succeeded,
        // isButtonDisabled: state.submitting || state.errors,
        // setEmail,
        orderData,
        setOrderData,
        total,
        setTotal
    }
}

export default useCart