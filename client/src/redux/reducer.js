import {
  ALL_GAMES,
  DETAIL_GAMES,
  CREATE_GAMES,
  FILTER,
  RESET,
  ORDER,
  VIDEOGAMES_NAME
} from "./action-types";

const initialState = {
  allVideogames: [],
  videogames: [],
  videogameName: [],
  videogamesDetail: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_GAMES:
      return {
        ...state,
        videogames: payload
      };

    case DETAIL_GAMES:
      return { 
        ...state,
        videogamesDetail: payload,
      };
    case VIDEOGAMES_NAME:
      return {
        ...state,
        videogameName: payload
      }

    case CREATE_GAMES:
      return {
        ...state,
        videogames: [...state.videogames, payload],
      };

    case FILTER:
      const allVideogamesFilter = state.allCharacters.filter(
        (videogame) => videogame.gender === payload
      );
      return {
        ...state,
        videogames: allVideogamesFilter,
      };

    case ORDER:
      const allVideogamesOrder = [...state.videogames];
      if (payload === "A") {
        allVideogamesOrder.sort((a, b) => a.id - b.id);
      }
      if (payload === "D") {
        allVideogamesOrder.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        videogames: allVideogamesOrder,
      };

    case RESET:
      return {
        ...state,
        videogames: payload,
      };

    default:
      return { 
        ...state
        };
    
  }
};

export default reducer;
