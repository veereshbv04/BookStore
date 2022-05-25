import { Link } from "react-router-dom"

export default function LandingPage() {

    return (

        <>

            <section className="container">

                <div className="offer">
                    <h2 className="subheading">Best Selling Books UPTO 60% OFF</h2>
                    <button className="btn btn-primary"><a href="/pages/productlist.html">Shop Now</a></button>
                </div>

                <img src={process.env.PUBLIC_URL + 'assets/Homepagebig.webp'} />
            </section>


            <section className="container">
                <div className="offer">
                    <h2 className="subheading">Wide Range of Self Help Books upto 90% Off </h2>
                    <button className="btn btn-primary"><a href="/pages/productlist.html">Select Now</a></button>
                </div>

                <div className="card card-vertical">
                    <img className="img-vertical" src="/assets/doepicshit.jpg" alt="sample image" />
                    <span className="card-badge">New</span>
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>

                <div className="card card-vertical">

                    <img className="img-vertical" src="/assets/doepicshit.jpg" alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>

                <div className="card card-vertical">
                    <img className="img-vertical" src="/assets/doepicshit.jpg" alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>
            </section>

            <section className="container">
                <div className="card card-horizontal">
                    <img className="img-horizontal" src="/assets/doepicshit.jpg" alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>
                <div className="offer">
                    <h2 className="subheading">Best Selling Books UPTO 60% OFF</h2>
                    <button className="btn btn-primary"><a href="/pages/productlist.html">Shop Now</a></button>
                </div>
                <div className="card card-horizontal">
                    <img className="img-horizontal" src="/assets/doepicshit.jpg" alt="sample image" />
                    <div className="card-content">

                        <h3 className="card-title">Do Epic Shit(paperback) by Ankur warikko</h3>
                        <small>Sapna Publication</small>
                        <h3 className="price">₹299<span className="offer-saving"> Save 40%</span></h3>

                    </div>
                </div>



            </section>
        </>
    )
}