import {
  FILTER,
  ORDER,
  RESET,
  ALL_GAMES,
  DETAIL_GAMES,
  CREATE_GAMES,
  VIDEOGAMES_NAME,
} from "./action-types";
import axios from "axios";

export const getAllVideogames = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/videogames");
      if (!response) throw Error("errooooooor");
      dispatch({
        type: ALL_GAMES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener los videojuegos:", error);
    }
  };
};

export const getVideogamesDetail = (id) => {
  return async (dispatch) => {
    return await axios
      .get(`http://localhost:3001/videogames/${id}`)
      .then((response) => {
        dispatch({
          type: DETAIL_GAMES,
          payload: response.data,
        });
      });
  };
};

export const getVideogamesName = (name) => {
  return async (dispatch) => {
    return await axios
      .get(`http://localhost:3001/videogames/name?name=${name}`)
      .then((response) => {
        dispatch({
          type: VIDEOGAMES_NAME,
          payload: response.data,
        });
      });
  };
};

let id = 1;
export const createVideogames = (deportes) => {
  return {
    type: CREATE_GAMES,
    payload: {
      ...deportes,
      id: id++,
    },
  };
};

export const filterVideogames = (videogame) => {
  return {
    type: FILTER,
    payload: videogame,
  };
};

export const orderVideogames = (order) => {
  return { type: ORDER, payload: order };
};

export const resetVideogames = () => {
  return {
    type: RESET,
  };
};
