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
    console.log(encodedToken)
    const initialCartState = {
        cart:[],
        cartCount:0,
        cartTotalPrice:0,
        cartFinalPrice:0
    } 

    const [state, dispatch] = useReducer(cartReducer, initialCartState)
    console.log(state)
    console.log(cartReducer)
   async function getCart(){
        
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
                    if (response.status === 201) {
                        
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

    async function deleteFromCart(){

    }

    async function incrementCart(){
        if(isLogged){
            try{
                const response = await axios.post(`api/user/cart/${product._id}`,{
                    action:{type:"decrement"}
                },{
                    headers:{
                        authorization:encodedToken
                    }
                })
                console.log("I am in incrementCart")
                if(response.status === 200){
                    dispatch({type:"INCREMENT_CART", payload:response.data.cart})
                }
            }catch(error){
                console.log(error)
                alert(error)
            }
        }
    }

    async function decrementCart(){
        
    }
//cart:state.cart, cartCount:state.cartCount, cartTotalPrice:state.cartTotalPrice, cartFinalPrice:state.cartFinalPrice,
    return (
    <CartContext.Provider value={{...state, addToCart, deleteFromCart, incrementCart, decrementCart}}>

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