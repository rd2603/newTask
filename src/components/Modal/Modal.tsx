import React, { useEffect } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isVisible: boolean;
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, image, onClose }) => {
  // Add keydown listener for ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  let imageSrc;
    try {
        imageSrc = require(`../../assets/${image}`);
    } catch (err) {
        imageSrc = ''; // Fallback if the image is not found
        console.error(`Image not found: ${image}`);
    }

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Modal Content" className={styles.image} />
      </div>
    </div>
  );
};

export default Modal;
