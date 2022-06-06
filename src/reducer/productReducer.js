function productReducer(state, action){
    console.log(action)
    const initialState  = {
        category:{fiction:true, horror:true, romantic:true},
        rating:1,
        sortBy:"",
        range:"600"
    }
    switch (action.type) {
        case "SORT_BY":
            return {...state, sortBy:action.payload}
        
        case "RATING":
            return {...state, rating:action.payload}
        
        case "CATEGORY":
            if(action.payload === "fiction"){
                return {...state, category:{...state["category"], fiction:!state.category.fiction}}
            }else if(action.payload === "horror"){
                return {...state, category:{...state["category"], horror:!state.category.horror}}
            } else if (action.payload === "romantic") {
                return {
                    ...state,
                    category: {
                        ...state["category"],
                        romantic: !state.category.romantic
                    }
                }
            }
        
        case "PRICE_RANGE":
            return {...state, range:action.payload }
        
        case "CLEAR_ALL":
            return initialState
        
        default:
            return state
    }
}

export {productReducer}