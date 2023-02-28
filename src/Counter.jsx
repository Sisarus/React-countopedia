import React from "react";
import defence from './images/award.png';
import attack from './images/sword.png'; 

export default class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count:0
    }
  }

  handleAttack(){
    //alert("Attack clicked!");
    this.setState((previousState)=>{
      return {
        count: previousState.count + 1
      };
    });
    // this.setState({count: this.state.count + 1})
    // this.state.count = 2;
  }

  handleDefence(){
    //alert("Defent clicked!")
    this.setState((previousState)=>{
      return {
        count: previousState.count - 1
      };
    });
  }

  render(){
    return(
      <div className="row text-white">
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleAttack} style={{width: "200px"}}>+1</button>
        <button onClick={this.handleDefence} style={{width: "200px"}}>-1</button>
      </div>
    )
  }
}

