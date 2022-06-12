function cartReducer(state, {type, payload}){
   
    function cartCountReduce(acc, curr){
        return acc+=curr.qty
    }
    function cartTotalPriceReduce(acc, curr){
        return acc += curr.price.original * curr.qty
    }
    function cartFinalPriceReduce(acc, curr){
        return acc += curr.price.discounted * curr.qty
    }
    switch (type) {
        case "ADD_TO_CART":
        case "INCREMENT_CART":
        case "REMOVE_FROM_CART":
        case "DECREMENT_CART":
            
            return {...state,
            cart:payload,
            cartCount: payload.reduce(cartCountReduce, 0),
            cartTotalPrice: payload.reduce(cartTotalPriceReduce, 0),
               
            cartFinalPrice: payload.reduce(cartFinalPriceReduce, 0)
            }
            
    
        default:
            state
    }

    
    
}

export {cartReducer}