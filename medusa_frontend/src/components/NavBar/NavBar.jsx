import style from './NavBar.module.scss';
import Icon from "../../assets/icons/cup.png"
import Logo from "../Logo/Logo";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className={style.navBar}>
            <div>

            </div>
            <Logo className={style.logo} image={Icon} title="Sunshine Coffee" />
            <div className={style.menu}>
                <ul>
                    <Link to="/checkout"> checkout</Link>
                    <Link to="/products"> products</Link>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;