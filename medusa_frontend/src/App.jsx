import { useProduct } from "medusa-react"
import style from "./App.module.scss"


function App() {

  const { product } = useProduct("prod_01HWAJFCMSJCC3NRTCFY2KYDXH")
  console.log(product);

  return (
    <>
      <h1>Medusa Frontend</h1>
      <div className={style.card}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img src={product.images[0].url} alt={product.title} />
      </div>
    </>
  )
}

export default App
