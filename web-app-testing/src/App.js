import React from 'react';
import logo from './logo.svg';
import './App.css';

// components 
import { Dashboard } from "./components/Dashboard"
import { Display } from "./components/Display"



// count rules
// balls and strikes reset to 0 when player reaches 3 strikes or 4 balls
// balls and strikes reset to 0 when hit is recorded
// foul increases strikes up to 2. with no strikes, a foul makes it 1 strike. with 1 strike, a foul makes it 2 strikes. with two strikes a foul has no effect, count stays at 2 strikes. (if strikes < 2, strikes++) 


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      strikes: 0,
      balls: 0,
    }
  }

  /**** methods ****/
  hit(){
    console.log("HIT")
    this.setState({
      strikes: 0,
      balls: 0,
    })
  }

  addBall(){
    console.log("BALL")
  }

  addStrike(){
    console.log("STRIKE")
  }

  addFoul(){
    console.log("FOUL")
  }
  /** end methods **/


  render() {
    return (
      <div className="App">
        <h1>Baseball React App</h1>
        <Display {...this.state}/>
        <Dashboard hit={this.hit()} ball={this.addBall()} />
      </div>
    );

  }
}

export default App;
