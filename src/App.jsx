import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Products from "./views/product/Products";
import ErrorPage from "./views/ErrorPage";
import Layout from "./container/Layout";
import ProductsDetails from "./views/product/ProductsDetails";
import FilterBar from "./views/product/FilterBar";
import Policy from "./views/policies/Policy";
import Terms from "./views/policies/Terms";
import Disclaimer from "./views/policies/Disclaimer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<FilterBar />}></Route>
            <Route path="/productDetails/:id" element={<ProductsDetails />}></Route>
            <Route path="/productDetails/:product_type" element={<ProductsDetails />}></Route>
            <Route path="/cart" element={<Products />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/policy" element={<Policy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/disclaimer" element={<Disclaimer />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
