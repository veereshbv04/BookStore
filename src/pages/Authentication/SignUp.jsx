import { Link } from "react-router-dom"

export default function SignUp() {
    return (
        <div class="center-div">
            <form class="form">
               
                <h2 class="subheading">Create Account</h2>
                <input class="input" placeholder="Enter First Name" type="text" />
                <input class="input" placeholder="Enter Second Name" type="text" />
                <input class="input" placeholder="Enter Email Id" type="email" />
                <input class="input" placeholder="Create Password" type="password" />
                <button class="btn btn-primary"><a href="/pages/home.html">Sign Up</a></button>
                
                <Link to="/login"><small class="error-message green">Already have an account?</small></Link>
            </form>
        </div>
    )
}