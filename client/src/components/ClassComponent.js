import React, {Component} from "react";

class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            age: this.props.age
        }
    }
    render(){

        const{firstName, lastName, age, hairColor} = this.props

        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>Hair: {hairColor}</h3>
                <button onClick={() => this.setState({ age: this.state.age + 1 })}>Happy Birthday, {firstName}!</button>
            </div>
        )
    }
}

export default ClassComponent