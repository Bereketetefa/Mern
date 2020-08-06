import React, {Component} from 'react';

class Age extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        };
        }
    
        increaseLikes = (e) => {
        // console.log(e);
        this.setState({likes: this.state.likes + 1});
        }
    
        render() {
        return (
        <li className="list-group-item">
            <span className="badge badge-success mr-3">${this.props.price}</span>
            {this.props.name}
            <button 
                onClick={this.increaseLikes}
                className="btn btn-sm btn-outline-info float-right"
            >
                {this.state.likes} likes
            </button>
        </li> 
        );
    }
}

export default Age;