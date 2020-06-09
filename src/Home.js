import React from 'react'
import richard from './richard.png';
import './App.css';


const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
            <h1>Richard Lloyd: Alchemical Guitarist</h1>
            <p></p>    
            <img src={richard} width="420" height="630" />
            <br/>
            <br/>
            </header>    
        </div>
    )
}
export default Home;