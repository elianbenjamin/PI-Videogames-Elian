import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Order.module.css";
import { updateFilter } from "../../redux/action";

const Order = () => {
  const dispatch = useDispatch();

  const [orderName, setOrdenName] = useState('')

  const handleOrder = (event) => {
    const order = event.target.value;
    setOrdenName(order)
    dispatch(updateFilter("order", order));
  };

  return (
    <div>
      <select
        className={styles.select}
        name="order"
        id="order"
        onChange={handleOrder}
        value={orderName}
      >
        <option className={styles.option} value="">By order</option>
        <option className={styles.option} value="AscendenteNombre">
          A-Z{" "}
        </option>
        <option className={styles.option} value="DescendenteNombre">
          Z-A{" "}
        </option>
      </select>
    </div>
  );
};

export default Order;
