import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./Components/Display";
import {Link, Router} from '@reach/router';
import SkillForm from './Components/SkillForm';
import Editinfo from './Components/Editinfo';
import AdoptDisplay from './Components/AdoptDisplay';
// import EditSchedule from './components/EditSchedule';

function App() {
  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <Link className="btn btn-info" to="/">Pet Shelter</Link>
      <Link className="btn btn-info float-right" to="/new">Add a pet to the shelter products</Link>
      <Router className="my-5">
        <Display path="/"/>
        <SkillForm path="/new"/>
        <Editinfo path="/edit/:_id" />
        <AdoptDisplay path="/details/:_id" />
      </Router>
    </div>
  );
}

export default App;
