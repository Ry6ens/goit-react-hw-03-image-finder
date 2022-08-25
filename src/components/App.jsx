import styles from './App.module.scss';

import ImageGallery from './ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = { search: '', showModal: false };

  getSearch = search => {
    this.setState({ search: search });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { getSearch, toggleModal } = this;
    const { search, showModal } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar getSearch={getSearch} />
        <ImageGallery search={search} toggleModal={toggleModal} />
        {showModal && (
          <Modal onClose={toggleModal}>
            <p Style="color: white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              dignissimos ea corporis unde numquam excepturi, tempora, quasi,
              minima qui nulla quod fugit quaerat facere. Quod voluptatibus
              voluptates dolor assumenda et?
            </p>
            <img src="" alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
