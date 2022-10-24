const initialState = {
  videogames: [],
  videogamesFilter: [],
  genres:[],
  details:[]
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_GAMES":
      return {
        ...state,
        videogames: payload,
        videogamesFilter: payload,
      };
    case "ORDER_GAME":
      let filtrados = [];
      if (payload == "Asc") {
        filtrados = state.videogamesFilter.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1; //Si a es mayor a b retorna 1
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1; //Si a es menor a b return -1

          return 0;
        });
      }
      if (payload == "Desc") {
        filtrados = state.videogamesFilter.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1; //Si a es mayor a b retorna -1
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1; //Si a es menor a b return 1
          return 0;
        });
      }
      return {
        ...state,
        videogamesFilter: filtrados,
      };

    case "GET_FILTER":
      return {
        ...state,
      };
         case 'FILTER_BY_GENRE':
    let fullGenres=state.videogames
    let genresFilter=state.videogames?.filter(videogame=>videogame.genres?.includes(payload))
    console.log(payload)
    return{
      ...state,
      videogamesFilter:genresFilter
    };
    case 'GET_NAME_INPUT':
      console.log(payload)
      return{
      ...state,
      videogamesFilter:[payload]
      }
      case 'POST_GAME':
        return{
        ...state,  
        }
        case 'GET_GENRES':
          return{
          ...state,
          genres:payload
          }
    case 'FILTER_BY_DB':
      // let fullGames=state.videogames 
      // ?state.videogamesFilter.filter(game=>game.hasOwnProperty("createdInDB"))
      // :state.videogamesFilter.filter(game=>!game.createdInDb)
      // console.log(payload)
      // return{
      //   ...state,
      //   payload:payload==='All'?fullGames:state.videogamesFilter
      // }
      let games
    if(payload==='All'){
    return{
    ...state,
    videogamesFilter:state.videogames  
    }  
    }
    if(payload=='database'){
    games=state.videogames.filter(game=>game.createdInDb)  
    }if(payload==='originales'){
    games=state.videogames.filter(game=>!game.hasOwnProperty("createdInDb"))  
    }
    return{
    ...state,
    videogamesFilter:games
     }
    
      case 'GET_DETAILS':
        return{
         ...state,
         details:payload 
        }
default:
  return state
  }
}

export default rootReducer;
