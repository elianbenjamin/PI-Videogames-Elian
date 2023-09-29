import React from 'react';
import styles from '../searchBar/SearchBar.module.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesName } from '../../redux/action';



const SearchBar = () => {

    const {name} = useParams()
    const dispatch = useDispatch()
    const {videogamesName} = useSelector((state)=> state)

    const handlersClick = (event)=>{
        event.preventDefault()
        dispatch(getVideogamesName(name))
    }
    
   
    return (
        <div>

            <form className={styles.search}>
                <input clastype="text" placeholder="Search 854,227 games "/><button onClick={handlersClick}>click</button> 
            </form>

        </div>
    );
}

export default SearchBar;
