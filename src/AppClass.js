import React, { Component } from 'react'
import BoxClass from './BoxClass';
export default class AppClass extends Component {

    constructor(props){
        super(props);
        this.state={
            counter2: 0,
            num: 1,
            value: 0,
        };
    }
    increment = () => {
        this.setState({
            counter2: this.state.counter2 + 1 ,
            value: this.state.value + 1,
        });
    };

  render() {
    return (
      <div>
        <div>
            <p>Counter: {this.state.counter2}</p>
            <button onClick={this.increment}>Increment</button>
            <BoxClass num={this.state.value}/>
        </div>
      </div>
    )
  }
}
