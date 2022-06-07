import "./Header.css"
import { Link } from "react-router-dom"
import { useAuth, useCart, useWishlist } from "../../contexts"

export default function Header() {
    const { isLogged, logoutHandler } = useAuth()

    const {cartCount} = useCart()
    const {wishCount} = useWishlist()
   
    return (
        <header>
            <nav className="navbar">
                <Link to="/"><div className="navbar-title">BookStore</div></Link>

                <div >
                    <input className="navbar-search" placeholder="search here" />
                </div>
                
                {
                    isLogged ? 
                    <div className="icon-div">
                        <Link to="/wishlist">
                            <div className="icons">
                                <span className="fa fa-heart"></span>
                                <div className="badge-icon">{wishCount}</div>
                            </div>
                        </Link>
                        <Link to="/cart">
                                <div class="icons">
                                    <span class="fa fa-shopping-cart"></span>
                                    <div class="badge-icon">{cartCount}</div>
                                </div>
                        </Link>
                    </div>:

                    <div className="icons" style={{ visibility: "hidden" }}>
                        <Link to="/wishlist"><span>wish{wishCount}</span></Link>
                        {" "}
                        <Link to="/cart"><span>cart{cartCount}</span></Link>
                    </div>
                }
                
                

                {isLogged?<Link to="/" onClick={logoutHandler}><button className="btn btn-primary">Logout</button></Link>:<div><button className="btn btn-primary"><Link to="/login">Login</Link></button>{"  "}
                    <button className="btn btn-primary"><Link to="signup">Sign Up</Link></button></div>
}
            </nav>
        </header>
    )
}