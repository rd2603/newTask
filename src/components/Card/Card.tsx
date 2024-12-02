import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  thumbnail: string;
  onClick: () => void; // Added onClick for modal functionality
}

const Card: React.FC<CardProps> = ({ title, thumbnail, onClick }) => {
    let imageSrc;
  try {
    imageSrc = require(`../../assets/${thumbnail}`);
  } catch (err) {
    imageSrc = ''; // Fallback if image is missing
    console.error(`Image not found: ${thumbnail}`);
  }
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imageSrc} alt={title} className={styles.thumbnail} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default Card;
