import axios from "axios"
import { useState, useEffect } from "react"
import { Card, ProductsFilter } from "../../components"
import { useProduct } from "../../contexts/product-context"
import { getFilteredProducts } from "../../components/ProductsFilter/ProductsFilterUtils"
export default function ProductListing() {
    const { state } = useProduct()
    console.log(state)
    const [productsList, setProductsList] = useState([])
    const FilteredProductList = getFilteredProducts(state, productsList)
    console.log(FilteredProductList)
    useEffect(() =>
        (async function fetchProducts() {

            try {
                const responseData = await axios.get("/api/products")
                setProductsList(responseData.data.products)
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
                    {FilteredProductList.map(product => (
                        <Card product={product} key={product._id} />
                    ))}
                </section>
            </div>
        </>

    )
}
