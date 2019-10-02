import React, {Component} from 'react';
import Intro from './components/intro';
import Explore from './components/explore';
import Navigation from './components/navigation';
import './App.css';


class App extends Component {
  render(){
    return(
      <div className = 'App'>
          <Nav/>
          <Intro/>
          <Explore/>
      </div>
       
    );
  }
}

export default App;
