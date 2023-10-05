import React, { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPagina(parseInt(pagina) + 1);
  };

  const backPage = () => {
    setInput(parseInt(input) - 1);
    setPagina(parseInt(pagina) - 1);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      setPagina(parseInt(event.target.value));
      if (
        parseInt(event.target.value < 1) ||
        parseInt(event.target.value) > Math.ceil(maximo) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPagina(1);
        setInput(1);
      } else {
        setPagina(parseInt(event.target.value));
      }
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={pagina === 1 || pagina < 1}
        onClick={backPage}
      >
        -
      </button>
      <input
        className={styles.input}
        onChange={(event) => onChange(event)}
        onKeyDown={(event) => onKeyDown(event)}
        name="page"
        type="text"
        autoComplete="off"
        value={input}
      />
      <p className={styles.p}>of {Math.ceil(maximo)}</p>
      <button
        className={styles.button}
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
