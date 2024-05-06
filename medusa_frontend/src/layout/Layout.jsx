import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


const Layout = () => {



    return (
        <>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}

export default Layout;