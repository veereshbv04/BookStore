import { Link } from "react-router-dom"
import { useState } from "react"

export default function SignUp() {

    const [newUserData, setNewUserData] = useState({
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        confirmPassword:""
    })

    function userInputHandler(event){
        const {name, value} = event.target;
        
        setNewUserData(prev => ({...prev, [name]:value}))
    }

    function sendNewUserData(data){
        
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
                <input className="input" placeholder="Enter Email Id" type="email" name="emailId" required onChange={userInputHandler}/>
                <input className="input" placeholder="Create Password" type="password" name="password" required onChange={userInputHandler}/>
                <input className="input" placeholder="ConfirmPassword" type="password" name="confirmPassword" required onChange={userInputHandler}/>
                <button className="btn btn-primary" onClick={signUpHandler}>Sign Up</button>
                
                <Link to="/login"><small className="error-message green">Already have an account?</small></Link>
            </form>
        </div>
    )
}