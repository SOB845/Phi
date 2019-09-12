import React, {Component} from 'react';
import Intro from './components/intro';
import Explore from './components/explore';
import Nav from './components/Navbar';
import './App.css';


class App extends Component {
  render(){
    return(
      <div className = 'App-header'>
        <header className='App'>
          <Nav/>
          <Intro/>
          <Explore/>
        </header>
      </div>
       
    );
  }
}

export default App;
