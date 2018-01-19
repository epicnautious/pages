import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const students=[
  {id: '12', name: 'Ama', score:23},
  {id: '18', name: 'Mama', score:27},
  {id: '20', name: 'nisshin', score:30}
]
  const StudentLine =(props) => (
    <div>{props.id} {props.name} = {props.score}</div>
  )
class App extends Component {
  render() {
    return (
      <div>
        {
          _.map(students,student =><StudentLine {...student}/>)
        }
        
      </div>
    );
  }
}

export default App;
