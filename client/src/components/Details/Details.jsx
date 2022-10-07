import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDetails, gettingAllGames } from "../../actions";
import { Link, useParams } from "react-router-dom";
import styles from './details.module.css'

export default function Details(props) {
  const dispatch = useDispatch();
  const {id}=useParams()
  useEffect(() => {
    dispatch(getDetails(id));
    
  }, [dispatch]);
 useEffect(()=>{
 dispatch(gettingAllGames()) 
 },[])

  const gamedetailsDB=useSelector((state)=>state.videogamesFilter)
  const videogamefiltrado=gamedetailsDB.filter(game=>game.id==id)
  const gamedetail = useSelector((state) => state.details);
  console.log( videogamefiltrado)
  const games=useSelector(state=>state.videogamesFilter)
  return(
   <div className={styles.container}>


{
gamedetail?

<div className={styles.card}>
<img src={gamedetail.background_image?gamedetail.background_image:videogamefiltrado[0]?.image} alt="" width='245px'height='230px'className={styles.imagen}/>
<h4 className={styles.name}>{gamedetail?.name?gamedetail.name:videogamefiltrado[0]?.name}</h4>
<p className={styles.parrafo}>Genero:{gamedetail.genres?.map(genre=>genre.name)?gamedetail.genres?.map(genre=>genre.name):videogamefiltrado[0]?.Generos?.map(genero=>genero.nameGen)}</p>
<div>
<p className={styles.description}>{gamedetail?.description?gamedetail.description:videogamefiltrado[0]?.description}</p>
<p className={styles.rating}>Rating: {gamedetail?.rating?gamedetail.rating:videogamefiltrado[0]?.rating}</p>
<p className={styles.lanzamiento}>Lanzamiento: {gamedetail?.released?gamedetail.released:videogamefiltrado[0]?.lanzamiento}</p>
<p>Plataformas : {gamedetail.parent_platforms?.map(plataforma=>plataforma.platform?.name + ' ')?gamedetail.parent_platforms?.map(plataforma=>plataforma.platform?.name + ' '):videogamefiltrado[0]?.plataforms}</p>
<div className={styles.botonvolver}>
<Link to='/home'>
<button className={styles.volver}>
  <span></span>
  <span></span>
  <span></span>
  <span></span> Volver
</button>
</Link>
</div>
</div>   
</div>
:<p className={styles.imagen}>a</p>



}



   </div> 
    
  )
}
