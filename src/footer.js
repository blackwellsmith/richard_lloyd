import React from 'react'
import facebook from './facebook.png'
import instagram from './instagram.png'
import './App.css';

const Footer = () => {
    return (
        <header className="footer">
            <h4><a href="https://www.instagram.com/mr_r_lloyd/">
                <img src={instagram} height="35" width="35" /> </a>
                <a href="https://www.facebook.com/The-Official-Richard-Lloyd-Fan-Page-126158157415048/">
                <img src={facebook} height="50" width="50" /></a></h4>
       </header> 
    )
}
export default Footer;