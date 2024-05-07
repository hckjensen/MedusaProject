import style from './ShopNow.module.scss';
import { Link } from 'react-router-dom';


const ShopNow = () => {

    return (
        <div className={style.shopNow}>
            <h2>Shop now</h2>
            <p>Our delicious coffees wil get you brewing the best cup of coffee you ever tasted in no time at all. And the best part of it? It is totally organic, fair trade and sustainably sourced. So get brewing</p>
            <Link to="/products" className={style.shopNowButton}>Go to products</Link>
        </div>
    );

}

export default ShopNow;