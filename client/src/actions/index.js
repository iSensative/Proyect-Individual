import axios from "axios";

export function gettingAllGames() {
  return async function (dispatch) {
    let json = axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: "GET_GAMES",
      payload: (await json).data,
    });
  };
}

export function filterAlf(payload) {
  return async function (dispatch) {
    return dispatch({
      type: "ORDER_GAME",
      payload: payload,
    });
  };
}

export function getFilter() {
  return {
    type: "GET_FILTER",
  };
}

export function filterbyGenre(payload) {
  return async function (dispatch) {
    return dispatch({
      type: "FILTER_BY_GENRE",
      payload: payload,
    });
  };
}

export function filterbyDataBase(payload) {
  return {
    type: "FILTER_BY_DB",
    payload: payload,
  };
}

export function inputSearchGame(payload) {
  return async function (dispatch) {
    let json = await axios.get(
      `http://localhost:3001/videogames?name=${payload}`
    );
    return dispatch({
      type: "GET_NAME_INPUT",
      payload: json.data,
    });
  };
}

export function getGenres() {
  return async function (dispatch) {
    let infoGenres = await axios.get("http://localhost:3001/genres");
    return dispatch({
      type: "GET_GENRES",
      payload: infoGenres.data,
    });
  };
}
export function getDetails(id) {
  return async function (dispatch) {
    let info = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=d1fea955266042f388dae6d06cb6ac60`
    );
    return dispatch({
      type: "GET_DETAILS",
      payload: info.data,
    });
  };
}

export function postGame(payload) {
  return async function (dispatch) {
    let gamesdata = await axios.post("http://localhost:3001/postgame", payload);
    return dispatch({
      type: "POST_GAME",
      payload: gamesdata,
    });
  };
}
