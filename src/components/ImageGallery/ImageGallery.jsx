import styles from './ImageGallery.module.scss';

import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { searchPosts } from 'shared/api/posts';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    items: [],
    loader: false,
    error: null,
    page: 1,
    showModal: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (prevProps.search !== this.props.search) {
      this.setState({ loader: true });

      try {
        const data = await searchPosts(this.props.search, page);
        this.setState(() => ({
          items: [...data.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loader: false });
      }
    }

    if (page > prevState.page) {
      this.setState({ loader: true });

      try {
        const data = await searchPosts(this.props.search, page);
        this.setState(({ items }) => ({
          items: [...items, ...data.hits],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  getModalImage = showModal => {
    this.setState({ showModal });
  };

  render() {
    const { handleLoadMore, getModalImage } = this;
    const { items, loader, showModal } = this.state;

    const isItems = Boolean(items.length);

    return (
      <>
        <ul className={styles.ImageList}>
          <ImageGalleryItem items={items} onClickImage={getModalImage} />
        </ul>
        <div className={styles.threedots}>
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={loader}
          />
        </div>

        {isItems && <Button onClickLoadMore={handleLoadMore} />}

        {showModal && (
          <Modal onClose={getModalImage}>
            <img src={showModal} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
