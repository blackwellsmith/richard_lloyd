import React from 'react'
import Layout from './Layout.js'
import image from './portrait.png'

const Images = () => {
    return (
        <div classname="App">
            <header className="App-header">
                <h1>Gallery</h1>
                <img src={image} />
                <br/>
                <br/>
                <br/>
                <br/>
            </header>    
        </div>
    )
}
export default Images;