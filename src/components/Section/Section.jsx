import css from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = function ({ title, children }) {
  return (
    <div className={css.section}>
      <h2 className={css.heading}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
