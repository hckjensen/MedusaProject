import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import FrontPage from "./pages/FrontPage"
import ProductPage from "./pages/ProductPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<FrontPage />} />
            <Route path="/products" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
