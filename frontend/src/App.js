import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import AddProduct from "./pages/AddProduct";

const App = () => {
   return (
      <Routes>
         <Route path="/product-list" element={<ProductList />} />
         <Route path="/add-product" element={<AddProduct />} />
         <Route path="*" element={<ProductList />} />
      </Routes>
   );
};

export default App;
