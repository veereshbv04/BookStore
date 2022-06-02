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
                console.log("product-id", product._id)
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
                        console.log(response)
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: response.data.cart
                        })
                        console.log("cart dispatch made")
                    }
                }catch(error){
                    console.log(error)
                }
               
            }
        }else{
            navigate("/login")
        }
        
    }

    async function removeFromCart(){
        console.log("I am in removeToCart")

        if (isLogged) {

            if (state.cart.some(item => item._id === product._id)) {

                incrementCart(product)
                console.log("product-id", product._id)
            } else {
                try {
                    const response = await axios.delete("/api/user/cart", {
                        product
                    }, {
                        headers: {
                            authorization: encodedToken
                        }
                    })

                    if (response.status === 201) {
                        console.log(response)
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: response.data.cart
                        })
                        console.log("cart dispatch made")
                    }
                } catch (error) {
                    console.log(error)
                }

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
                console.log("I am in incrementCart")
                if(response.status === 200){
                    console.log(response.data.cart)
                    //cart from response contains updated cart no need to worry about anything
                    dispatch({type:"INCREMENT_CART", payload:response.data.cart})
                }
            }catch(error){
                console.log(error)
                alert(error)
            }
        }
    }

    async function decrementCart(product){
        if (isLogged) {
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
                console.log("I am in incrementCart")
                if (response.status === 200) {
                    console.log(response.data.cart)
                    //cart from response contains updated cart no need to worry about anything
                    dispatch({
                        type: "DECREMENT_CART",
                        payload: response.data.cart
                    })
                }
            } catch (error) {
                console.log(error)
                alert(error)
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