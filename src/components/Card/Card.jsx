// import { doepicshit } from "../../../public/assets/book-images"
import { Link } from "react-router-dom"
import { useCart } from "../../contexts/cart-context"
import { useWishlist } from "../../contexts/wishlist-context"

import "./Card.css"
export default function Card({ product }) {
    const {cart, addToCart, removeFromCart} = useCart()
    const {addToWishlist} = useWishlist()
    const { _id, productImage, title, author, price: { original, discounted, discount }, rating } = product
    console.log("I am from card.jsx, cart", cart)
    return (

        <div className="card card-vertical">
            <img className="img-vertical" src={productImage} alt="sample image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>

                <div>
                    <span style={{ marginRight: "4rem" }}>{author}</span>
                    <span className="price highlight">{discounted} </span>
                    <span className="price highlight"><strong>{original}  </strong></span>
                    <span>{rating}</span>
                </div>
                {
                    cart.find(item => item._id === _id) ? <button className="btn btn-primary"><Link to="/cart">Go to Cart</Link></button> : <button className="btn btn-primary"><a to="/cart" onClick={() => addToCart(product)}>Add to Cart</a></button>
                }
                {/* <button className="btn btn-primary"><a to="/cart" onClick={()=>addToCart(product)}>Add to Cart</a></button>
                <br /> */}
                <br />
                <button className="btn btn-primary"><a to="/wishlist">Add to Wishlist</a></button>
                <span className="fa fa-heart-o heart w3-xxlarge" onClick={()=>addToWishlist(product)}>j</span>
            </div>
        </div >

    )
}