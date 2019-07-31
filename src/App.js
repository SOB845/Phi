import React, {Component} from 'react';
import Intro from './components/intro';
import Explore from './components/explore';
import './App.css';
//import { ReactComponent } from '*.svg';
//import logo from './logo.svg';


class App extends React.Component {
  render(){
    return(
      <div className = 'App'>
        <header className='App-header'>
          <Intro/>
          <Explore/>
        </header>
      </div>
       
    );
  }
}

export default App;