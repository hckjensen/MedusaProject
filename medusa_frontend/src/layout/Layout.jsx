import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import CartModal from "../components/Cart/CartModal";
import CookieBanner from "../components/CookieBanner/CookieBanner";


const Layout = () => {



    return (
        <>
            <NavBar />
            <CartModal />
            <Outlet></Outlet>
            <CookieBanner />
            <Footer />
        </>
    )
}

export default Layout;