import React from 'react';
import styles from './NavBar.module.css'
import SearchBar from '../searchBar/SearchBar';





const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navLogo}>
                <img className={styles.img} src="https://cdn2.iconfinder.com/data/icons/popular-games-1/50/warface_squircle-512.png" alt="" />
                <span className={styles.logoName}>ebrr</span>
            </div>
            <SearchBar />
            
            

        </div>
    );
}

export default NavBar;
