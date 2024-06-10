import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div className={css.statistics}>
    <p className={css.statisticsItem}>
      Good: <span>{good}</span>
    </p>
    <p className={css.statisticsItem}>
      Neutral: <span>{neutral}</span>
    </p>
    <p className={css.statisticsItem}>
      Bad: <span>{bad}</span>
    </p>
    <p className={css.statisticsItem}>
      Total: <span>{total}</span>
    </p>
    <p className={css.statisticsItem}>
      Positive Feedback: <span>{positivePercentage}%</span>
    </p>
  </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
