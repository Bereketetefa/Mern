import React, { useState } from 'react';

const Input = (props) => {
    const [task, settask ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        props.thetask(task);
        settask("");
    }
    let Task ={ 
        name:"",
        isComplete: false     
    };
    const onChange = (e) =>{
        task = e.target.value;
    };

    const onClick = (e) => {
        settask([...task, task]);
        e.target.value = "";
        task = "";
    };

//     return(
//         <div className="container w-50 mt-3">
//             <input className="form-control"
//                 onChange={handleSubmit}
//                 type="text" 
//                 name="task"
//             />
//             <button className="btn btn-primary btn-block mt-1" onClick={onChange}>
//                 Add Task 
//             </button>
//         </div>
//     );
// };
return(
    <>
        <div className="row">
            <div className="col-md-7 ml-5">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="col-10"  onChange={(e) => settask(e.target.value)} value={task} />
                    <div className="ml-5 mt-3">
                        <input className="btn btn-primary" type="submit" value="Create Task" />
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}


export default Input;