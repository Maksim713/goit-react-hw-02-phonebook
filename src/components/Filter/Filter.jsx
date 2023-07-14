import { Component } from 'react';
import InputField from '../InputField';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onSearchInput } = this.props;

    return (
      <div className={css.container}>
        <InputField
          label="Find contacts by name"
          value={filter}
          type="text"
          name="filter"
          onChange={onSearchInput}
        />
      </div>
    );
  }
}

export default Filter;
