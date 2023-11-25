import React from 'react';
import styles from './Button.module.css';

const Button = ({ loadMore, onClick }) => {
  return loadMore ? (
    <button onClick={onClick} className={styles.loadMoreButton}>
      Load More
    </button>
  ) : null;
};

export default Button;
