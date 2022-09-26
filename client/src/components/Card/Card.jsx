import React from "react";
import styles from './card.module.css'


export default function Card({name,image,genre,rating,lanzamiento}){
    genre=genre + ''
return(
<div className={styles.card}>
<img src={image} alt="" width='250px'height='230px'className={styles.imagen}/>
<h4 className={styles.name}>{name}</h4>
<p className={styles.parrafo}>Genero: {genre.replace(/\,/g,'-')} </p>
</div>
)}
