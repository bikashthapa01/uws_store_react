import "./App.css";
import Navbar from "./components/navbar/Navbar";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckOut";
import HomePage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
