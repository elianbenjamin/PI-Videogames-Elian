import React from "react";
import styles from "./Reset.module.css";
import { useDispatch } from "react-redux";
import { resetVideogames } from "../../redux/action";

const Reset = () => {
  const dispatch = useDispatch();

  const handlerReset = () => {
    dispatch(resetVideogames());
  };

  return (
    <div>
      <button className={styles.btn} onClick={handlerReset}>
        Reset
      </button>
    </div>
  );
};

export default Reset;
