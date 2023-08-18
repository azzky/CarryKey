import { createStore } from 'redux';
import Reducer from './reducer';
let arr = []
try {
    const value = window.localStorage.getItem('cart')
    // Check if the local storage already has any values,
    // otherwise initialize it with the passed initialValue
    if (value) arr = JSON.parse(value)
} catch (error) {
    console.log(error)
}

const initialState = {
    cart: {
        items: arr
    }
}
// const tools = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : ()=>{return {}}
const store = createStore(Reducer, initialState);

export default store;