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
                isLogged ? <div className="icons">
                    <Link to="/wishlist"><span>wish{wishCount}</span></Link>
                    {" "}
                    <Link to="/cart"><span>cart{cartCount}</span></Link>
                    </div> : <div className="icons" style={{visibility:"hidden"}}>
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