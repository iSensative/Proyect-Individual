const { default: axios } = require("axios");
const { Videogame, Genero } = require("../db");
const db = require("../db");

async function apiData(){
var resultados=[]
let urlApi='https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&page_size=250'
while(resultados.length<=100){
await axios.get(urlApi)
.then(r=>{
urlApi=r.data.next
r.data.results.map(game=>resultados.push(game))  
})  
}
console.log(resultados)
return resultados
}
//console.log(apiData.data)

const getApiData = async () => {
  try {
    var resultados=[]
let urlApi='https://api.rawg.io/api/games?key=c542e67aec3a4340908f9de9e86038af&page_size=250'
while(resultados.length<=100){
await axios.get(urlApi)
.then(r=>{
urlApi=r.data.next
r.data.results.map(game=>resultados.push(game))  
})  
}
    const apiFullInfo = resultados.map((juego) => {
      return {
        name: juego.name,
        id: juego.id,
        image: juego.background_image,
        description: juego.description,
        rating:juego.rating,
        genres: juego.genres.map((genero) => genero.name),
        platforms: juego.platforms.map(
        (plataforma) => plataforma.platform.name
        ),
      };
    })
    return apiFullInfo;
  } catch (error) {
    console.log(error);
  }
};

const dataBaseInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genero,
      attributes: ["nameGen"],
      through: {
        attributes: [],
      },
    },
  });
};
const getAllVideoGames = async () => {
  const apiInfo = await getApiData();
  const dbInfo = await dataBaseInfo();
  const fullInfoConcat =apiInfo.concat(dbInfo);
  return fullInfoConcat;
  };
  console.log(getAllVideoGames())

module.exports = {
  rutaGames: async (req, res) => {
    const name = req.query.name;
    try {
      const infoApi = await getAllVideoGames();
      if (name) {
        const filterQueryName = await infoApi.filter((videogame) =>
          videogame?.name.toLowerCase().includes(name.toLowerCase())
        );
        filterQueryName.length
          ? res.status(200).send(filterQueryName[0])
          : res.status(404).send("No se encontro tu VideoJuego");
      } else {
        res.status(200).send(infoApi);
      }
    } catch (error) {
      console.log(error);
    }
  },

  rutaGamesId: async (req, res) => {
    const id = req.params.id;
    const apiFull = await getAllVideoGames();
    try {
      if (id) {
        const filterid = await apiFull.filter(
          (videogame) => videogame?.id == id
        );
        filterid.length
          ? res.status(200).send(filterid[0])
          : res.status(400).send("No se encontro un VideoGame con ese ID");
      }
    } catch (error) {
      console.log(error);
    }
  },

  genresDB: async (req, res) => {
    try {
const apiInfo=await axios.get('https://api.rawg.io/api/games?key=d1fea955266042f388dae6d06cb6ac60')
//console.log(apiInfo)
const genresInfo=await apiInfo.data.results.map(game=>game.genres)
//console.log(genresInfo)//Funciona
const genresFullNames=await genresInfo.map(genre=>genre.map(gen=>gen.name))
//console.log(genresFullNames)//Funciona
const definitiveNamesGen=new Set(genresFullNames)
//console.log(definitiveNamesGen)
let generos= []
for(let a of definitiveNamesGen){
generos.push(a)  
}
generos=generos.flat()
//console.log(generos.flat())
const generoOficial=[... new Set(generos)]
Object.keys(generoOficial)
generoOficial.forEach(genero=>{
Genero.findOrCreate({
where:{nameGen:genero}  
})  

})
const fullGenerosInfo=await Genero.findAll()
res.send(fullGenerosInfo)
    } catch (error) {
console.log(error) 
    }
  },





postGame:async (req,res)=>{
const{name,image,description,platforms,nameGen,rating,lanzamiento,createdInDb}=req.body
let createGame=await Videogame.create({
name:name,
image:image,
description:description,
platforms:[platforms],
rating:rating,
lanzamiento:lanzamiento,
createdInDb:true
})
typeGenre=await Genero.findAll({
where:{nameGen:nameGen} 
})
await createGame.addGenero(typeGenre)
res.send('Se agrego correctamente el VideoGame')
}

};
