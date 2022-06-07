import "./Cart.css"
import { HorizontalCard } from "../../components"
import { useCart } from "../../contexts/cart-context"
export default function Cart() {
    const {cart,cartCount, cartTotalPrice, cartFinalPrice } = useCart()
    console.log(cart, cartCount, cartTotalPrice, cartFinalPrice)
    return (
        <section className="displaycart">
            {/* {cart.map(cartItem =>(
                <HorizontalCard cartItem={cartItem} key={cartItem._id}/>
            ))} */}
            
            <div className="cart-items">
                {cart.map(cartItem => (
                    <HorizontalCard cartItem={cartItem} key={cartItem._id} />
                ))}
            </div>
            <div className="card card-vertical shadow">

                <div className="card-content">
                    <h1 className="card-title" style={{color:"green"}}>Price Details</h1>
                    <div className="cart-price">
                        <div className="price-field">
                            <span>Total Items</span>
                            <span>{cartCount}</span>
                        </div>
                        <div className="price-field">
                            <span>Discount</span>
                            <span>{cartTotalPrice - cartFinalPrice}</span>
                        </div>
                        <div className="price-field">
                            <span>Delivery Charges</span>
                            <span>Free</span>
                        </div>
                        <div className="price-field highlight">
                            <span>Total Amount</span>
                            <span>₹{cartFinalPrice}</span>
                        </div>
                    </div>
                
                </div>
                <button className="btn btn-primary">Place Order </button>
            </div>
        </section>
    )
}