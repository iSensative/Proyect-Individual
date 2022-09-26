import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { getGenres } from "../../actions";
import { postGame } from "../../actions";
import { useEffect,useState } from "react";
import styles from './videogamecreate.module.css'



export default function VideoGameCreate(){
    const dispatch=useDispatch()
    const fullGenres=useSelector(state=>state.genres)
    const [errores,setErrores]=useState({})
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

function test(e){
 console.log(e.KeyCode)   
}

function ControllerInputs(infoInput){
 var erroresVariable={}
        if(!infoInput.name.toString().trim())return 'Por favor llenar el input Name para seguir.'
        if(infoInput.name.toString().trim().length<3)return 'Coloque un Nombre que supere los 3 digitos.'
        if(infoInput.name.toString().trim()=='  ')return 'No se permiten espacios.'
        if(infoInput.rating>5)return 'No se permite un rating mayor a 5.'
        if(infoInput.rating<0)return'no se permiten numeros menores a 0'
        if(!infoInput.description.toString().trim())return'Por favor llenar el input DESCRIPTION para seguir.'
        if(!infoInput.plataforms)return'Por favor llenar el input platform para seguir.'
        if(!infoInput.rating)return'Por favor llene el input Rating'
        if(!infoInput.nameGen)return 'Por favor eliga un genero'
        if(!infoInput.lanzamiento)return 'eliga una fecha de lanamiento'
        if(!infoInput.rating?.match(/^[0-9]+$/))return 'No se permiten simbolos'
        if(infoInput?.rating==='0')return 'Numeros mayores a 1  y menores que 5!'
        }
const errorMessage=ControllerInputs(infoInput)

function handleInput(e){
    //console.log(infoInput)
    setInfoInput({
    ...infoInput,                   //Osea, guardamos lo que ya hay en el estado + lo que vayamos a modificar ahora
    [e.target.name]:e.target.value   //Segun el name del input se va a llenar el estado.
    })
   setErrores(ControllerInputs({
...infoInput,
[e.target.name]:e.target.value
   }))
}    

function handleSelect(e){
 setInfoInput({
  ...infoInput,
  nameGen:[...infoInput.nameGen,e.target.value]//Guardamos lo que ya teniamos en el estado y le agregamos lo que se vaya seleccionando
 })                                            // De esta manera podemos hacer que se agregen mas de 1 genero a el VideoGame creado
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
     <input type="text"onChange={e=>handleInput(e)} value={infoInput.name}name='name' className={styles.inputfield} placeholder='Name'min='1'/>  
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
   {  !errorMessage && (
<div>
    <button class={styles.btn}  onClick={e=>handleSubmit(e)} type="submit">Crear!</button>
    </div>
)}
  </form>
</div>)
{ errorMessage && (
<div class={styles.carderrores}>{errorMessage}</div>
)}
</div>)
}