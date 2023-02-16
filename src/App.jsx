
import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/products" element={<ProductList/>}/>
            </Routes>
            <Routes>
                <Route path="/product" element={<Product/>}/>
            </Routes>
            <Routes>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </Router>
    );
};
export default App;
