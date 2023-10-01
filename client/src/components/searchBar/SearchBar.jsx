import React, { useState } from 'react';
import styles from '../searchBar/SearchBar.module.css'
import {  useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogamesName } from '../../redux/action';




const SearchBar = () => {

    const { name } = useParams();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(name || ''); 
    const { videogameName } = useSelector((state) => state); 
    console.log('soyy el nameee', videogameName)
    const handleSearch = (event) => {
      event.preventDefault();
      dispatch(getVideogamesName(searchTerm));
    };
  
    return (
      <div >
        <form className={styles.search} onSubmit={handleSearch}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search 854,227 games"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <button className={styles.btn} type="submit" onClick={handleSearch}>Search</button>
         
        </form>
        {videogameName && (
          <div>
            <ul className={styles.ul}>
              {videogameName.map((game) => (
                <li key={game.id}><h1 className={styles.name}>{game.name}</h1></li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
}

export default SearchBar;
