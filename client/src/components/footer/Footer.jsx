
import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <p>&copy; 2023 Tu Empresa. Todos los derechos reservados. Gana El peluca</p>
        <NavLink to={'https://www.linkedin.com/in/elian-rivera-619297239/'} target="_blank">
        <img className={styles.img} src="https://imgs.search.brave.com/IgX9_wXgeDo05kR8Z-Z4vNixhO82oaQq1fGfGqrmsRQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzEw/OTkvUE5HLzUxMi8x/NDg1NDgyMTk5LWxp/bmtlZGluXzc4NjY3/LnBuZw" alt="" />
        </NavLink> 

        <NavLink to={'https://github.com/elianbenjamin'} target="_blank">
        <img  className={styles.img2} src="https://github.com/fluidicon.png" alt="" />
        </NavLink>

      </div>
    </footer>
  );
}

export default Footer;
