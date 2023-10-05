import {
  ALL_GAMES,
  DETAIL_GAMES,
  CREATE_GAMES,
  CLEAN_DETAIL,
  FILTER,
  RESET,
  RATING,
  ORDER,
  VIDEOGAMES_NAME
} from "./action-types";

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameName: [],
  videogamesDetail: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_GAMES:
      return {
        ...state,
        videogames: payload,
        allVideogames: payload
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
    case CLEAN_DETAIL:
      return {
      ...state,
        videogamesDetail:{}
      }

    case FILTER:
      const select = payload;
      const allVideogamesFilter = state.allVideogames.filter((game) => {
        if(select === ''){
          return true;
        }
        return game.genres.includes(select);
      } );
      return {
        ...state,
        videogames: allVideogamesFilter,
      };

    case ORDER:
      const allVideogamesOrder = [...state.allVideogames];
      if (payload === "AscendenteNombre") {
        allVideogamesOrder.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (payload === "DescendenteNombre") {
        allVideogamesOrder.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        videogames: allVideogamesOrder,
      };
      
      case RATING:
        const allVideogamesRating = [...state.allVideogames];
        if (payload === "AscRating") {
            allVideogamesRating.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        }
        if (payload === "DescRating") {
            allVideogamesRating.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
        }
        return {
            ...state,
            videogames: allVideogamesRating,
        };


    case RESET:
      return {
        ...state,
        videogames: state.allVideogames,
      };

    default:
      return { 
        ...state
        };
    
  }
};

export default reducer;
