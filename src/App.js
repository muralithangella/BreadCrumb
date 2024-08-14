import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import ProductDetails from "./Pages/ProductDetails";
import BreadCrumb from "./Components/BreadCrumb";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Product List Store</h1>
        <BreadCrumb />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
