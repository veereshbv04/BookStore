import { Card, NotFound } from "../../components"
import { useWishlist } from "../../contexts"


export default function WishList() {
    const { wishItems } = useWishlist()
    return (
        <section className="container center-div wrap">
            {wishItems.length > 0 ? wishItems.map(product => (
                <Card product={product} key={product._id} />
            )) : <NotFound message={"Add Items to wishlist"} />}
        </section>
    )
}