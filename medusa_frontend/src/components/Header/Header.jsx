import style from "./Header.module.scss";
import PropTypes from 'prop-types';

const Header = ({ heading, background }) => {

    return (
        <header
            className={style.header}
            style={
                {
                    backgroundImage: `url(${background})`

                }
            }

        >
            <h3>{heading}</h3>
        </header>
    );

};

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    background: PropTypes.string
};

export default Header;