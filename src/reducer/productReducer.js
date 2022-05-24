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
        
        case "CATEGORY":
            if(action.payload === "fiction"){
                return {...state, category:{...state["category"], fiction:!state.category.fiction}}
            }else if(action.payload === "horror"){
                return {...state, category:{...state["category"], horror:!state.category.horror}}
            }
        default:
            return state
    }
}

export {productReducer}