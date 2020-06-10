import React from 'react'
import richard from './richard.png';
import oldschool from './oldschool.png';
import eighties from './eighties.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Richard Lloyd: Alchemical Guitarist</h1>
                <p></p> 
                    <Container>
                    <Row>
                        <Col className="homeImage"><img src={oldschool} width="350" height="472.3" /></Col>
                        <Col className="homeImage"><img src={richard} width="315" height="472.3" /></Col>
                        <Col className="homeImage"><img src={eighties} width="350" height="472.3" /></Col>
                    </Row> 
                    </Container>
            </header>    
        </div>
    )
}
export default Home;