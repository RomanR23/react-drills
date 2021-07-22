import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

class App extends React.Component{
  constructor(){
    super();
    
    this.state= {
      C3PO: ''
    };
  }

  componentDidMount(){
    axios.get('https://swapi.dev/api/people/2').then(res=>{
      this.setState({
        C3PO: res.data
      });
    });
  }

  render(){
    return (
      <div className ='App'>
        <h1>name: {this.state.C3PO.name}</h1>
        <h1>Birth Year: {this.state.C3PO.birth_year}</h1>
        <h1>Height: {this.state.C3PO.height}</h1>
        <h1>Eye Color: {this.state.C3PO.eye_color}</h1>
      </div>
    );
  }
}

export default App;
