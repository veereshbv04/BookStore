import axios from "axios";
import { createContext, useContext,  useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from "../components/Notify";
import { cartReducer } from "../reducer/cartReducer";
import { useAuth } from "./auth-context";
const CartContext = createContext()

const CartProvider = ({children})=>{    
    const navigate = useNavigate()
    const {isLogged} = useAuth()
    const encodedToken = localStorage.getItem("encodedToken")
    
    const initialCartState = {
        cart:[],
        cartCount:0,
        cartTotalPrice:0,
        cartFinalPrice:0
    } 

    const [state, dispatch] = useReducer(cartReducer, initialCartState)
    
    
   async function getCart(){
        
    }

    async function addToCart(product){
    
        if(isLogged){
            
            if(state.cart.some(item => item._id === product._id)){
                
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
                    
                    if (response.status === 201) {
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: response.data.cart
                        })
                        Notify("success", "Added to cart")
                    }
                }catch(error){
                    Notify("error", "cannot add to cart")
                }
               
            }
        }else{
            Notify("error", "Please login")
            navigate("/login")
        }
        
    }

    async function removeFromCart(product){

        if (isLogged) {
            
                try {
                    const response = await axios.delete(`/api/user/cart/${product._id}`,{
                        headers: {
                            authorization: encodedToken
                        }
                    })

                    if (response.status === 200) {
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: response.data.cart
                        })
                        Notify("success", "Removed from cart")
                    }
                } catch (error) {
                    Notify("error", "Cannot remove from cart")
                }

        } else {
            Notify("error", "Please login")
            navigate("/login")
        }
    }

    async function incrementCart(product){
        if(isLogged){
            try{
                const response = await axios.post(`api/user/cart/${product._id}`,{
                    action:{type:"increment"}
                },{
                    headers:{
                        authorization:encodedToken
                    }
                })
                if(response.status === 200){
                   
                    dispatch({type:"INCREMENT_CART", payload:response.data.cart})
                     Notify("success", "Item quantity incremented")
                }
            }catch(error){
                alert(error)
            }
        }
    }

    async function decrementCart(product){
        if (isLogged) {
            if(product.qty === 1){
                removeFromCart(product)
            }else{
                try {
                    const response = await axios.post(`api/user/cart/${product._id}`, {
                        action: {
                            type: "decrement"
                        }
                    }, {
                        headers: {
                            authorization: encodedToken
                        }
                    })
                    if (response.status === 200) {
                        
                        dispatch({
                            type: "DECREMENT_CART",
                            payload: response.data.cart
                        })
                         Notify("success", "Item quantity decremented")
                    }
                } catch (error) {
                    Notify("error", "Cannot decrement Item quantity")
                }
            }
            
        }
    }

    return (
    <CartContext.Provider value={{...state, addToCart, removeFromCart, incrementCart, decrementCart}}>

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