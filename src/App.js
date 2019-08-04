import React, {Component} from 'react';
import Intro from './components/intro';
import Explore from './components/explore';
import './App.css';
//import { ReactComponent } from '*.svg';
//import logo from './logo.svg';


class App extends Component {
  render(){
    return(
      <div className = 'App-header'>
        <header className='App'>
          <Intro/>
          <Explore/>
        </header>
      </div>
       
    );
  }
}

export default App;
