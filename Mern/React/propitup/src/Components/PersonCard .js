import React, {Component} from 'react';

class PersonCard extends Component{
    render(){
        return(
            <div>
                {this.props.firstName}
                {this.props.age}
                {this.props.hairColor}
            </div>
        )
    }
}           

export default PersonCard;