import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";

export default function Login() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({email:"", password:""})
    const {setIsLogged} = useAuth()

    function userInputHandler(event) {
        const { name, value } = event.target;
        setUserData(prev => ({ ...prev, [name]: value }))
    }

    function loginHandler(event)
    {   event.preventDefault()
        sendUserData(userData)
    }

    async function sendUserData(data) {
       
        try{
            const response = await axios.post("/api/auth/login", data)
            if (response.status === 200) {
                const encodedToken = response.data.encodedToken
                localStorage.setItem("encodedToken", encodedToken)
                setIsLogged(true)
                navigate("/products")
            } 
        }catch(error){
            
            alert(error)
        }
        
    }


    return (

        <div className="center-div">
            <form className="form">
   
                <h2 className="subheading" style={{textTransform: 'capitalize'}}>Login In</h2>
                <input className="input" placeholder="Enter Email Id" onChange={userInputHandler} name="email" required type="email" />
                <input className="input" placeholder="Enter Password" onChange={userInputHandler} name="password" required type="password" />

                
                <Link to="/signup"><small className="error-message green">Don't have an acoount ?</small></Link>
                <Link to="/"><button className="btn btn-primary" type="submit" onClick={loginHandler}>Sign Up</button></Link>
                <button onClick={() => sendUserData({ email: 'testuser@gmail.com', password: 'password'})}>Guest login</button>
            </form>

        </div>
    )
}