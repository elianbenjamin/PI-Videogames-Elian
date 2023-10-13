import {
  ALL_GAMES,
  DETAIL_GAMES,
  CREATE_GAMES,
  CLEAN_DETAIL,
  FILTER,
  RESET,
  VIDEOGAMES_NAME,

} from "./action-types";

const initialState = {
  videogames: [],
  allVideogames: [],
  videogameName: [],
  videogamesDetail: {},
  filters: {
    genre: '',     
    order: 'name',  
    rating: '',     
    source: ''
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
      const { filterType, value} = payload;

      let filters = { ...state.filters, [filterType]: value };
      let filteredResult = [...state.allVideogames];

      if(filters.source === 'API'){
        filteredResult = filteredResult.filter((game)=> typeof game.id === 'number' )
      }else if(filters.source === 'DB'){
        filteredResult = filteredResult.filter((game)=> typeof game.id === 'string' )

      }


      if(filterType === 'order'){
        filters = {...filters, rating: ''};
      }else if (filterType === 'rating') {
        filters = {...filters, order: 'name'};
      }

      
      if (filters.genre) {
        filteredResult = filteredResult.filter((game) =>
          game.genres.includes(filters.genre)
        );
      }

      
      if (filters.order === "AscendenteNombre") {
        filteredResult.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (filters.order === "DescendenteNombre") {
        filteredResult.sort((a, b) => b.name.localeCompare(a.name));
      }

      
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
