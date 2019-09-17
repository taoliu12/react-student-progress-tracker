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
    fetch('https://api.github.com/users/taoliu12/events/public')
    .then(resp => resp.json())
    .then(studentData => console.log(studentData))
  }

  render() {
    console.log('b')
    return (
      <div className="App">
        <header className="App-header">
          Student Progress
        </header>
        <div className="student-container">
          <div>
            labs
          </div>
          <div>
            commits
          </div>
    
        </div>
      </div>
    );
  }
}

export default App;
