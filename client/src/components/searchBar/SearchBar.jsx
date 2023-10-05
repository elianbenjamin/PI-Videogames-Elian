import React, {  useEffect, useState, useRef } from 'react';
import styles from '../searchBar/SearchBar.module.css'
import {  NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  getVideogamesName } from '../../redux/action';





const SearchBar = () => {

    const { name } = useParams();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(name || ''); 
    const { videogameName } = useSelector((state) => state); 
    const [showResults, setShowResults] = useState(false); // Estado para controlar la visibilidad de los resultados
    console.log('soyy el nameee', videogameName)

    const searchRef = useRef(null);

    const handleSearch = (event) => {
      event.preventDefault();
      dispatch(getVideogamesName(searchTerm));
    };

    useEffect(() => {
      return () => {
        setSearchTerm('');
      };
    }, []);

    useEffect(() => {
     
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
      
          setShowResults(false);

        }
      };

      document.addEventListener('click', handleClickOutside);

      // Limpieza cuando el componente se desmonte
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);


 
  
    return (
      <div className={styles.container1} ref={searchRef}>
        <form >
          <input
            className={styles.input}
            type="search"
            placeholder="Search 854,227 games"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            onFocus={() => setShowResults(true)}
          />
          
          <button className={styles.btn} type="submit" onClick={handleSearch}>Search</button>
         
        </form>
        <div>
        {showResults &&videogameName && (
          <div className={styles.hijo }>
              

            {videogameName.map((game) => (

                <div key={game.id} >

                  <NavLink to={`/detail/${game.id}`}>

                    <li>
                        <img src={game.background_image} className={styles.img} alt='Game' />
                        <h5 className={styles.name}>{game.name}</h5>
                    </li>
                    
                    </NavLink>
                </div>
            ))}
        
     </div>
    
)}
</div>

      </div>
    );
}

export default SearchBar;
