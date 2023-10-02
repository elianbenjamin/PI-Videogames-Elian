import React from "react";
import styles from "./Detail.module.css";
import { useNavigate } from "react-router-dom";

const DetailDumb = ({ props }) => {
  const { name, background_image, description, released, genres, platforms, rating } =
    props;

  const navigate = useNavigate();

  return (
    <div className={styles.container}>
    <div className={styles.containerHijo}>
      <div className={styles.div2}>
        <img className={styles.img} src={background_image} alt={name} />
        <h1 className={styles.name}>{name}</h1>
        <h3>Realesed: {released}</h3>
        <h3>Platfroms: {platforms ? platforms.join(", ") : ""}</h3>
        <h2 className={styles.genres}>Genres: {genres ? genres.join(", ") : ""}</h2>
        <span className={styles.rating}>Rating: {rating}</span>
        <p className={styles.text}>Description: {description}</p>

        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Back...
        </button>
      </div>
    </div>
    </div>
  );
};

export default DetailDumb;
