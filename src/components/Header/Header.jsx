import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/auth-context"

export default function Header() {
    const {isLogged, logoutHandler} = useAuth()

    return (
        <header>
            <nav className="navbar">
                <Link to="/"><div className="navbar-title">BookStore</div></Link>


                {/* <div >
                    <ul className="navbar-catagory">
                        <li><a href="/pages/home.html">Fiction</a></li>
                        <li><a href="/pages/home.html">Children Books</a></li>
                        <li><a href="/pages/home.html">Technical Books</a></li>
                        <li><a href="/pages/home.html">All Books</a></li>
                    </ul>
                </div> */}

                <div >
                    <input className="navbar-search" placeholder="search here" />
                </div>
                <div className="icons">
                    {/* <a href="/pages/wishlist.html"><span className="fa fa-heart"></span></a>
                    <div className="badge-icon">2</div>
                    <a href="/pages/cart.html"><span className="fa fa-shopping-cart"></span></a> */}

                    <Link to="/wishlist"><span>wish</span></Link>
                    {" "}
                    <Link to="/cart"><span>cart</span></Link>

                </div>
                {console.log("from header",isLogged)}

                {isLogged?<Link to="/" onClick={logoutHandler}><button className="btn btn-primary">Logout</button></Link>:<span><button className="btn btn-primary"><Link to="/login">Login</Link></button>
                    <button className="btn btn-primary"><Link to="signup">Sign Up</Link></button></span>
}
            </nav>
        </header>
    )
}