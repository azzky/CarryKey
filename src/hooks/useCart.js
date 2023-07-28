import React from "react"
import { useCallback, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useCart = () => {
    const [value, setValue] = useLocalStorage("cart", "");
    const [cart, setCart] = useState(value || []);

    const addItem = useCallback((post) => {
        let arr = [...value]
        if(value && value.filter(el => el.postId === post.postId)) {
            return
        } else {
            arr.push(post)
        }
        setCart(arr);
        setValue(arr);
    }, [setValue, value]);
    
    return {
        cart,
        addItem
    }
}

export default useCart