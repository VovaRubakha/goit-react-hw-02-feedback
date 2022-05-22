import PropTypes from 'prop-types'
import Notification from '../Notification'
import style from './statistics.module.css'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    console.log(total);
    return (
        <div className={style.container}>
            {!total ? (<Notification message={"Here's no feedback yet"}/>):(
            <ul className={style.list}>
                <li className={style.item}>
                    Good: {good}
                </li>
                <li className={style.item}>
                    Neutral: {neutral}
                </li>
                <li className={style.item}>
                    Bad: {bad}
                </li>
                <li className={style.item}>
                    Total: {total}
                </li>
                <li className={style.item}>
                    Positive Feedback: {positivePercentage}%
                </li>
            </ul>
            )}

        </div>
    );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}