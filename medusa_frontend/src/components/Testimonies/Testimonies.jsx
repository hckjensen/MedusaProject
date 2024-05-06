import style from './Testimonies.module.scss';
import PropTypes from 'prop-types';

const Testimonies = ({ testimonies }) => {

    return (
        <div className={style.testimonies}>
            <h2>Testimonies</h2>
            <div className={style.testimoniesContainer}>
                {testimonies.map((testimony, index) => (
                    <div key={index} className={style.testimony}>
                        <h3>{testimony.name}</h3>
                        <p>{testimony.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );

}

Testimonies.propTypes = {
    testimonies: PropTypes.array.isRequired
}

export default Testimonies;