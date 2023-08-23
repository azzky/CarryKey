import { useState } from 'react'
import useBasket from "@hooks/useBasket"
import {createClient} from 'contentful-management'
import useLocalStorage from "./useLocalStorage"

const useCart = ({posts}) => {
    const {cart, removeItem} = useBasket()
    let recommendArr = posts
    const [order, setOrder] = useState(null)
    const [email, setEmail] = useState(null)
    const [showPaypal, setShowPaypal] = useState(false)
    const [showEmailReq, setShowEmailReq] = useState(false)
    const [formEdit, setFormEdit] = useState(false)
    const {removeValue} = useLocalStorage()
    let totalValue = 0
    cart.map(item => {
        totalValue = totalValue + (item.priceType === 'min' ? item.price : item.priceMax);
        recommendArr = recommendArr.filter(post => post.postId !== item.postId)
        return null
    })
    const entryFields = {
            email: {
                'en-US': email,
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
        removeValue('cart');
    }
    const proceedToPayment = () => {
        if (email) {
            setShowPaypal(true)
        } else {
            setShowEmailReq(true)
        }
    }
    const submitEmail = ({email}) => {
        setEmail(email)
        setFormEdit(false)
    }
    const onApprove = (data) => {
        console.log(data); // TODO check what we have - maybe order ID or something
        publishOrder();
    }
    return {
        cart,
        totalValue,
        removeItem,
        clickHandler,
        recommendArr,
        email,
        showPaypal,
        showEmailReq,
        proceedToPayment,
        submitEmail,
        onApprove,
        formEdit,
        setFormEdit
    }
}

export default useCart