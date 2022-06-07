import "./Card.css"
import { useCart } from "../../contexts/cart-context";

export default function HorizontalCard({cartItem}){
   
    const {incrementCart, decrementCart} = useCart()
    const { title, productImage,price, author, categoryName, qty} = cartItem
    const {original, discounted, discount} = price
    return (
        <div className="card card-horizontal shadow">
            <img className="img-horizontal" src={productImage} alt="sample image" />
            <div className="card-content">
                <h2 className="card-title">{title} </h2>
                <span>{author}</span>
                <h3 className="price">{discounted}<small className="offer-saving strike">₹{original}</small></h3>
                <div className="offer-saving">₹{discount} Saved</div>
                <div className="quantity">
                    <p>Quantity</p>
                    <span className="plus" onClick={()=>incrementCart(cartItem)}>+</span>
                    <span>{qty}</span>
                    <span className="minus" onClick={() => decrementCart(cartItem)}>-</span>
                </div>
            </div>
        </div>
    )
}