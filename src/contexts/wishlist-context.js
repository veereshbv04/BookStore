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
    console.log(state)
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
                console.log("from wishlistcontext", response.status)
                if(response.status === 201){
                    dispatch({type:"ADD_TO_WISHLIST", payload:response.data.wishlist})
                    console.log("wishlist dispatch made", response.data.wishlist)
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
            try {
                const response = await axios.delete(`/api/user/wishlist/:${product._id}`, {
                    product
                }, {
                    headers: {
                        authorization: encodedToken
                    }
                })
                console.log("from wishlistcontext", response.status)
                if (response.status === 201) {
                    dispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: response.data.wishlist
                    })
                    console.log("wishlist dispatch made", response.data.wishlist)
                }
            } catch (error) {
                alert(error)
            }



        } else {
            navigate("/login")
        }
    }

    return (
        <wishlistContext.Provider value={{...initialState, addToWishlist, removeFromWishlist}}>{children}</wishlistContext.Provider>
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