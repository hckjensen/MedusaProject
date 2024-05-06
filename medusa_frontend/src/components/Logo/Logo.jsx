import style from './Logo.module.scss';
import PropTypes from 'prop-types';

const Logo = ({ image, title }) => {

    return (
        <div className={style.circle}>
            <h3>{title}</h3>
            <img src={image} alt="logo" />
        </div>
    )

}

Logo.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string
}

export default Logo;