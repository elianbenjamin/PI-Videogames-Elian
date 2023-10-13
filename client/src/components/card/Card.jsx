import React from "react";
import styles from "../card/Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, background_image, genres }) => {
  
  return (
    <NavLink to={`/detail/${id}`}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImg}>
          <img className={styles.img} src={background_image} alt="" />
        </div>
        <div className={styles.cardName}>
          <h2 className={styles.name}>{name}</h2>
          {genres.map((genre, index)=> <span key={index} className={styles.genres}>{genre}</span>)}
        
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
