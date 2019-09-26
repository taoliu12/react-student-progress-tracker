import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {     
    console.log('a')
    this.setStudentData()
  }

  setStudentData() {
    fetch('https://api.github.com/users/taoliu12/events/public')
    .then(resp => resp.json())
    .then(studentData => {
      console.log(studentData)
      // debugger
      this.setState({username: studentData[0].actor.login})
    })
  }

  

  render() {
    console.log('b')
    return (
      <div className="App container">
        <header className="App-header">
          Student Progress Report
        </header>
        <div className="student-container row">
          <div className="col-md-4">
            <p>Username: {this.state.username}</p>
            labs
          </div>
          <div className="col-md-4">
            commits
          </div>
        </div>
      </div>
    );
  }
}

export default App;
