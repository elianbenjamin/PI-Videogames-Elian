import React from "react";
import styles from "../card/Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({ id, name, background_image, genres }) => {
  return (
    <NavLink to={`/detail/${id}`}>
      <button className={styles.btn}>
        <div className={styles.div1}>
          <h1 className={styles.name}>{name}</h1>
          <img className={styles.img} src={background_image} alt="" />
          <h1 className={styles.genres}>{genres}</h1>
        </div>
      </button>
    </NavLink>
  );
};

export default Card;
