import {
  FILTER,
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


export const createVideogames = (games) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3001/videogames`, games)
      dispatch({
        type: CREATE_GAMES,
        payload: {
          ...games,
          id: response.data.id 
        },
      });
    } catch (error) {
      console.log(error)
    }
  };
};

/* export const cleanDetail = () =>({
  type: CLEAN_DETAIL,
}) */

export const updateFilter = (filterType, value) => {
  return {
    type: FILTER,
    payload: { filterType, value },
  };
};

export const resetVideogames = () => {
  return {
    type: RESET,
  };
};

