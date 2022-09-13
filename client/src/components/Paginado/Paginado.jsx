import React from "react";
import { useState } from "react";
import styles from "./paginado.module.css";

export default function Paginado({ Page, setPage, max }) {
  const { input, setInput } = useState(1);

  const previousPage = () => {
    if(Page<2){
      alert('No hay una pagina anterior a esta.')  
      }
      if(Page===0){
       setPage(Page + 1 ) 
      }
    setPage(Page - 1);
  };

  const nextPage = () => {
    if(Page>max - 1){
alert('Lo siento, no hay mas paginas!')
    }else{ 
    setPage(Page + 1);
  }};




  return (
    <div className={styles.container}>
      <button className={styles.previousPage} onClick={previousPage}>Previous</button>
      <button className={styles.nextPage} onClick={nextPage}>Next</button>
      {/* <input /> */}
      {/* <p>De{max}</p> */}
    
    </div>
  );
}
