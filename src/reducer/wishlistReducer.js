function wishlistReducer(state, {type, payload}){
    switch (type) {
        case "ADD_TO_WISHLIST":
            return {...state, wishItems:payload, wishCount:payload.length}
            
            break;
    
        default:
            state
    }
}

export {wishlistReducer}