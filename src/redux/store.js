import { createStore } from 'redux';
import Reducer from './reducer';
let arr = []
try {
    const value = window ? window.localStorage.getItem('cart') : {}
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

const store = createStore(
    Reducer,
    initialState
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;