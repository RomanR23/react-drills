import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Image from './Image'

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Image url={'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg'} />
      </div>
    );
  }
}

export default App;
