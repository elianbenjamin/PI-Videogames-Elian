import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderVideogames } from '../../redux/action';
import styles from './Order.module.css'

const Order = () => {
    
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false);


    const handleOrder = (event) =>{
        dispatch(orderVideogames(event.target.value))
        setAux(!aux)
    }

    return (
        <div>
            <select className={styles.select} name="order" id="order" onChange={handleOrder}>
            <option className={styles.option} value="AscendenteNombre">Ascendant </option>
            <option className={styles.option} value="DescendenteNombre">Falling </option>
            </select>
        </div>
    );
}

export default Order;
