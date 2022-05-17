// import { doepicshit } from "../../../public/assets/book-images"

export default function Card({ product }) {
    console.log(product)
    const { productImage, title, author, price: { original, discounted, discount } } = product

    return (

        <div className="card card-vertical">
            <img className="img-vertical" src={productImage} alt="sample image" />



            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <h5>{author}</h5>
                <div>
                    <span className="price highlight"><strong>{original}  </strong></span>
                    <span className="price highlight">{discounted}</span>
                </div>
                <button className="btn btn-primary"><a href="/pages/cart.html">Move to Cart</a></button>
                <span className="fa fa-heart-o heart w3-xxlarge"></span>
            </div>
        </div>

    )
}