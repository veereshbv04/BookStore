import { Card } from "../../components"
import { useWishlist } from "../../contexts"


export default function WishList() {
    const { wishItems } = useWishlist()
    return (
        <section className="container center-div wrap">
            {wishItems.map(product =>(
                <Card product={product} key={product._id}/>
            ))}
        </section>
    )
}