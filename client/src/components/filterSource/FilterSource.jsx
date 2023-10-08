import React, { useState } from 'react';
import styles from './FilterSource.module.css'
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/action';


const FilterSource = () => {

    const dispatch = useDispatch()
    const [filterSource, setFilterSource] = useState('')
   
    const handlerSource = (event) =>{
        const source = event.target.value;
        setFilterSource(source)
        dispatch(updateFilter('source',source))
    }

    return (
        <div>
            <select className={styles.select} name="source" id="source"  onChange={handlerSource} value={filterSource}>
                <option className={styles.option} value="">Source</option>
                <option className={styles.option} value="API">API</option>
                <option className={styles.option} value="DB">DB</option>
            </select>
        </div>
    );
}

export default FilterSource;
