import React, { useState } from "react";
import  { useDispatch } from 'react-redux'
import { createVideogames } from "../../redux/action";
import NavBar from "../navbar/NavBar";
import styles from "./Form.module.css"
import validation from "../../helpers/validation";




const Form = () => {
    const dispatch = useDispatch()
/* const { name, description, platforms, background_image, released, rating, genres } = req.body; */
    const [games, setGames] = useState({
        name: "",
        background_image:"",
        description: "",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    })
    console.log('estado local', games)

    const [error, setError] = useState({
      name: "",
      background_image: "",
      description: "",
      platforms: "",
      released: "",
      rating: "" ,
      genres: ""
    })

    const handleChange = (event) => {
      if (event.target.name === 'platforms' || event.target.name === 'genres') {
        setGames({
          ...games,
          [event.target.name]: event.target.value.split(',')
        })
      } else{
        setGames({
            ...games,
            [event.target.name] : event.target.value,
        })
      } setError(validation({
        ...games,
        [event.target.name]: event.target.value,
    })
);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createVideogames(games))
    }
    
  

  return (
    <>
    <NavBar/> 
    
    <div className={styles.cointainer}>


 <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputName}>
        <label className={styles.label} htmlFor="name" >Name: </label>
        <input className={styles.input} id="name" type="text" name='name' value={games.name} onChange={handleChange}/>
        {error.name && <p>{error.name}</p>}
      </div>

      <div className={styles.inputImg}>
        <label className={styles.label}  htmlFor="background_image" >Image: </label>
        <input className={styles.input} id="background_image" type="url" name='background_image' value={games.background_image} onChange={handleChange}/>
        {error.background_image && <p>{error.background_image}</p>}
      </div>

      <div className={styles.inputDescription}>
        <label className={styles.label}  htmlFor="description" >Description: </label>
        <input className={styles.input} id="description" type="text" name='description' value={games.description} onChange={handleChange}/>
        {error.description && <p>{error.description}</p>}
      </div>

      <div className={styles.inputPlatforms}>
        <label className={styles.label} htmlFor="platforms" >Platforms: </label>
        <input className={styles.input} id="platforms" type="text" name='platforms' placeholder="Ingrese las plataformas separadas por comas" value={games.platforms.toString()} onChange={handleChange}/>
        {error.platforms && <p>{error.platforms}</p>}
      </div>
      <div className={styles.inputReleased}>
        <label className={styles.label} htmlFor="released" >Realesed: </label>
        <input className={styles.input} id="released" type="date" name='released' value={games.released} onChange={handleChange}/>
        {error.released && <p>{error.released}</p>}
      </div>

      <div className={styles.inputRating}>
        <label className={styles.label} htmlFor="rating" >Rating: </label>
        <input className={styles.input} id="rating" type="number" name='rating' value={games.rating} onChange={handleChange}/>
        {error.rating && <p>{error.rating}</p>}
      </div>

      <div className={styles.inputGenres}>
        <label className={styles.label} htmlFor="genres" >Genres: </label>
        <input className={styles.input} id="genres" type="text" name='genres' placeholder="Ingrese los géneros separados por comas"value={games.genres.toString()} onChange={handleChange}/>
        {error.genres && <p>{error.genres}</p>}
      </div>

      <button className={styles.button} type="submit" onClick={handleSubmit}>Crear videoGames</button>
      </form>
    </div>
  </>
  );
};

export default Form;
