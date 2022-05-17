
import { Card, ProductsFilter } from "../../components"


export default function ProductListing() {
    return (
        <>
            <h3 class="subheading">Showing all Books</h3>
            <div class="grid grid-2-8">
                <ProductsFilter />
                <section class="product-display wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </>

    )
}
