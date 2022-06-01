import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducer/cartReducer";
import { useAuth } from "./auth-context";
const CartContext = createContext()

const CartProvider = ({children})=>{    
    const navigate = useNavigate()
    const {isLogged} = useAuth()
    const encodedToken = localStorage.getItem("encodedToken")
    console.log(encodedToken)
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
                    authorization :encodedToken
                }
            })
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    async function addToCart(product){
    
        console.log("I am in addToCart>encodedtoken", encodedToken)

        if(isLogged){
            
            if(state.cart.some(product => product._id === product._id)){
                incrementCart(product)
            }else{
                try{
                    const response = await axios.post("/api/user/cart", {
                        product
                    }, {
                        headers: {
                            authorization: encodedToken
                        }
                    })
                    if (response.state === 201) {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: response.data.cart
                        })
                    }
                }catch(error){
                    console.log(err)
                }
               
            }
        }else{
            navigate("/login")
        }
        
    }

    async function deleteFromCart(){

    }

    async function incrementCart(){
        if(isLogged){
            
        }
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