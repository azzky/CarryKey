const initialState = { counterData: 1 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CARTDATA': return {
            ...state,
            cart: {
                items: action.payload
            }
        }
        default: return state
    }
}
export default reducer;