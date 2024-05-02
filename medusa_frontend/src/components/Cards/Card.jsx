import style from "./Card.module.scss"
import PropTypes from 'prop-types'


const Card = ({ title, description, subDescription }) => {


    return (
        <div className={style.card}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{subDescription}</p>
        </div>
    )


}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    subDescription: PropTypes.string
}

export default Card

