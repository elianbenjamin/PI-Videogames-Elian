import React, { useEffect} from "react";
import NavBar from "../navbar/NavBar";

import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import {getAllVideogames} from "../../redux/action"




const HomePage = () => {
 
  const dispatch = useDispatch();
  const {videogames}  = useSelector(state => state);
  console.log('heeeeey',videogames)
    

  useEffect(() => {     
    dispatch(getAllVideogames());    
  }, [dispatch]);



  return (
    <div>    
      <NavBar />
      
      {videogames?.map(
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
      

    </div>
  );
};

export default HomePage;
