import React  from "react";
import styles from "./Rating.module.css";
import { useDispatch } from "react-redux";
import { ratingVideogames } from "../../redux/action";


const Rating = () => {
const dispatch = useDispatch()


const handlerRating = (event) => {
    const rating = event.target.value
    dispatch(ratingVideogames(rating))
   
}


  return (
    <div>
      <select className={styles.select} name="Rating" id="Rating" onChange={handlerRating}>
        <option className={styles.option} value="Rating">
          Rating
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
