import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";
const ProductContext = createContext(null)

const ProductProvider = ({children})=>{
    const initialState  = {
        category:{fiction:true, horror:true,romantic:true},
        rating:"",
        sortBy:"",
        range:"600"
    }
    const [state, dispatch] = useReducer(productReducer,initialState)
    return(
        <ProductContext.Provider value={{state, dispatch}}>{children}</ProductContext.Provider>
    )
}

const useProduct = ()=>{
    const context = useContext(ProductContext)
    if(!context){
        throw new Error("useProduct only inside the product provider");
    }
    return context
}

export {ProductProvider, useProduct}