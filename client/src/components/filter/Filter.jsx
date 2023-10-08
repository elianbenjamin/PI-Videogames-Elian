import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Filter.module.css'
import { updateFilter } from '../../redux/action';

const Filter = () => {

    const dispatch = useDispatch()
    const [select, setSelect] = useState('')

    const handlerFilter = (event) => {
        const genre = event.target.value;
        setSelect(genre);
        dispatch(updateFilter('genre', genre));
      };
    return (
        <div className={styles.container}>
           <select className={styles.select} name="genres" id="genres" onChange={handlerFilter} value={select}>
           <option className={styles.option} value="">By genre</option>
            <option className={styles.option} value="Action">Action</option>
            <option className={styles.option} value="Indie">Indie</option>
            <option className={styles.option} value="Adventure">Adventure</option>
            <option className={styles.option} value="RPG">RPG</option>
            <option className={styles.option} value="Strategy">Strategy</option>
            <option className={styles.option} value="Shooter">Shooter</option>
            <option className={styles.option} value="Casual">Casual</option>
            <option className={styles.option} value="Simulation">Simulation</option>
            <option className={styles.option} value="Card">Card</option>
            <option className={styles.option} value="Educational">Educational</option>
            <option className={styles.option} value="Board Games">Board Games</option>
            <option className={styles.option} value="Family">Family</option>
            <option className={styles.option} value="Fighting">Fighting</option>
            <option className={styles.option} value="Sports">Sports</option>
            <option className={styles.option} value="Racing">Racing</option>
            <option className={styles.option} value="Massively Multiplayer">Massively Multiplayer</option>
            <option className={styles.option} value="Arcade">Arcade</option>
            <option className={styles.option} value="Puzzle">Puzzle</option>
            <option className={styles.option} value="Platformer">Platformer</option>
           </select>
        </div>
    );
}

export default Filter;
