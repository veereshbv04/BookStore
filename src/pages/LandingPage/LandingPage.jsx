import "./LandingPage.css"
import { useNavigate } from "react-router-dom";
// import {fictionimage} from "./fictionimage.jpg"
import { Link } from "react-router-dom"
import { useProduct } from "../../contexts";
export default function LandingPage() {
    const navigate = useNavigate();
    const { state, dispatch } = useProduct();
    function choosefiction(){
        dispatch({ type: "CATEGORY", payload: "fiction" })
        navigate("/products")
    }
    function chooseromantic(){
        dispatch({ type: "CATEGORY", payload: "romantic"})
        navigate("/products")
    }
    return (

        <>
            <Link to="/products" className="containern" style={{display:"flex", alignItems:"center",paddingTop:"2rem"}}><img src={process.env.PUBLIC_URL + "assets/buybooks.png"} /></Link>

            <section className="container">
                
                <div className="offer">
                    <h2 className="subheading">Best Selling Books UPTO 60% OFF</h2>
                    <Link to="/products"><button className="btn btn-primary">Shop Now</button></Link>

                </div>

                <img src={process.env.PUBLIC_URL + 'assets/Homepagebig.webp'} />
            </section>


            <section className="container">
                <img src={process.env.PUBLIC_URL + 'assets/fictionimage.webp'} />
                <div className="offer">
                    <h2 className="subheading">Wide Range of Fiction Books upto 90% Off </h2>
                    <Link to="/products"><button className="btn btn-primary" onClick={choosefiction}>Shop Now</button></Link>
                </div>
               
                {/* <div className="card card-vertical">
                    <img className="img-vertical" src={process.env.PUBLIC_URL + "/assets/book-images/doepicshit.jpg"} alt="sample image" />
                    <span className="card-badge">New</span>
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div> */}

                {/* <div className="card card-vertical">

                    <img className="img-vertical" src={process.env.PUBLIC_URL + "/assets/book-images/doepicshit.jpg"} alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div> */}

                {/* <div className="card card-vertical">
                    <img className="img-vertical" src={process.env.PUBLIC_URL + "/assets/book-images/doepicshit.jpg"} alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div> */}
            </section>

            <section className="containern">
                {/* <Link to="/products" className="container"><img src={process.env.PUBLIC_URL + "assets/romantic.webp"} /></Link> */}
                
                {/* <div className="card card-horizontal">
                    <img className="img-horizontal" src={process.env.PUBLIC_URL + "/assets/book-images/doepicshit.jpg"} alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>
                <div className="offer">
                    <h2 className="subheading">Best Selling Books UPTO 60% OFF</h2>
                    <Link to="/products"><button className="btn btn-primary">Shop Now</button></Link>
                </div>
                <div className="card card-horizontal">
                    <img className="img-horizontal" src={process.env.PUBLIC_URL + "/assets/book-images/doepicshit.jpg"} alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>

 */}

            </section>
            <Link to="/products" className="containern" style={{ display: "flex", alignItems: "center", padding: "2rem" }}><img src={process.env.PUBLIC_URL + "assets/romantic.webp"} onClick={chooseromantic} /></Link>
        </>
    )
}