
import { Route, Routes } from "react-router-dom";
import { LandingPage, ProductListing, Cart } from "../pages/index";
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}
