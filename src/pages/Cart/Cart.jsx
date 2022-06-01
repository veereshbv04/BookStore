export default function Cart() {
    return (
        <section className="container center-div">
            <div className="card card-horizontal shadow">
                <img className="img-horizontal" src="/assets/doepicshit.jpg" alt="sample image" />
                    <div className="card-content">

                        <h2 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h2>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299 <small className="offer-saving strike">₹500</small></h3>
                        <span className="offer-saving">40% Offer</span>

                        <div className="quantity">
                            <span className="plus">+</span>
                            <input type="number" />
                                <span className="minus">-</span>
                        </div>
                    </div>
            </div>

            <div className="card card-horizontal shadow">
                <img className="img-horizontal" src="/assets/doepicshit.jpg" alt="sample image" />
                    <div className="card-content">

                        <h2 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h2>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299 <small className="offer-saving strike">₹500</small></h3>
                        <span className="offer-saving">40% Offer</span>

                        <div className="quantity">
                            <span className="plus">+</span>
                            <input type="number" />
                                <span className="minus">-</span>
                        </div>
                    </div>
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