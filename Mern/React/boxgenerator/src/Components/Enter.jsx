import React, {useState} from 'react';

const Enter = props => {
    const [color, setcolor] = useState("");
    const [height, setheight] = useState(50);
    const [width, setwidth] = useState(50);
    const handleSubmit = e => {
        e.preventDefault();
        let newbox = {color : color}
        props.handleSubmit(a =>[...a, newbox]);
        setcolor("");
        
    }
    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="color" className="text-black lead">Enter Color:</label>
                <input type="text" name="color" value={color} onChange={(e) => setcolor(e.target.value)}/>
                <div className="text-center">
                    <input className="btn btn-primary" type="submit" value="Create Box"/>
                </div>

            </form>

            

        </div>
    )

}



export default Enter;