import React from 'react';


const Task = props => {
    const alltasks = props.tasks;
    const handleCheck = (i) => {
        props.onCheck(i);
    }
    const onClick = () => {
    Task(() =>{ 
        return Task.filter(t => Task.indexOf(alltasks) !== alltasks)
        });
    };
return (
        <>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="text-dark">My Tasks:</h2>
                    <div >
                    {
                        alltasks.map((task, i) =>
                        <div className="mt-3 text-center text-danger">
                            <li key={i} style= { task[1] === true ? {textDecoration: 'line-through' } : null}> 
                                {task[0]}
                                <input type="checkbox" className="form-check-input ml-3 " checked={task[1]} onClick={ () => handleCheck(i)}/>
                            </li> 
                            <button className="btn btn-sm btn-danger" onClick={onClick}>
                                Delete Task
                            </button>
                        </div>
                    
                    )}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Task;
    // const Task = props => {
    //     const { task,index,list, setList} = props;
    //     const onClick = () => {
    //     setList(() =>{ 
    //         return list.filter(task => list.indexOf(task) !== index)
    //         });
    //     };
    //     return(
    //         <div className="container bg-secondary">
    //             <h4>{task.name}</h4>
    //             <div className="container">
    //                 <label htmlFor="checkbox">Completed?</label>
    //                 <input type="checkbox" name=""/>
    //                 <button className="btn btn-sm btn-danger" onClick={onclick}>
    //                     Delete button
    //                 </button>
    //             </div>
    //         </div>
    //     );
    // };
    // import React from 'react';