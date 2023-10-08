import React, { useState } from "react";
import styles from "./Rating.module.css";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/action";

const Rating = () => {
  const dispatch = useDispatch();

  const [orderRating, setOrderRating] = useState('')

  const handlerRating = (event) => {
    const rating = event.target.value;
    setOrderRating(rating)
    dispatch(updateFilter("rating", rating));
  };

  return (
    <div>
      <select
        className={styles.select}
        name="Rating"
        id="Rating"
        onChange={handlerRating}
        value={orderRating}
      >
        <option className={styles.option} value="">
         By Rating
        </option>
        <option className={styles.option} value="AscRating">
          ★★★★☆
        </option>
        <option className={styles.option} value="DescRating">
          ★★☆☆☆
        </option>
      </select>
    </div>
  );
};

export default Rating;
