import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { getGenres } from "../../actions";
import { postGame } from "../../actions";
import { useEffect,useState } from "react";
import styles from './videogamecreate.module.css'



export default function VideoGameCreate(){
    const dispatch=useDispatch()
    const fullGenres=useSelector(state=>state.genres)
    const [infoInput,setInfoInput]=useState({
        name :'',
        image:'',
        description:'',
        plataforms:[],
        nameGen:'',
    })
    useEffect(()=>{
dispatch(getGenres())
console.log(fullGenres)
    },[])



function ControllerInputs(infoInput){
        if(!infoInput.name.trim())return 'Por favor llenar el input Name para seguir.'
        if(infoInput.name.trim().length<3)return 'Coloque un Nombre que supere los 3 digitos.'
        if(infoInput.name.trim()=='  ')return 'No se permiten espacios.'
        if(infoInput.rating>100)return 'No se permite un rating mayor a 100.'
        }
const errorMessage=ControllerInputs(infoInput)

function handleInput(e){
    //console.log(infoInput)
    setInfoInput({
    ...infoInput,                   //Osea, guardamos lo que ya hay en el estado + lo que vayamos a modificar ahora
    [e.target.name]:e.target.value   //Segun el name del input se va a llenar el estado.
    })
    console.log(infoInput)
}    

function handleSelect(e){
 setInfoInput({
  ...infoInput,
  nameGen:e.target.value
 })   
 console.log(infoInput)
}

function handleSubmit(e){
e.preventDefault()
dispatch(postGame(infoInput))
setInfoInput({
    name :'',//Volvemos a restablecer el estado con todos los campos vacios para que no haya problemas cuando se quiera crear otro Video
    image:'',
    description:'',
    plataforms:[],
    rating:'',
    lanzamiento:'',
    nameGen:'',    
})
}

return(
    <div className={styles.divmayor}> 
    <div class={styles.card}>
  <h4 class={styles.title}>Crea tu VideoGame</h4>
  <form>
    <div class={styles.field}>
     <input type="text"onChange={e=>handleInput(e)} value={infoInput.name}name='name' className={styles.inputfield} placeholder='Name'/>  
    </div>
    <div class={styles.field}>
      <input type="text" value={infoInput.description}name='description' onChange={e=>handleInput(e)} className={styles.inputfield}placeholder='Description'/> 
    </div>
    <div class={styles.field}>
    <input type="text" value={infoInput.plataforms}name='plataforms'onChange={e=>handleInput(e)} className={styles.inputfield} placeholder='Plataforma'/>
    </div>
    <div class={styles.field}>
    <input type="text" value={infoInput.image}name='image'onChange={e=>handleInput(e)} className={styles.inputfield}placeholder='Imagen'/>
    </div>
    <div class={styles.field}>
    <input type="number" value={infoInput.rating}name='rating'onChange={e=>handleInput(e)} className={styles.inputfield}placeholder='Rating'/>
    </div>
    <div class={styles.field}>
<select onChange={e=>handleSelect(e)} class={styles.field}>
    {fullGenres.map((genero)=>(
    <option className={styles.inputfield} onChange={e=>handleInput(e)} value={genero.nameGen}>{genero.nameGen}</option>    
    ))}   
</select>
    </div>
    <div class={styles.field}>
    <input type="date" value={infoInput.lanzamiento}name='lanzamiento'onChange={e=>handleInput(e)} className={styles.inputfield}/>
    </div>
  <button class={styles.btn}  onClick={e=>handleSubmit(e)} type="submit">Crear!</button>
  </form>
</div>)
</div>)
{/* <div className={styles.container}>
<h1 className={styles.title}>Aqui podras crear tu VideoGame!</h1>
<form>
<div>
 <label>Name</label>
 <input type="text"onChange={e=>handleInput(e)} value={infoInput.name}name='name'/>   
</div>
<div>
 <label>Descripcion</label>
 <input type="text" value={infoInput.description}name='description' onChange={e=>handleInput(e)}/>   
</div>
<div>
 <label>Plataforma</label>
 <input type="text" value={infoInput.plataforms}name='plataforms'onChange={e=>handleInput(e)}/>   
</div>
<div>
 <label>Imagen</label>
 <input type="text" value={infoInput.image}name='image'onChange={e=>handleInput(e)}/>   
</div>
<div>
<label>Rating</label>
<input type="number" value={infoInput.rating}name='rating'onChange={e=>handleInput(e)}/>
</div>
<div>
<label>Fecha de Lanzamiento</label>
<input type="date" value={infoInput.lanzamiento}name='lanzamiento'onChange={e=>handleInput(e)} />
</div>
<select onChange={e=>handleSelect(e)}>
    {fullGenres.map((genero)=>(
    <option onChange={e=>handleInput(e)} value={genero.nameGen}>{genero.nameGen}</option>    
    ))}   
</select>
<button type="submit" onClick={e=>handleSubmit(e)}>Crear VideoJuego!</button>
</form>

<div className={styles.errorsCardContainer}>
<h4 className={styles.h4Error}>Errores en su Game,por favor corregirlos</h4>
<hr />
<p className={styles.parrafosError}>{errorMessage}</p>


</div>



</div>     */}



}




{/* <button class={styles.btn} type="submit">Login</button> */}