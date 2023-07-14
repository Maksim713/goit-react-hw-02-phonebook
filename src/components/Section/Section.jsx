import Container from '../Container';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <Container>
        <h2 className={css.title}>{title}</h2>
        {children}
      </Container>
    </div>
  );
};

Container.propTypes = {
  title: PropTypes.string,
};

export default Section;
