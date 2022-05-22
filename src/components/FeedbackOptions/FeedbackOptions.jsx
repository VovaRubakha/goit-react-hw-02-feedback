import PropTypes from 'prop-types';

import style from './feedback.module.css'

function FeedbackOptions ({ options, onLeaveFeedback }) {
    const elements = options.map(option => (
        <button
            key={option}
            className={style.button}
            type='button'
            onClick={() => onLeaveFeedback(option)}
        >
            {option}
        </button>
    ))
    return (
        <div className={style.feedbackButtons}>
        {elements}
         </div>
    )
}

export default FeedbackOptions

FeedbackOptions.defaultProps = {
    options: [],
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};