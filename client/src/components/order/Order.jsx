import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Order.module.css'
import { updateFilter } from '../../redux/action';

const Order = () => {
    
    const dispatch = useDispatch()
    


    const handleOrder = (event) => {
        const order = event.target.value;
        dispatch(updateFilter('order', order));
      };

    return (
        <div>
            <select className={styles.select} name="order" id="order" onChange={handleOrder}>
            <option className={styles.option} value="AscendenteNombre">Ascendant </option>
            <option className={styles.option} value="DescendenteNombre">Descendet </option>
            </select>
        </div>
    );
}

export default Order;
