import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducer/cartReducer";
import { useAuth } from "./auth-context";
const CartContext = createContext()

const CartProvider = ({children})=>{    
    const navigate = useNavigate()
    const {isLogged} = useAuth()
    const encodeToken = localStorage.getItem("encodeToken")
    const initialCartState = {
        cart:[],
        cartCount:0,
        cartTotalPrice:0,
        cartFinalPrice:0
    } 

    const [state, dispatch] = useReducer(cartReducer, initialCartState)

   async function getCart(){
        try{
            const response = axios.get("/api/user/cart", {
                headers:{
                    authorization :encodeToken
                }
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    async function addToCart(product){
        console.log("I am in addtocart in cart-context.js", product)
        
    }

    async function deleteFromCart(){

    }

    async function incrementCart(){

    }

    async function decrementCart(){

    }

    return (
    <CartContext.Provider value={{cart:state.cart, cartCount:state.cartCount, cartTotalPrice:state.cartTotalPrice, cartFinalPrice:state.cartFinalPrice, addToCart, deleteFromCart, incrementCart, decrementCart}}>

        {children}

    </CartContext.Provider>)
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