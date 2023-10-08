import React from 'react';
import styles from './NavBar.module.css'
import SearchBar from '../searchBar/SearchBar';
import Filter from "../filter/Filter";
import Order from "../order/Order";
import Reset from "../reset/Reset";
import Rating from '../rating/Rating';
import { NavLink } from 'react-router-dom';
import FilterSource from '../filterSource/FilterSource';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navLogo}>
                <NavLink to="/home">
                <img className={styles.img} src="https://cdn2.iconfinder.com/data/icons/popular-games-1/50/warface_squircle-512.png" alt="" />
                </NavLink>
                <span className={styles.logoName}>ebrr</span>
                
            </div>
            <Filter />
            <Order/>
            <Rating />
            <FilterSource/>
            <Reset/>
            <NavLink to={'/creategames'}>
            <button className={styles.btn}>Create Games</button>
            </NavLink>
            
           
           
            <SearchBar />
            
            
            

        </div>
    );
}

export default NavBar;
