import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllVideogames } from "../../redux/action";
import Footer from "../footer/Footer";
import Loading from "../loading/Loading";

const HomePage = () => {
  const [pagina, setPagina] = useState(1); 
  // eslint-disable-next-line
  const [porPagina, _setPorPagina] = useState(15); 

  const dispatch = useDispatch();
  const videogames  = useSelector((state) => state.videogames);
  const [loading, setLoading] = useState(true);
  

  const maximo = videogames.length / porPagina; 

  useEffect(() => {
    let timeOut;
    dispatch(getAllVideogames())
      .then(() => {
        timeOut = setTimeout(() => setLoading(false), 0);
      })
      .catch(() => {
        timeOut = setTimeout(() => setLoading(false), 0);
      });
    return () => clearTimeout(timeOut);
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          {videogames
            ?.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map(({ id, name, background_image, genres }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  background_image={background_image}
                  genres={genres}
                />
              );
            })}

          <br />

          <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HomePage;
