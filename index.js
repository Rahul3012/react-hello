import React, { Component } from 'react';
import { render } from 'react-dom';
import ShowTime from './ShowTime';
import PlayGame from './PlayGame';
import MakeTodo from './MakeTodo';
import UserRegister from './UserRegister';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }
  render() {
    return (
      <div>
        <p>
         <ShowTime/>
        </p>
        <p>
        TikTakToe:
          <PlayGame/>
        </p>
        <p>
        Make A Todo List:
          <MakeTodo/>
        </p>
        <p>
          <UserRegister/>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
