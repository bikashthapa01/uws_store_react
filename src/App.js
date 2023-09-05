import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckOut";
import HomePage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
      </Route>
    </Routes>
  );
}

export default App;
