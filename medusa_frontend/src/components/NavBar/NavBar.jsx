import style from './NavBar.module.scss';
import Icon from "../../assets/icons/cup.png"
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import StoreContext from "../../context/StoreContext";


const NavBar = () => {

    const { setShowModal } = useContext(StoreContext);


    return (
        <div className={style.navBar}>
            <div>

            </div>
            <Logo className={style.logo} image={Icon} title="Sunshine Coffee" />
            <div className={style.menu}>
                <ul>
                    <Link to="/"> Home</Link>
                    <Link to="/products"> products</Link>
                    <button onClick={() => setShowModal(true)}> Cart</button>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;