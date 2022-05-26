import { Link } from "react-router-dom"

export default function Login() {
    return (

        <div className="center-div">
            <form className="form">
                <h2 class="subheading">Login In</h2>
                <input className="input" placeholder="Enter Email Id" type="email" />
                <input className="input" placeholder="Enter Password" type="password" />

                {/* <Link to="/login"><small class="error-message green"> Don't have an acoount ?</small></Link> */}
                
                <Link to="/signup"><small className="error-message green">Don't have an acoount ?</small></Link>
                <Link to="/"><button class="btn btn-primary">Sign Up</button></Link>
            </form>

        </div>
    )
}