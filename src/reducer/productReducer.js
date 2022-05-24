function productReducer(state, action){
    const initialState  = {
        category:{fiction:true, horror:true},
        rating:"",
        sortBy:""
    }
    switch (action.type) {
        case "SORT_BY":
            return {...state, sortBy:action.payload}
        
        case "RATING":
            return {...state, rating:action.payload}
    
        default:
            return state
    }
}

export {productReducer}