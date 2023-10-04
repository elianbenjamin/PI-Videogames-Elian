import React, { useEffect, useState} from "react";
import NavBar from "../navbar/NavBar";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import {getAllVideogames} from "../../redux/action"
import Footer from "../footer/Footer";




const HomePage = () => {
  
  const [pagina, setPagina] = useState(1)       //
  const [porPagina, setPorPagina] = useState(10)   //
 
  
  const dispatch = useDispatch();
  const {videogames}  = useSelector(state => state);
  console.log('heeeeey',videogames)
  
  const maximo = videogames.length / porPagina;   //

  useEffect(() => {     
    dispatch(getAllVideogames());    
  }, [dispatch]);



  return (
    <div>    
      <NavBar />
      
      {videogames?.slice((pagina -1) * porPagina ,(pagina -1) * porPagina + porPagina).map(
        ({ id, name, background_image, genres}) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              background_image={background_image}
              genres={genres}
             
            />
          );
        }
      )}
      <br /> 
      
      <Pagination  pagina={pagina}  setPagina={setPagina} maximo={maximo}/>
      <Footer/>
    </div>

  );
};

export default HomePage;
