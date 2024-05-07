import { useRegions, useProducts } from "medusa-react"
import style from "../App.module.scss"
import Cart from "../components/Cart/CartModal"
import Card from "../components/Cards/Card";
import Header from "../components/Header/Header";
import Seperator from "../components/Seperator/Seperator";
import { useCreateLineItem } from "medusa-react";
import { useContext } from "react";
import StoreContext from "../context/StoreContext";




const ProductPage = () => {

    const heading = "We Love Coffee And all the people who make it"
    const headerBackground = "../../src/assets/images/header.jpeg"



    const { products, isLoading: isLoadingProduct } = useProducts()
    const { regions, isLoading: isLoadingRegions } = useRegions()
    const { cart, setCart } = useContext(StoreContext)

    const createLineItem = useCreateLineItem(cart?.id);

    if (isLoadingProduct || isLoadingRegions) {
        return <h1>Loading...</h1>
    }
    console.log(products);
    console.log(regions);


    //ADD TO CART FUNCTION
    const addToCart = (variants, quantity) => {

        const variant_id = variants.id;
        console.log(`Adding to cart: variantId=${variant_id}, quantity=${quantity}`);
        createLineItem.mutate(
            {
                variant_id: variant_id,
                quantity: quantity
            },
            { onSuccess: ({ cart }) => setCart(cart) },
            { onError: (error) => console.log("Error adding item to cart", error) },
            console.log("Item added to cart", cart)
        )
    }
    return (
        <>
            <Header heading={heading} background={headerBackground} />
            <Seperator />
            <Cart />
            <h2 className={style.productHeading}>Our picks for you</h2>

            <div className={style.cardContainer}>
                {products.map((product, index) => {
                    return (
                        <Card
                            key={index}
                            variants={product.variants[0]}
                            quantity={1}
                            addToCart={addToCart}
                            title={product.title}
                            description={product.description}
                            image={product.thumbnail}
                            price={"Price:" + " " + product.variants[0].prices[0].amount / 100 + " " + product.variants[0].prices[0].currency_code.toUpperCase()}
                        />
                    )
                })}
            </div>

        </>
    )


}

export default ProductPage;