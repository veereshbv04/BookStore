import { Link } from "react-router-dom"

export default function Header() {
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
                    <a href="/pages/wishlist.html"><span className="fa fa-heart"></span></a>
                    <div className="badge-icon">2</div>
                    <a href="/pages/cart.html"><span className="fa fa-shopping-cart"></span></a>
                </div>
                <button className="btn btn-primary"><a href="/index.html">Login</a></button>

            </nav>
        </header>
    )
}