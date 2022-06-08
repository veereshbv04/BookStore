import axios from "axios";
import { createContext, useContext,  useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
    
        console.log("I am in addToCart")

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
                    }
                }catch(error){
                    alert(error)
                }
               
            }
        }else{
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
                    }
                } catch (error) {
                    alert(error)
                }

        } else {
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
                    //cart from response contains updated cart no need to worry about anything
                    dispatch({type:"INCREMENT_CART", payload:response.data.cart})
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
                        //cart from response contains updated cart no need to worry about anything
                        dispatch({
                            type: "DECREMENT_CART",
                            payload: response.data.cart
                        })
                    }
                } catch (error) {
                    alert(error)
                }
            }
            
        }
    }
//cart:state.cart, cartCount:state.cartCount, cartTotalPrice:state.cartTotalPrice, cartFinalPrice:state.cartFinalPrice,
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