import { useCart } from "medusa-react"
import { useEffect } from "react"


const Cart = () => {
    const { cart, createCart } = useCart()



    useEffect(() => {

        createCart.mutate({});
        console.log("cart created");
        console.log(cart);


    }, [])

    return (
        <>
            <h3>CART</h3>
        </>
    )
}

export default Cart