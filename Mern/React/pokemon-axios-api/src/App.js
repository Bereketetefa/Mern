import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

function App() {
  const [pokelist, setPokelist] = useState([]);
  const getpokemon = e =>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(res =>{
      console.log(res.data.results);
      setPokelist(res.data.results);
    })
    .catch(err => console.log(err));
  }
  
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Pokemon are awesome</h1>
      </div>
      <button className="btn btn-primary" onClick={getpokemon}>Get Pokemon</button>
      <ul className="list-group">
        {pokelist.map( (pkmn, i) =>
        <li key={i}className="list-group-item">{pkmn.name}</li>
        )}
      </ul>
    </div>
  );
}

export default App;
