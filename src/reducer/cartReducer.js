function cartReducer({
    cart,
    cartCount,
    cartTotalPrice,
    cartFinalPrice
}, {
    type,
    payload
}) {
    console.log("cartreduecr here")
    
    switch(type){
        case "ADD_TO_CART":
            console.log(cart)
    }
    
}

export {cartReducer}