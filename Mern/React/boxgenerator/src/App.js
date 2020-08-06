import React, {useState} from 'react';
import './App.css';
import Enter from './Components/Enter';
import Boxes from './Components/Boxes';

function App() {
  const [boxes, setboxes] = useState([]);
  
  

  return (
    <div className="container">
      <div className="jumbotron bg-primary text-white text-center">Burks Box Generator</div>
      <div className="row">
        <div className="col-sm-4">
          <Enter handleSubmit={setboxes}/>
          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={() => setboxes([])}>Clear</button>
          </div>
        </div>
        <div className="col-sm-8 d-flex flex-wrap l">
          {boxes.map((box, i) => {
            return(
            <Boxes key={i} color={box.color}>{i}</Boxes>
            );
          }
        )}
        </div>
      </div>
    </div>
  );
}

export default App;