import style from "./Card.module.scss"
import PropTypes from 'prop-types'


const Card = ({ addToCart, title, description, image, price, variants, quantity }) => {


    return (


        <div className={style.card}>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>{price}</p>
            <button onClick={() => addToCart(variants, quantity)}> Add to cart</button>
        </div>

    )


}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    variants: PropTypes.object,
    quantity: PropTypes.number,
    addToCart: PropTypes.func

}

export default Card

