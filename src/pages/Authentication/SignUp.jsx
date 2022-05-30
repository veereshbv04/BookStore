import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";

export default function SignUp() {

    const [newUserData, setNewUserData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function userInputHandler(event){
        const {name, value} = event.target;
        
        setNewUserData(prev => ({...prev, [name]:value}))
    }

    async function sendNewUserData(data){
        console.log("in senduserdata")
        console.log(data)
        if(data.password === data.confirmPassword){
          
            try{
                const response = await axios.post("/api/auth/signup", data)
                console.log(response)
                if (response.status === 201) {
                    console.log("hello 201 code")
                    // ERROR NEED TO FIX HERE, GETTING 500 STATUS CODE
                    const { data } = response;
                    // const userToken = data.encodedToken
                    // console.log(userToken)
                    // localStorage.setItem("userToken", userToken)
                    // navigate("/products")
                }
            }catch(error){
                console.log(error.response)
            }
        }
    }

    function signUpHandler(e){
        e.preventDefault()
        sendNewUserData(newUserData)
    }

    return (
        <div className="center-div">
            <form className="form">
               
                <h2 className="subheading">Create Account</h2>
                <input className="input" placeholder="Enter First Name" type="text" name="firstName" required onChange={userInputHandler} />
                <input className="input" placeholder="Enter Last Name" type="text" name="lastName" required onChange={userInputHandler}/>
                <input className="input" placeholder="Enter Email Id" type="email" name="email" required onChange={userInputHandler}/>
                <input className="input" placeholder="Create Password" type="password" name="password" required onChange={userInputHandler}/>
                <input className="input" placeholder="ConfirmPassword" type="password" name="confirmPassword" required onChange={userInputHandler}/>
                <button className="btn btn-primary" onClick={signUpHandler}>Sign Up</button>
                
                <Link to="/login"><small className="error-message green">Already have an account?</small></Link>
            </form>
        </div>
    )
}