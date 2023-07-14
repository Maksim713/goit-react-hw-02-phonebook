import css from './ContactsList.module.css';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onClickDelete }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <span className={css.name}>
              {name}: {number}
            </span>
            <button
              className={css.btn}
              type="button"
              onClick={() => onClickDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickDelete: PropTypes.func.isRequired,
};

export default ContactsList;
