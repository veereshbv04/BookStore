import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "./auth-context"
import {wishlistReducer} from "../reducer/wishlistReducer"
const wishlistContext = createContext()

const WishlistProvider =({children})=>{
    const navigate = useNavigate();
    const { isLogged } = useAuth()
    const encodedToken = localStorage.getItem("encodedToken")
    const initialState = {
        wishItems:[],
        wishCount:0
    }

    const [state, dispatch] = useReducer(wishlistReducer, initialState)
    async function addToWishlist(product){
        if(isLogged){
            try{
                const response = await axios.post("/api/user/wishlist", {
                    product
                }, {
                    headers: {
                        authorization: encodedToken
                    }
                })
               
                if(response.status === 201){
                    dispatch({type:"ADD_TO_WISHLIST", payload:response.data.wishlist})
                }
            }catch(error){
                alert(error)
            }
            
            

        }else{
            navigate("/login")
        }
    }

    async function removeFromWishlist(product){
      
        if (isLogged) {
            try {// need not to use "":" in ${product._id}
                const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
                    headers: {
                        authorization: encodedToken
                    }
                })
                if (response.status === 200) {
                    
                    dispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: response.data.wishlist
                    })
                }
            } catch (error) {
                alert(error)
            }



        } else {
            navigate("/login")
        }
    }

    return (
        <wishlistContext.Provider value={{wishCount:state.wishCount, wishItems:state.wishItems , addToWishlist, removeFromWishlist}}>{children}</wishlistContext.Provider>
    )
}

const useWishlist =()=>{
    const context = useContext(wishlistContext)
    if(!context){
        throw new Error("useWishlist only inside wishlist provider")
    }else{
        return context
    }
}

export {WishlistProvider, useWishlist}