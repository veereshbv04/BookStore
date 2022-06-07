import "./Cart.css"
import { HorizontalCard } from "../../components"
import { useCart } from "../../contexts/cart-context"
export default function Cart() {
    const {cart} = useCart()
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
                            <span>Price</span>
                            <span>299</span>
                        </div>
                        <div className="price-field">
                            <span>Discount</span>
                            <span>299</span>
                        </div>
                        <div className="price-field">
                            <span>Delivery Charges</span>
                            <span>299</span>
                        </div>
                        <div className="price-field highlight">
                            <span>Total Amount</span>
                            <span>₹300</span>
                        </div>
                    </div>
                    <span className="text-center">You have saved ₹120, by shopping with us</span>

                </div>
                <button className="btn btn-primary">Place Order </button>
            </div>
        </section>
    )
}