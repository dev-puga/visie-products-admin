import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProductDetails } from "../pages/ProductDetails";
import { ProductEdit } from "../pages/ProductEdit";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/:id/edit" element={<ProductEdit />} />
      </Routes>
    </Router>
  );
};
