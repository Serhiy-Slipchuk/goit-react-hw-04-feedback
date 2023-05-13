import css from './Statistics.module.scss';
import PropTypes from 'prop-types';

const Statistics = function ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={css.statThumb}>
      <p className={css.message}>Good: {good}</p>
      <p className={css.message}>Neutral: {neutral}</p>
      <p className={css.message}>Bad: {bad}</p>
      <p className={css.message}>Total: {total()}</p>
      <p className={css.message}>Positive feedback: {positivePercentage()}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
