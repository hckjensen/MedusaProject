import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import CartModal from "../components/Cart/CartModal";


const Layout = () => {



    return (
        <>
            <NavBar />
            <CartModal />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Layout;