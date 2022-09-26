import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import{
  filterAlf,
  filterbyGenre,
  getFilter,
  gettingAllGames,
  getDetails,
  filterbyDataBase,
} from "../../actions";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./home.module.css";
import modoserio from './modoserio.jpg'
import {Link, useParams} from 'react-router-dom'

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettingAllGames());
    dispatch(getFilter());
    dispatch(getDetails())
  }, [dispatch]);

  function handleAlf(e) {
    dispatch(filterAlf(e.target.value));
    setPayload(e.target.value);
  }

  function handleGenre(e) {
    dispatch(filterbyGenre(e.target.value));
    setPayload(e.target.value);
  }

  function handleDataBase(e) {
    dispatch(filterbyDataBase(e.target.value));
    setPayload(e.target.value);
  }







  
  const [Page, setPage] = useState(1);
  const [PorPageVideoGames, setPorPageVideoGames] = useState(8); //Cuantos VideoGames voy a usar por pagina.
  const [payload, setPayload] = useState("Asc");
  const details=useSelector(state=>state.details)
  const allVideoGamesHook = useSelector((state) => state.videogamesFilter);
  const max = allVideoGamesHook?.length / PorPageVideoGames;
  


const videogamefiltrado=allVideoGamesHook.filter(game=>game.createdInDb)
//console.log(videogamefiltrado)
  return (
    <div className={styles.container}>
      <div>
        <select onChange={(e) => handleAlf(e)}>
          <option value="Asc">Ascendente</option>
          <option value="Desc">Descendente</option>
        </select>
        <select onChange={(e) => handleDataBase(e)}>
          <option value="All">Todos</option>
          <option value="database">Creados por la Comunidad</option>
          <option value="originales">Api</option>
        </select>
        <select onChange={(e) => handleGenre(e)}>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Indie">Indie</option>
          <option value="Platformer">Platformer</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
        </select>
        <div>
          <Link to='/createvideogame'>
        <button>Crear VideoJuego</button>
        </Link>
        </div>
    <div>
      <SearchBar />
    </div>
      </div>
      <div className={styles.containerVideoGames}>
        
  {allVideoGamesHook
    ?.slice(
      (Page - 1) * PorPageVideoGames,
      (Page - 1) * PorPageVideoGames + PorPageVideoGames
  )
    ?.map((game) => {
      return( 
      <Link to={'/detail/'+ game.id}>
      <Card name={game.name} genre={game.createdInDb?game.Generos[0].nameGen:game.genres}rating={game.rating}image={game.image}/>
      </Link>
      );
    })}   
      </div>

      <Paginado Page={Page} setPage={setPage} max={max}/>
    </div>
  );
}
