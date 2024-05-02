import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCart } from "medusa-react";

const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {

    const [cart, setCart] = useState()
    const [region, setRegion] = useState()

    const { createCart } = useCart()



    useEffect(() => {

        createCart.mutate({}, { onSuccess: (res) => setCart(res.cart) });



    }, [])

    return (


        <StoreContext.Provider value={{ cart, setCart, region, setRegion }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreContextProvider.propTypes = { children: PropTypes.node };

export default StoreContext;
