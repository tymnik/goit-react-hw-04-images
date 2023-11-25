import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = event => {
      const modal = document.querySelector(`.${styles.modal}`);
      if (
        event.target.classList.contains(styles.overlay) ||
        (modal && modal.contains(event.target))
      ) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <li className={styles.galleryItem} onClick={openModal}>
        <img className={styles.imageGalleryItem} src={src} alt={alt} />
      </li>
      {isModalOpen && (
        <Modal imageUrl={src} altText={alt} onClose={closeModal} />
      )}
    </>
  );
};

export default ImageGalleryItem;
