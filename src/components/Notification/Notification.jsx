import css from './Notification.module.scss';
import PropTypes from 'prop-types';

const Notification = function ({ message }) {
  return (
    <div className={css.statThumb}>
      <p className={css.notification}>{message}</p>
    </div>
  );
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
