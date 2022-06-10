function wishlistReducer(state, {type, payload}){
    
    switch (type) {
        case "ADD_TO_WISHLIST":
        case "REMOVE_FROM_WISHLIST":

            return {...state, wishItems:payload, wishCount:payload.length}
            
          
    
        default:
            state
    }
}

export {wishlistReducer}