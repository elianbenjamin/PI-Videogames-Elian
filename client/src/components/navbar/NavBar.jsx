import React from 'react';
import styles from './NavBar.module.css'
import SearchBar from '../searchBar/SearchBar';

import { NavLink } from 'react-router-dom';






const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navLogo}>
                <NavLink to="/home">
                <img className={styles.img} src="https://cdn2.iconfinder.com/data/icons/popular-games-1/50/warface_squircle-512.png" alt="" />
                </NavLink>
                <span className={styles.logoName}>ebrr</span>
                
            </div>
            <NavLink to={'/creategames'}>
            <button className={styles.btn}>Create Games</button>
            </NavLink>
            <SearchBar />
            
            
            

        </div>
    );
}

export default NavBar;
