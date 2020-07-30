import React, { Component, Fragment } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Auxiliary from './hoc/Auxiliary/Auxiliary';
import Wrapper from './hoc/Wrapper/Wrapper';


const parcel = (props) => {
  return (
    <div>
      <h1>{props.wrappedMsg}</h1>
      <p>{props.message}</p>
    </div>
  )
}
const secondParcel = (props) => {
  return (
    <Auxiliary>
      <h3>{props.wrappedMsg}</h3>
      <h4>{props.message}</h4>
    </Auxiliary>
  )
}
function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

const WrappedParcel = Wrapper(parcel, 'data passed', 'second data passed');
const SecondWrappedParcel = Wrapper(secondParcel, 'second parcel', 'content for second parcel');

class App extends Component {

  state = {
    username: "Dheeraj",
    persons: [
      "Shivam",
      "Saurabh",
      "Anita",
      "Rashmi"
    ],
    showHeader: true
  }

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    this.parcelRef1 = React.createRef();
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props, state, arguments);
    return state;
  }

  render() {
    console.log('[App.js] render', arguments);
    const style = {
      "textDecoration": "underline"
    };
    return (
      //Shown use of a higher-order component, which allow us to return more than one JSX element at root.
      <Auxiliary>
        <h3>I am an added component, just to show usage of returning more than one JSX component at root</h3>
        <div>Hello, Hi, Hello </div>
        <Glossary items={[{term:1, description:'first item', key:1},
      {term:2, description:'second item', key:2},
      {term:3, description:'third item', key:3}]}></Glossary>
        <div>
        <input type='text' ref={this.parcelRef1}></input>
        <button onClick={() => alert('buttonclicked  '+ this.parcelRef1.current.value)}>click me to check ref</button>
        <p>{this.parcelRef1.current ? this.parcelRef1.current.value : ""}</p>
        </div>
        <WrappedParcel message='kjfdnndlk'></WrappedParcel>
        <SecondWrappedParcel message='I am second parcel'></SecondWrappedParcel>
        <div className="App">
          <button onClick={() => {
            let flag = this.state.showHeader;
            this.setState({showHeader: !flag});
          }}>Toggle Header</button>
          {this.state.showHeader ? <h1>This is react app!</h1> : null}
          <h2  style={style}>Assignment 1</h2>
          <UserInput changeHandler = {this.userInputHandler} username={this.state.username}></UserInput>
          <UserOutput username = { this.state.username} key="first" clicked={this.userOutputClickedHandler}></UserOutput>
          <UserOutput username = { this.state.username} key="second" clicked={this.userOutputClickedHandler}></UserOutput>

          {this.state.persons.map((person) => {
            return <UserOutput username = {person} key = {person} clicked={this.userOutputClickedHandler}></UserOutput>
          })}
      </div>
      </Auxiliary>
     /* <div className="App">
        <button onClick={() => {
          let flag = this.state.showHeader;
          this.setState({showHeader: !flag});
        }}>Toggle Header</button>
        {this.state.showHeader ? <h1>This is react app!</h1> : null}
        <h2  style={style}>Assignment 1</h2>
        <UserInput changeHandler = {this.userInputHandler} username={this.state.username}></UserInput>
        <UserOutput username = { this.state.username} key="first" clicked={this.userOutputClickedHandler}></UserOutput>
        <UserOutput username = { this.state.username} key="second" clicked={this.userOutputClickedHandler}></UserOutput>

        {this.state.persons.map((person) => {
          return <UserOutput username = {person} key = {person} clicked={this.userOutputClickedHandler}></UserOutput>
        })}
      </div> */
    );
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount', arguments);
  }
  //Must return a value. for now just returning true
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', arguments);
    return true;
  }
  //Must return a snapshot .
  getSnapshotBeforeUpdate(preProps, nextProps) {
    console.log('[App.js] getSnapshotBeforeUpdate', arguments);
    return true;
  }
  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log('[App.js] componentDidUpdate', arguments);
  }

  userInputHandler = (event) => {
    console.log('User input' + event.target.value);
    this.setState({username: event.target.value});
  }

  userOutputClickedHandler = (event) => {
    console.log('User output component clicked',event);
  }
}

export default App;


/* var obj = {bread:2, meat:2, salad:3, cheese:1};
var arr = Object.keys(obj).map(function(key) {
    console.log(obj[key], obj.key, [...Array(obj[key])]);
    return ([...Array(obj[key])].map(function(_, i) {
        console.log(arguments, i);
        return key+i;
}))
});
console.log(arr); */
