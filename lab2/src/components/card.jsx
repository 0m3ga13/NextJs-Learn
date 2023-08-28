import React from 'react';
import styles from '../styles/Card.module.css'

const Card = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.button}>Button Link Text</button>
    </div>
  );
};

export default Card;
