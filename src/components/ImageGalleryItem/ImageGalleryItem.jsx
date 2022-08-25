import styles from './ImageGalleryItem.module.scss';

import { nanoid } from 'nanoid';

const ImageGalleryItem = ({ items }) => {
  return items.map(({ id, webformatURL, tags }) => {
    return (
      <li className={styles.ImageGalleryItem} id={id} key={nanoid()}>
        <img
          src={webformatURL}
          alt={tags}
          className={styles.ImageGalleryItemImage}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;
