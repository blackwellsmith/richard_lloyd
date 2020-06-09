import React from 'react'
import hat from './hat.png';
import book from './book.png';
import './App.css';


const Home = () => {
    return (
        <div className="App">
          <header className="App-header">
            <h1 classname="line">Hello! My name is Richard.</h1>
            <h1>Playing guitar is a passion of mine.</h1>
            <p>You probably already know that, if not well I got a little story for you.</p>
            <br/>
            <img src={book} height="400" width="400" />
            <br/>
            <img src={hat} className="App-logo" alt="logo" />
            <br/>    
          </header>
        </div>
    )
}
export default Home;