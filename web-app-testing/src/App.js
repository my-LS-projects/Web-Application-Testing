import React from 'react';
import logo from './logo.svg';
import './App.css';

// components 
import { Dashboard } from "./components/Dashboard"
import { Display } from "./components/Display"



// count rules




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0,
    }
  }

  /**** methods ****/

  hit = () => {
    // balls and strikes reset to 0 when hit is recorded
    // balls and strikes reset to 0 when player reaches 3 strikes or 4 balls
    console.log("HIT")
    this.setState({
      balls: 0,
      strikes: 0,
      fouls: 0
    })
  }

  addBall = () =>{
    console.log("BALL")
    ++this.state.balls >= 4 
    ? this.setState({ balls: 0, strikes: 0, fouls: 0}) 
    : this.setState({ balls: this.state.balls++})
  }

  addStrike = () => {
    // balls and strikes reset to 0 when player reaches 3 strikes or 4 balls
    console.log("STRIKE")
    this.setState({
      strikes: ((++this.state.strikes >= 3 ? 0 : this.state.strikes++))
    })
  }

  addFoul = () => {
    // foul increases strikes up to 2. with no strikes, a foul makes it 1 strike. with 1 strike, a foul makes it 2 strikes. with two strikes a foul has no effect, count stays at 2 strikes. (if strikes < 2, strikes++) 
    console.log("FOUL")
    this.state.strikes >= 2 
    ? this.setState({ fouls: (this.state.fouls)+1, strikes: this.state.strikes})
    : this.setState({ fouls: (this.state.fouls)+1, strikes: (this.state.strikes)+1})
  }
  /** end methods **/


  render() {
    return (
      <div className="App">
        <h1>Baseball React App</h1>
        <Display {...this.state}/>
        <Dashboard hit={this.hit} ball={this.addBall} strike={this.addStrike} foul={this.addFoul}/>
      </div>
    );

  }
}

export default App;
