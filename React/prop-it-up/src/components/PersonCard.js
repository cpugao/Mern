import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age_now: this.props.age
        };
    }

    birthdayButton = () => {
        this.setState ({ age_now: this.state.age_now + 1 });
    };

    render () {
        return (
        <div>
            <h1> { this.props.lastName }, { this.props.firstName }</h1>
            <p>Age: { this.state.age_now }</p>
            <p>Hair Color: { this.props.hairColor }</p>
            <button onClick={ this.birthdayButton }>Birthday Button for { this.props.firstName } { this.props.lastName }</button>
        </div>
        );
    }
}
export default PersonCard;