import React, { useState } from "react";
import  { useDispatch, useSelector } from 'react-redux'
import { createVideogames } from "../../redux/action";
import NavBar from "../navbar/NavBar";
import styles from "./Form.module.css"
import validation from "../../helpers/validation";
import { useNavigate } from "react-router-dom";


const Form = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const videogames = useSelector((state)=> state.videogames)

    const allPlatforms = [...new Set(videogames.flatMap((game) => game.platforms))];
    const allGenres = [...new Set(videogames.flatMap((game)=> game.genres))]
    

    const [games, setGames] = useState({
        name: "",
        background_image:"",
        description: "",
        platforms: [],
        released: "",
        rating: "",
        genres: []
    })


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
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setGames({
          ...games,
          [event.target.name]: selectedOptions
        })
      } else{
        setGames({
            ...games,
            [event.target.name] : event.target.value,
        })
      } setError(validation({
        ...games,
        [event.target.name]: event.target.value,
        videogames: videogames
    })
);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const hasErrors = Object.values(error).some((errorMessage)=> errorMessage !== '')

        if (isFormInvalid() || hasErrors) {
          alert('Tu formulario está incompleto o contiene errores de validación. Por favor, verifica los campos.');
        } else {
          
      dispatch(createVideogames(games))
          alert('¡Tu formulario se envió con éxito!');
          
          setGames({
            name: '',
            background_image: '',
            description: '',
            genres: '',
            platforms: '',
            rating: '',
            released: ''
          });
          navigate('/home')
        }
    }
    
    const isFormInvalid = () => {
      return Object.values(games).some((value) => value === '');
    };
    

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
        <select
              className={styles.input}
              id="platforms"
              name="platforms"
              multiple
              value={games.platforms}
              onChange={handleChange}
            >
              {allPlatforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
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
        <select
              className={styles.input}
              id="genres"
              name="genres"
              multiple
              value={games.genres}
              onChange={handleChange}
            >
              {allGenres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
        {error.genres && <p>{error.genres}</p>}
      </div>
    
      <button className={styles.button} type="submit" onClick={handleSubmit}>Create videoGames</button>
      
      </form>
    </div>
  </>
  );
};

export default Form;
