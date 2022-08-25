import styles from './App.module.scss';

import ImageGallery from './ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state = { search: '' };

  getSearch = search => {
    this.setState({ search: search });
  };

  render() {
    const { getSearch } = this;
    const { search } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar getSearch={getSearch} />
        <ImageGallery search={search} />
      </div>
    );
  }
}
