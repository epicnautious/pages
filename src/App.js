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

const Home = () => (<div>Home</div>)
const Students = () => (
  <div>
    {
      _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
    <Route path="/students/:id" component={StudentContainer}/>
  </div>
)
const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}
const StudentLink = ({id, name}) => (
  <div><Link to={`/students/${id}`}>{name}</Link></div>
)
const StudentLine = ({id, name, score}) => (
  <div>{id} {name} = {score}</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/students" component={Students}/> 
        </div>       
      </Router>
    );
  }
}

export default App;