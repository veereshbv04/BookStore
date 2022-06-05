function wishlistReducer(state, {type, payload}){
    console.log("from wishlistreducer")
    switch (type) {
        case "ADD_TO_WISHLIST":
        case "REMOVE_FROM_WISHLIST":

            console.log("in wishlist reducer", payload)
            return {...state, wishItems:payload, wishCount:payload.length}
            
            break;
    
        default:
            state
    }
}

export {wishlistReducer}