import { useCart } from "../../contexts/cart-context";

export default function HorizontalCard({cartItem}){
   
    const {incrementCart, decrementCart} = useCart()
    const { title, productImage,price, author, categoryName, qty} = cartItem
    const {original, discounted, discount} = price
    return (
        <div className="card card-horizontal shadow">
            <img className="img-horizontal" src={productImage} alt="sample image" />
            <div className="card-content">
                <h2 className="card-title">{title} by {author}</h2>
                <small>{categoryName}</small>
                <h3 className="price">{discounted}<small className="offer-saving strike">₹500</small></h3>
                <span className="offer-saving">40% Offer</span>
<s>{discount}</s>
                <div className="quantity">
                    <span className="plus" onClick={()=>incrementCart(cartItem)}>+</span>
                    <input type="number" value={qty} />
                    <span className="minus" onClick={() => decrementCart(cartItem)}>-</span>
                </div>
            </div>
        </div>
    )
}