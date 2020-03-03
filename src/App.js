import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Dheeraj"
  }
  render() {
    const style = {
      "text-decoration": "underline"
    };
    return (
      <div className="App">
        <h1>This is react app!</h1>
        <h2  style={style}>Assignment 1</h2>
        <UserInput changeHandler = {this.userInputHandler} username={this.state.username}></UserInput>
        <UserOutput username = { this.state.username}></UserOutput>
        <UserOutput username = { this.state.username}></UserOutput>
      </div>
    );
  }

  userInputHandler = (event) => {
    console.log('User input' + event.target.value);
    this.setState({username: event.target.value});
  }
}

export default App;
