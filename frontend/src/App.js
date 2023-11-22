import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
// import Success from "./components/Cart/Checkout/Success";
// import Cancel from "./components/Cart/Checkout/Cancel";
// import Notify from "./components/Cart/Checkout/Notify";

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/notify" element={<Notify />} /> */}
        <Route element={<Default />} />
      </Routes>
      <Modal />
    </React.Fragment>
  );
}

export default App;
