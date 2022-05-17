// import { doepicshit } from "../../../public/assets/book-images"

export default function Card() {
    return (

        <div className="card card-vertical">
            <img className="img-vertical" src={"/doepicshit.jpg"} alt="sample image" />

            <span className="card-badge">New</span>

            <div className="card-content">
                <h3 className="card-title">Do Epic Shit</h3>
                <span className="text-center price highlight"> ₹299 </span>
                <button className="btn btn-primary"><a href="/pages/cart.html">Move to Cart</a></button>
            </div>
        </div>

    )
}