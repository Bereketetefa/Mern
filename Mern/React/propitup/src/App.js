import React from 'react';
import './App.css';
import PersonCard from './Components/PersonCard '
import PersonCard from './Components/Age '

function App() {
  return (
    <div className="App">
        <div className="card-body">
          <ul class="w3-ul w3-border">
            <h2>Person</h2>
            <li><PersonCard firstName="Name: Burks, World"/></li>
            <li><PersonCard age="Age: 20"/></li>
            <li><PersonCard hairColor="Hair Color: Brown"/></li>
          </ul>
        
          <ul class="w3-ul w3-border">
            <h2>Person</h2>
            <li><PersonCard firstName="Name: Sikets, World"/></li>
            <li><PersonCard age="Age: 17"/></li>
            <li><PersonCard hairColor="Hair Color: Brown"/></li>
          </ul>

          <ul class="w3-ul w3-border">
            <h2>Person</h2>
            <li><PersonCard firstName="Name: Amens, World"/></li>
            <li><PersonCard age="Age: 16"/></li>
            <li><PersonCard hairColor="Hair Color: Brown"/></li>
          </ul>

          <ul class="w3-ul w3-border">
            <h2>Person</h2>
            <li><PersonCard firstName="Name: Ceces, World"/></li>
            <li><PersonCard age="Age: 11"/></li>
            <li><PersonCard hairColor="Hair Color: Brown"/></li>
          </ul>
        
        </div>
    </div>
  );
}

export default App;
