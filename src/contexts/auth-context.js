import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Notify } from "../components/Notify";

const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const navigate = useNavigate()
    const [isLogged, setIsLogged] = useState(false)
    const userToken = localStorage.getItem("token")

    useEffect(()=>{
        if(userToken){
            setIsLogged(true)
        }
    }, [])

    function logoutHandler(){
        setIsLogged(false)
        localStorage.removeItem("token")
        Notify("info", "You are logged out")
        navigate("/")
    
    }

    return <AuthContext.Provider value={{isLogged, setIsLogged, logoutHandler}}>{children}</AuthContext.Provider>
}

const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be used inside AuthProvider")
    }else{
        return context
    }
}



export {AuthProvider, useAuth}