import css from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = function ({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttonThumb}>
      {options.map(option => (
        <button
          key={option}
          className={css.button}
          name={option}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
