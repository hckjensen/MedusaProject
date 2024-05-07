import style from './SalesPitch.module.scss';
import PropTypes from 'prop-types';

const SalesPitch = ({ pitchItems }) => {


    return (
        <>
            <div className={style.salesPitch}>
                {pitchItems.map((pitchItem, index) => (
                    <div key={index} className={style.pitchItem}>
                        <h2>{pitchItem.heading}</h2>
                        <p>{pitchItem.content}</p>
                        <img src={pitchItem.image} alt={pitchItem.heading} />
                    </div>
                ))}
            </div>
        </>
    )

}

SalesPitch.propTypes = { pitchItems: PropTypes.array.isRequired }

export default SalesPitch;