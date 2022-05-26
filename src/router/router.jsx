
import { Route, Routes } from "react-router-dom";
import { LandingPage, ProductListing, Cart, WishList, Login, SignUp } from "../pages/index";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}
