function cartReducer(state, {type, payload}){
    console.log("cartreduecr here")
    
    switch (type) {
        case "ADD_TO_CART":
            return {...state,
            cart:payload,
            cartCount:payload.length,
            cartTotalPrice: payload.reduce((acc, curr) => (acc += curr.price.original * curr.qty), 0),
            cartFinalPrice: payload.reduce((acc, curr) => (acc += curr.price.discounted * curr.qty), 0)
            }
            
    
        default:
            break;
    }

    return state
    
}

export {cartReducer}