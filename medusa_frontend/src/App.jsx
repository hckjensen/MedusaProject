import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import FrontPage from "./pages/FrontPage"
import ProductPage from "./pages/ProductPage"
import CheckoutPage from "./pages/CheckoutPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<FrontPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
