import style from './Checkout.module.scss';
import { useContext } from "react";
import StoreContext from "../../context/StoreContext";

const Checkout = () => {

    const { cart } = useContext(StoreContext)
    const formItems = [
        {
            label: "First Name",
            type: "text",
            id: "first-name",
            name: "first-name",
            required: true
        },
        {
            label: "Last Name",
            type: "text",
            id: "last-name",
            name: "last-name",
            required: true
        },
        {
            label: "Address",
            type: "text",
            id: "address",
            name: "address",
            required: true
        },
        {
            label: "City",
            type: "text",
            id: "city",
            name: "city",
            required: true
        },
        {
            label: "Phone",
            type: "tel",
            id: "phone",
            name: "phone",
            required: true
        },
        {
            label: "Country",
            type: "text",
            id: "country",
            name: "country",
            required: true
        },

    ]

    console.log(cart);
    return (
        <section className={style.container}>

            <h2>Checkout</h2>
            <div className={style.grid}>

                <section className={style.form}>
                    <form>
                        {formItems.map((item, index) => {
                            return (
                                <div key={index}>
                                    <label htmlFor={item.id}>{item.label}</label>
                                    <input type={item.type} id={item.id} name={item.name} required={item.required} />
                                </div>
                            )
                        })}
                    </form>
                </section>
                <section className={style.cart}>
                    <div>
                        {cart?.items?.length > 0 ? (
                            cart.items.map((item, index) => (
                                <div className={style.cartItem} key={index}>
                                    <p>{item.title}</p>
                                    <p> x {item.quantity}</p>
                                    <p> {item.total / 100} DKK</p>
                                </div>
                            ))
                        ) : (
                            <p>No items in cart</p>
                        )}

                        <p>Total {cart?.total / 100} DKK </p>
                    </div>
                </section>
            </div>

        </section>

    )

}

export default Checkout;