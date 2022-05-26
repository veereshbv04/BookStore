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

    const [state, dispatch] = useReducer(cartReducer, initialCartState)

   async function getCart(){

    }

    async function addToCart(){
        
    }

    async function deleteFromCart(){

    }

    async function incrementCart(){

    }

    async function decrementCart(){

    }

    return <CartContext.Provider value={{cart:state.cart, cartCount:state.cartCount, cartTotalPrice:state.cartTotalPrice, cartFinalPrice:state.cartFinalPrice, addToCart, deleteFromCart, incrementCart, decrementCart}}>{children}</CartContext.Provider>
}

const useCart = ()=>{
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart must be used inside CartProvider")
    }else{
        return context
    }
}


export {CartProvider, useCart}