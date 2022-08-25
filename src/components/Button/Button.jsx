import styles from './Button.module.scss';

const Button = ({ onClickLoadMore }) => {
  return (
    <button type="button" className={styles.btn} onClick={onClickLoadMore}>
      Load more
    </button>
  );
};

export default Button;
