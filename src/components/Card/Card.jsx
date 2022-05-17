// import { doepicshit } from "../../../public/assets/book-images"

export default function Card() {
    return (

        <div class="card card-vertical">
            <img class="img-vertical" src="https://picsum/200/300" alt="sample image" />

            <span class="card-badge">New</span>

            <div class="card-content">
                <h3 class="card-title">Do Epic Shit</h3>
                <span class="text-center price highlight"> ₹299 </span>
                <button class="btn btn-primary"><a href="/pages/cart.html">Move to Cart</a></button>
            </div>
        </div>

    )
}