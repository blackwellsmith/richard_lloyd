import React from 'react'

import richard from './richard.png';
import './App.css';


const Home = () => {
    return (
        <div className="App">
          <header className="App-header">
            <h1 classname="line">Richard Lloyd The Alchemist</h1>
            <h1>Guitar is passion</h1>
            <p></p>    
            <img src={richard}  width="420" height="630"/>
            <br />
            <br/>
            <br/> 
            <br/>
            <br/> 
            
          </header>
        </div>
    )
}
export default Home;