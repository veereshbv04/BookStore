import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext()

const CartProvider = ({children})=>{    

    const initialCartState = {
        cart:[],
        cartCount:0,
        cartTotalPrice:0,
        cartFinalPrice:0
    } 

    const [state, Dispatch] = useReducer(cartReducer, initialCartState)

    return <CartContext.Provider value={}>{children}</CartContext.Provider>
}

const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart must be used inside CartProvider")
    }else{
        return context
    }
}

