import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDetails } from "../../actions";
import { Link, useParams } from "react-router-dom";
import styles from './details.module.css'

export default function Details(props) {
  const dispatch = useDispatch();
  const {id}=useParams()
  console.log(props)
  useEffect(() => {
    dispatch(getDetails(id));
    console.log(id)
  }, [dispatch]);

  const gamedetail = useSelector((state) => state.details);
  const games=useSelector(state=>state.videogamesFilter)
  console.log(gamedetail)
  return(
   <div>


{
gamedetail?
<div className={styles.card}>
<img src={gamedetail.background_image} alt="" width='245px'height='230px'className={styles.imagen}/>
<h4 className={styles.name}>{gamedetail?.name}</h4>
<p className={styles.parrafo}>Genero:{gamedetail.genres?.map(genre=>genre.name)}</p>
<div>
<p className={styles.description}>{gamedetail?.description}</p>
</div>   
</div>:<p>Loading...</p>



}



   </div> 
    
  )
}
