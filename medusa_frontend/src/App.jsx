import { BrowserRouter, Route, Routes } from "react-router-dom"
import FrontPage from "./pages/FrontPage"

import ProductPage from "./pages/ProductPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
