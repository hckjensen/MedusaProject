
import style from './CartModal.module.scss';

import { useContext, useEffect } from "react";
import StoreContext from "../../context/StoreContext";
import { Link } from 'react-router-dom';

const CartModal = () => {

    const { showModal, setShowModal, cart } = useContext(StoreContext);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset the overflow property when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showModal]);



    return (
        <>

            {showModal && (
                <div className={style.modal} onClick={() => setShowModal(false)}>
                    <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span className={style.close} onClick={() => setShowModal(false)}>&times;</span>
                        <h2>Shopping Cart</h2>
                        <div className={style.cartItems}>
                            {cart?.items?.map((item, index) => {
                                return (
                                    <div key={index} className={style.cartItem}>
                                        <img src={item.thumbnail} alt={item.title} />
                                        <p>{item.title}</p>
                                        <p>{item.quantity}</p>
                                        <p>{item.total / 100} DKK</p>
                                    </div>
                                )
                            })}

                        </div>
                        <div className={style.payment}>
                            <div className={style.paymentItem}>
                                <p>Tax ({cart.region.tax_rate}) %</p>
                                <p>{cart.tax_total / 100} DKK</p>
                            </div>
                            <div className={style.paymentItem}>
                                <p>Total </p>
                                <p>{cart.total / 100} DKK</p>
                            </div>
                            <div>
                                <Link className={style.checkoutButton} onClick={() => setShowModal(false)} to="/checkout"> Proceed to Checkout</Link>
                            </div>




                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default CartModal