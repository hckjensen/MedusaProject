import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <>

            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Layout;