import React, { useState } from 'react';
import Layout from '@components/layout'
import useCart from "@hooks/useCart";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {createClient} from 'contentful-management';
import { Link } from 'gatsby';

const Cart = () => {
    const {cart, removeItem} = useCart();
    const [order, setOrder] = useState(null);
    const entryFields = {
            email: {
                'en-US':'test@test.com',
            },
            status: {
                'en-US': 'unpaid'
            },
            // sets: cart.map(set=>({
            //         id: {'en-US': set.id},
            //         postId: {'en-US': set.postId},
            //         title: {'en-US': set.title},
            //         // preview: {'en-US': set.preview},
            //     })),
            priceType: {
                'en-US': [...cart.map(set=>`${set.title} (id ${set.postId}) | ${set.priceType}`)]
            }
        }
    const contentType = 'order' // Contentful model type
    const clickHandler = async () => {
        const client = await createClient({
            accessToken: process.env.PERSONAL_TOKEN
        })
        const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
        const env = await space.getEnvironment('master')
        // Execute entry creation
        console.log({fields: entryFields});
        const entry = await env.createEntry(contentType, {
                fields: entryFields
            });
            // If we get a new entry ID, then success, otherwise default to null
        const newEntryId = entry.sys.id ?? null;
        if (newEntryId) setOrder(entry);
        console.log('order started');
    }
    const publishOrder = () => {
        console.log(order);
        order.fields.status['en-US'] = 'paid'
        order.update();
        console.log('paid, now can remove order');
        // TODO remove cart localStorage here
    }
    return (
        <Layout hasNavigation isCart
            h1={'Cart'}>
            <div>
                <h2>{`Basket (quantity: ${cart.length})`}</h2>
                {cart.map(item => {
                    const {postId, title, priceType, price, priceMax, preview} = item;
                    const image = getImage(preview)
                    return (
                        <div key={postId}>
                            <GatsbyImage image={image} layout="fill" alt="" />
                            <p>{title}</p>
                            <p>{priceType === 'min' ? price : priceMax}</p>
                            <Link to={'/shop/post/'+postId}>Edit</Link>
                            <button onClick={() =>removeItem(item)}>remove</button>
                        </div>
                        
                    )
                })}
            </div>
            <div>
                <p>total</p>
                <button onClick={clickHandler} className="button">Checkout</button>
                <button onClick={publishOrder}>when payment done</button>
            </div>
        </Layout>
    )
}

export default Cart;