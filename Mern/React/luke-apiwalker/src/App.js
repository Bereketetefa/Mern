import { Router, Link, navigate } from '@reach/router';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Info from './components/Info';
import Error from './components/Error';


function App() {
  const [searchtype, setsearchtype] = useState();
  const [searchID, setsearchID] = useState();

  const onSubmit = e => {
      e.preventDefault();
      navigate(`/${searchtype}/${searchID}`);
    };
  
  
  
  return (
    <>
      <div className="container-full-bg">
        <div className="jumbotron lead">Star Wars API</div>
      </div>
      <div className="text-center">
        <form onSubmit={onSubmit}>
          <div className="form-group text-center">
            <p className="text-muted">Search for:</p>
            <select className="dropdown col-md-1 text-center" value={searchtype} onChange={e => setsearchtype(e.target.value)}>
              <option value=""></option>
              <option value="planets">Planets</option>
              <option value="people">People</option>
              <option value="starships">Starships</option>
            </select>
          </div>
          <div className="form-group">
            <p className="text-muted">ID:</p>
            <input type="text"className="form-group col-md-2 text-center" onChange={e => setsearchID(e.target.value)} type="number" value={searchID}/>
          </div>
          <input type="submit" value="Search" className="btn btn-secondary" />

        </form>
      </div>
      <Router>
        <Info path="/:type/:ID" setsearchtype={setsearchtype} setsearchID={setsearchID}/>
        <Error path="/error"/>
      </Router>
    </>
  )
}



export default App;