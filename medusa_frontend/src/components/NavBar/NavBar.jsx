import style from './NavBar.module.scss';
import Icon from "../../assets/icons/cup.png"
import Logo from "../Logo/Logo";

const NavBar = () => {

    return (
        <div className={style.navBar}>
            <div>

            </div>
            <Logo image={Icon} title="Sunshine Coffee" />
            <div className={style.menu}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )

}

export default NavBar;