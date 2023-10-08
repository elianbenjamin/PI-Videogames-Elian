import React, { useEffect, useState, useRef } from "react";
import styles from "../searchBar/SearchBar.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogamesName } from "../../redux/action";

const SearchBar = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState(name || "");
  const videogameName = useSelector((state) => state.videogameName);
  const [showResults, setShowResults] = useState(false); // Estado para controlar la visibilidad de los resultados
  const [noResults, setNoResults] = useState(false); // Estado para controlar la visibilidad del mensaje de "No se encontraron videojuegos"

  const searchRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getVideogamesName(searchTerm)).then(() => {
      setShowResults(true);
      if (videogameName.length === 0) {
        setNoResults(true);
      }
      setSearchTerm(""); // Limpiar el input después de la búsqueda
    });
  };

  useEffect(() => {
    return () => {
      setSearchTerm("");
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Limpieza cuando el componente se desmonte
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container1} ref={searchRef}>
      <form>
        <input
          className={styles.input}
          type="search"
          placeholder="Search 854,227 games"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onFocus={() => setShowResults(true)}
        />
        <button className={styles.btn} type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div>
        {showResults && (
          <div className={styles.hijo}>
            {videogameName.length > 0
              ? videogameName.map((game) => (
                  <div key={game.id}>
                    <NavLink to={`/detail/${game.id}`}>
                      <li>
                        <img
                          src={game.background_image}
                          className={styles.img}
                          alt="Game"
                        />
                        <h5 className={styles.name}>{game.name}</h5>
                      </li>
                    </NavLink>
                  </div>
                ))
              : noResults && (
                  <div className={styles.noResults}>
                    <p>No se encontraron videojuegos con ese nombre.</p>
                  </div>
                )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar; //si no busca los creados anda a github
