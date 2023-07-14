import PropTypes from 'prop-types';
import css from './InputField.module.css';

const InputField = ({ ...other }) => {
  const {
    label,
    value,
    type,
    name,
    pattern,
    title,
    required = false,
    onChange,
  } = other;
  return (
    <p className={css.fieldWrap}>
      <label className={css.field}>
        <span className={css.label}>{label}</span>
        <input
          className={css.input}
          value={value}
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required={required}
          onChange={onChange}
        />
      </label>
    </p>
  );
};

InputField.protoTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
