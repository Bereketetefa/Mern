import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "./Components/Input";
import Task from "./Components/Task";
import './App.css';

function App() {
    const [tasks, settasks] = useState([]);
    
    const newtask = (task) => {
      settasks ([...tasks, [task, false]]);
    }
    const checktask = (i) => {
      let mytasks = [...tasks];
      if (mytasks[i][1] == false) {
        mytasks[i][1] = true;
      }
      else{
        mytasks[i][1] = false;
      }
      settasks(mytasks);
  
    }
return (
      <>
        <div className="jumbotron bg-primary text-light text-center lead">To Do List</div>
          <div className="row">
            <div className="col-sm-4">
            <Input thetask={newtask}/>
    
            </div>
            <div className="col-sm-8">
              <Task tasks={tasks} onCheck={checktask} />
            </div>
          </div>
      </>
  );
}
  
    
//     return (
//         <div className="App container" style={{idth: "800px "}}> 
//             {list.map((task, i) => (
//                 <Task task={task} setList={setList} index={i}/>
//             ))}
//             <Input list={list} setList={setList}/>
//         </div>
//     );
// }

export default App;
