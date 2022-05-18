// import { doepicshit } from "../../../public/assets/book-images"
import "./Card.css"
export default function Card({ product }) {
    console.log(product)
    const { productImage, title, author, price: { original, discounted, discount } } = product

    return (

        <div className="card card-vertical">
            <img className="img-vertical" src={productImage} alt="sample image" />



            <div className="card-content">
                <h3 className="card-title">{title}</h3>

                <div>
                    <text style={{ marginRight: "4rem" }}>{author}</text>
                    <span className="price highlight"><strong>{discounted}  </strong></span>
                    <span className="price highlight">{original}</span>
                </div>
                <button className="btn btn-primary"><a href="/pages/cart.html">Move to Cart</a></button>
                <br />
                <button className="btn btn-primary"><a href="/pages/cart.html">Move to Cart</a></button>
                <span className="fa fa-heart-o heart w3-xxlarge"></span>
            </div>
        </div >

    )
}