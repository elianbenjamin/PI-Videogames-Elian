import {
  ALL_GAMES,
  DETAIL_GAMES,
  CREATE_GAMES,
  CLEAN_DETAIL,
  FILTER,
  RESET,
  VIDEOGAMES_NAME
} from "./action-types";

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameName: [],
  videogamesDetail: {},
  filters: {
    genre: '',      // Filtro de género
    order: 'name',  // Orden predeterminado por nombre
    rating: '',     // Filtro de calificación
  },
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
      const { filterType, value } = payload;
      const filters = { ...state.filters, [filterType]: value };

      let filteredResult = [...state.allVideogames];

      // Aplicar filtros
      if (filters.genre) {
        filteredResult = filteredResult.filter((game) =>
          game.genres.includes(filters.genre)
        );
      }

      // Aplicar orden
      if (filters.order === "AscendenteNombre") {
        filteredResult.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (filters.order === "DescendenteNombre") {
        filteredResult.sort((a, b) => b.name.localeCompare(a.name));
      }

      // Aplicar calificación
      if (filters.rating === "AscRating") {
          filteredResult.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
      }
      if (filters.rating === "DescRating") {
          filteredResult.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
      }

      return {
        ...state,
        videogames: filteredResult,
        filters: filters,
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
