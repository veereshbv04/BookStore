import axios from "axios"
import { useState, useEffect } from "react"
import { Card, ProductsFilter } from "../../components"
import { useProduct } from "../../contexts"
import { getFilteredProducts } from "../../components/ProductsFilter/ProductsFilterUtils"
export default function ProductListing() {
    const { state } = useProduct()
    const [productsList, setProductsList] = useState([])
    const FilteredProductList = getFilteredProducts(state, productsList)
    useEffect(() =>
        (async function fetchProducts() {

            try {
                const responseData = await axios.get("/api/products")
                setProductsList(responseData.data.products)
            } catch (error) {
                alert(error)
            }
        })()
        , [])

    return (
        <>
            <h3 className="subheading">Showing {FilteredProductList.length} Books</h3>
            <div className="grid grid-2-8">
                <ProductsFilter />
                <section className="product-display wrap">
                    {FilteredProductList.map(product => (
                        <Card product={product} key={product._id} />
                    ))}
                </section>
            </div>
        </>

    )
}
