import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loginform from "./Loginform";
import HomePage from "./pages/HomePage";
import CategPage from "./pages/CategPage";
import ProductDetails from "./component/ProduceDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/category" element={<CategPage />} />

        {/* Products */}
        <Route path="/product/details" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
