import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";

export default function Login() {

    const [userData, setUserData] = useState({email:"", password:""})

    function userInputHandler(event) {
        const { name, value } = event.target;

        setUserData(prev => ({ ...prev, [name]: value }))
    }

    function loginHandler(event)
    {   event.preventDefault()
        sendUserData(userData)
    }

    async function sendUserData(data){
        console.log("I am in senduserdata")
        console.log(data)
        const response = await axios.get("/api/auth/login", data)
        console.log(response)
    }

    return (

        <div className="center-div">
            <form className="form">
                <h2 className="subheading">Login In</h2>
                <input className="input" placeholder="Enter Email Id" onChange={userInputHandler} name="email" required type="email" />
                <input className="input" placeholder="Enter Password" onChange={userInputHandler} name="password" required type="password" />

                
                <Link to="/signup"><small className="error-message green">Don't have an acoount ?</small></Link>
                <Link to="/"><button className="btn btn-primary" type="submit" onClick={loginHandler}>Sign Up</button></Link>
            </form>

        </div>
    )
}