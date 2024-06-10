import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div className={css.feedbackOptions}>
      {options.map(option => (
        <button 
          className={css.feedbackBtn}
          key={option} 
          onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
      </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
