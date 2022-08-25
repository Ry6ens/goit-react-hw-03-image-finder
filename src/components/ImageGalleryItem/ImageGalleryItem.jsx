import styles from './ImageGalleryItem.module.scss';

import { nanoid } from 'nanoid';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {};

  getLargeImage = e => {
    this.props.onClickImage(e.target.dataset.image);
  };

  render() {
    const { getLargeImage } = this;
    const { items } = this.props;

    return items.map(({ id, webformatURL, largeImageURL, tags }) => {
      return (
        <li className={styles.ImageGalleryItem} id={id} key={nanoid()}>
          <img
            src={webformatURL}
            data-image={largeImageURL}
            alt={tags}
            className={styles.ImageGalleryItemImage}
            onClick={getLargeImage}
          />
        </li>
      );
    });
  }
}

export default ImageGalleryItem;
