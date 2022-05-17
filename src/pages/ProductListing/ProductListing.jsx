import axios from "axios"
import { useState, useEffect } from "react"
import { useRef } from "react/cjs/react.production.min"
import { Card, ProductsFilter } from "../../components"


export default function ProductListing() {

    const [productsList, setProductsList] = useState([])

    useEffect(() =>
        (async function fetchProducts() {

            try {
                const responseData = await axios.get("/api/products")
                setProductsList(responseData.data.products)
                console.log(responseData.data.products)
            } catch (error) {
                console.log(error)
            }
        })()
        , [])

    return (
        <>
            <h3 className="subheading">Showing all Books</h3>
            <div className="grid grid-2-8">
                <ProductsFilter />
                <section className="product-display wrap">
                    {productsList.map(product => (
                        <Card key={product.id} />
                    ))}
                </section>
            </div>
        </>

    )
}
