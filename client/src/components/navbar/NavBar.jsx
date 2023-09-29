import React from 'react';
import styles from './NavBar.module.css'
import SearchBar from '../searchBar/SearchBar';
import Pagination from '../pagination/Pagination';




const NavBar = () => {
    return (
        <div className={styles.div}>
    
            <SearchBar />
            <Pagination />

        </div>
    );
}

export default NavBar;
