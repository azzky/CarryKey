import { useCallback, useState, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const useCart = () => {
    const [value, setValue] = useLocalStorage("cart", "");
    const [cart, setCart] = useState(value || []);
    // const [cartItems, setCartItems] = useCart(0);

    const addItem = useCallback((post, priceType) => {
        post.priceType = priceType
        let arr = [...value]
        if(value && value.filter(el => el.postId === post.postId)) {
            return
        } else {
            arr.push(post)
        }
        setCart(arr);
        setValue(arr);
        // setCartItems(prev=>prev+1)
    }, [setValue, value]);
    
    return {
        cart,
        cartItems: cart.length,
        addItem
    }
}

export default useCart