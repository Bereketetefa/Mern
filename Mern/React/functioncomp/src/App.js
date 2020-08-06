import React, { Component } from 'react';
import './App.css';
import PersonCard from './Components/PersonCard'
class App extends Component{
  render () {

  
  return (
    <div className="App">
        <div className="card-body">
          <ul class="w3-ul w3-border">
          <PersonCard firstName="Doe" lastName="Jane" age={ 45 } hairColor="Black" /> 
          <PersonCard firstName="Smith" lastName="John" age={ 80 } hairColor="Brown" /> 
          <PersonCard firstName="Filmore" lastName="Millard" age={ 50 } hairColor="Brown" /> 
          <PersonCard firstName="Smith" lastName="Maria" age={ 62 } hairColor="Brown" /> 
          </ul>
        </div>
        </div>
      );
    }
  }

export default App;