import React from 'react';
import styles from './ErrorPage.module.css'
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src="https://imgs.search.brave.com/396As5bq_qjMgO73IosiTtPQWsw7t8WdxX8nBlb6ZoU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI0MTQ3/MjguanBn"  alt="Elian" />

            <NavLink to={'/home'}>

            <button className={styles.btn}>Home</button>
            
            </NavLink>
        </div>
    );
}

export default ErrorPage;
