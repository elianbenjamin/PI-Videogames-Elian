import React from "react";
import styles from './Detail.module.css'
import { useNavigate } from "react-router-dom";


const DetailDumb = ({props}) => {
    const {name, background_image, description, released, genres, platforms} = props
  const navigate = useNavigate()
  return (
    
    <div className={styles.div}>
      <div className={styles.div2}>
        <h1>{name}</h1>
        <br />
        <img
          className={styles.img}
          src={background_image}
          alt={name}
        />
        <p className={styles.text}>{description}</p>
        <h2>{genres}</h2>
        <h1>{platforms}</h1>
        <h3>{released}</h3>

        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Back...
        </button>
      </div>
    </div>
  );
};

export default DetailDumb;
