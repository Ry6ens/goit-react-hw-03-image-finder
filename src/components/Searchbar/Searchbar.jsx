import styles from './Searchbar.module.scss';

import { Component } from 'react';

class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const search = e.currentTarget.elements.search.value;

    const { getSearch } = this.props;

    getSearch(search);

    e.currentTarget.reset();
  };

  render() {
    const { handleSubmit } = this;

    return (
      <header className={styles.searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
