import { useCart, useRegions, useProduct, formatVariantPrice } from "medusa-react"
import style from "../App.module.scss"
import Cart from "../components/Cart/Cart"
import Card from "../components/Cards/Card";
import { useCreateLineItem } from "medusa-react";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import StoreContext from "../context/StoreContext";
import RegionSwitch from "../components/regionSwitcher/RegionSwitch";


const ProductPage = () => {

    const testArray = [
        {
            title: "Product 1",
            description: "This is the first product",
            subDescription: "This is the sub description"
        },
        {
            title: "Product 2",
            description: "This is the first product",
            subDescription: "This is the sub description"
        },
        {
            title: "Product 3",
            description: "This is the first product",
            subDescription: "This is the sub description"
        }
    ]

    const { product, isLoading: isLoadingProduct } = useProduct("prod_01HWQ9HPBKMTRERER9P0N6W40X")
    const { regions, isLoading: isLoadingRegions } = useRegions()
    const { cart, setCart } = useContext(StoreContext)

    const createLineItem = useCreateLineItem(cart?.id);

    if (isLoadingProduct || isLoadingRegions) {
        return <h1>Loading...</h1>
    }
    console.log(product);
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
            { onSuccess: ({ cart }) => console.log(cart, "Item added to cart") },
            { onError: (error) => console.log("Error adding item to cart", error) }
        )
    }
    return (
        <>
            <Cart />
            <RegionSwitch />
            <h1>Medusa Frontend</h1>
            <div className={style.card}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                {/* <img src={product.images[0].url} alt={product.title} /> */}
                <p>Price: {formatVariantPrice({ variant: product.variants[0], region: regions[1] })}</p>
                <button onClick={() => addToCart(product.variants[0], 1)}>Add to cart</button>
                <section>
                    {testArray.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                description={item.description}
                                subDescription={item.subDescription}
                            />
                        );
                    })}
                </section>
            </div>
            <Footer />
        </>
    )


}

export default ProductPage;