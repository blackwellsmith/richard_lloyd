import React from 'react'
import Moon from './marqueeMoon.png'
import Alchemy from './alchemy.png'
import Adventure from './adventure.png'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

const Music = () => {
    return (
        <div className="App">
            <header className="App-header">
                <hr/>
                <Container>
                    <Row>
                <Col>
                <Card className="card">
                    <a href="https://www.amazon.com/s?k=television+marquee+moon+vinyl&i=popular&ref=nb_sb_noss_1">
                    <img src={Moon} width="300" height="300" />
                    </a>
                    <Card.Body>
                    <Card.Title>Richard's Pick</Card.Title>
                    <Card.Text>?</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">released Feb 1977</small>
                    </Card.Footer>
                    </Card>
                    </Col>
                    <Col>    
                    <Card className="card">
                    <a href="https://www.amazon.com/s?k=television+adventure+vinyl&i=popular&ref=nb_sb_noss_1">
                    <img src={Adventure} width="300" height="300" /></a>
                    <Card.Body>
                    <Card.Title>Richard's Pick</Card.Title>
                    <Card.Text>?</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">released April 1978</small>
                    </Card.Footer>
                    </Card>
                    </Col>
                    <Col>    
                    <Card className="card">
                    <img src={Alchemy} width="300" height="300" />
                    <Card.Body>
                    <Card.Title>Richard's Pick</Card.Title>
                    <Card.Text>?</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">released 1979</small>
                    </Card.Footer>
                    </Card>
                    </Col>            
                </Row>        
                </Container>  
                <hr/>
            </header>
        </div>
    )
}
export default Music;