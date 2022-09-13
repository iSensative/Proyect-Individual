import "./App.css";
import { Route, Switch, useParams } from "react-router-dom";
import React from "react";
import LandingPage from "./components/LandindPage/LandingPage";
import Home from "./components/Home/Home";
import Paginado from "./components/Paginado/Paginado";
import VideoGameCreate from "./components/VideoGameCreate/VideoGameCreate";
import Details from "./components/Details/Details";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path='/createvideogame'>
          <VideoGameCreate />
        </Route>
        <Route exact path='/detail/:id'>
          <Details/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
