import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";
import { useSelector } from "react-redux";
import reduxStore from '../redux/store';
import {cartData } from '../redux/actions'
import { navigate } from "@reach/router"  

const useCart = () => {
    const [, setValue] = useLocalStorage("cart", "")
    const { items } = useSelector(state=>state.cart)

    const saveData = useCallback((data, redirect) =>{
        setValue(data); // set localstorage to keep cart on refresh
        reduxStore.dispatch(cartData(data)) // set redux too to work on a fly
        if (redirect) navigate(redirect) // TODO check on builded site
    }, [setValue])

    const addItem = useCallback((post, priceType) => {
        post.priceType = priceType
        let arr = [...items]
        if(items && items.filter(el => el.postId === post.postId).length > 0) {
            return
        } else {
            arr.push(post)
        }
        saveData(arr, false)
    }, [items, saveData]);

    const removeItem = useCallback(post => {
        let arr = [...items]
        if(items && items.filter(el => el.postId === post.postId).length > 0) {
            arr = items.filter(el => el.postId !== post.postId)
        }
        saveData(arr, false)
    }, [items, saveData])

    const editItem = useCallback((type, id) => {
        let arr = [...items]
        for(let i = 0;i < arr.length;i++) {
            if (arr[i].postId === id) {
                arr[i].priceType = type
            }
        }
        saveData(arr, '/cart')
    }, [items, saveData])
    
    return {
        addItem,
        removeItem,
        editItem,
        cart: items
    }
}

export default useCart