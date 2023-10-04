import React, { useState } from "react";
import styles from "./Rating.module.css";
import { useDispatch } from "react-redux";
import { ratingVideogames } from "../../redux/action";


const Rating = () => {
const dispatch = useDispatch()
const [aux, setAux] = useState(false);

const handlerRating = (event) => {
    const rating = event.target.value
    setAux(rating)
    dispatch(ratingVideogames(rating))
}


  return (
    <div>
      <select className={styles.select} name="Rating" id="Rating" onChange={handlerRating}>
        <option className={styles.option} value="Rating">
          Rating
        </option>
        <option className={styles.option} value="0-1">
          ★☆☆☆☆ 
        </option>
        <option className={styles.option} value="1-2">
          ★★☆☆☆ 
        </option>
        <option className={styles.option} value="2-3">
          ★★★☆☆ 
        </option>
        <option className={styles.option} value="4-5">
          ★★★★☆ 
        </option>
      </select>
    </div>
  );
};

export default Rating;
