import React from 'react';
import Card from '../card/Card';


const Cards = ({videogames}) => {

    return (
        <div className={styles.div}>
        {
        videogames?.map(({name, platforms, background_image, genres}) => {

             return(
                <div className={styles.container}>
                <Card
                name={name}
                platforms={platforms}
                background_image={background_image}
                genres={genres}
                />
                </div>
                 )

    })}
  
        </div>
)




    /* return (
        <div>
             {
                videogames?.map(({name,platforms, background_image, genres})=>{

                    return
                })
            }
            
        </div>
    ); */
}

export default Cards;
