import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ imageUrl, altText, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = event => {
      const modal = document.querySelector(`.${styles.modal}`);
      if (
        event.target.classList.contains(styles.overlay) ||
        (modal && modal.contains(event.target))
      ) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img src={imageUrl} alt={altText} />
      </div>
    </div>
  );
};

export default Modal;
