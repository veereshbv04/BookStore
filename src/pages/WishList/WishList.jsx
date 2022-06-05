import { Card } from "../../components"
import { useWishlist } from "../../contexts/wishlist-context"


export default function WishList() {
    const { wishItems } = useWishlist()
    console.log(wishItems)
    return (
        <section className="container center-div wrap">
            {wishItems.map(product =>(
                <Card product={product} key={product._id}/>
            ))}
        </section>
    )
}