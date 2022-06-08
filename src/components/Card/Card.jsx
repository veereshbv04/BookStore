// import { doepicshit } from "../../../public/assets/book-images"
import { Link } from "react-router-dom"
import "./Card.css"
export default function Card({ product }) {

    const { productImage, title, author, price: { original, discounted, discount }, rating } = product

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

                <button className="btn btn-primary"><Link to="/cart">Add to Cart</Link></button>
                <br />
                <button className="btn btn-primary"><Link to="/wishlist">Add to Wishlist</Link></button>
                <span className="fa fa-heart-o heart w3-xxlarge"></span>
            </div>
        </div >

    )
}