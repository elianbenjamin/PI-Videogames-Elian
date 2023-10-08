import React from 'react';
import Card from '../card/Card';
import styles from './Cards.module.css';

const Cards = ({ videogames }) => {
  
  return (
    <div className={styles.div}>
      {videogames?.map(({ id, name, platforms, background_image, genres }) => (
        <div className={styles.container} key={id }>
          <Card
            id={id} 
            name={name}      
            platforms={platforms}
            background_image={background_image}
            genres={genres} 
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
