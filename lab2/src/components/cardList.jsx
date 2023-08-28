import React from 'react';
import Card from './Card';
import styles from '../styles/Card.module.css'

const CardList = () => {
  const cardsData = [
    {
      title: 'Card 1 Title',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2 Title',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3 Title',
      description: 'Description for Card 3',
    },
  ];

  return (
    <div className={styles.cardList}>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardList;
