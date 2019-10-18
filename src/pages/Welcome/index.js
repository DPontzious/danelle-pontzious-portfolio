import React, { Component } from 'react';
import { Container, Row, Col, Button, } from 'reactstrap';
import './style.css';
import { Redirect } from 'react-router-dom';

class Welcome extends Component {
    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to="/About" />
        }
    }

    render() {
        return (
            < Container className="welcome" >
                <Row></Row>
                <Row>
                    < Col xs={{ size: 2, offset: 1 }} className='firstCol' > &lt;</Col >
                    <Col xs="auto" className="secCol"><p>Hello World!</p><p>Danelle Pontzious</p><p className="softwareLine"><i>Full Stack Software Engineer </i></p></Col>
                    <Col xs="2" className="thirdCol">&gt;</Col>
                </Row>
                <Row className="buttonRow" >
                    <Col xs={{
                        size: "auto", offset: 2
                    }} >
                        {this.renderRedirect()}
                        <Button outline color="secondary" id="aboutButton" onClick={this.setRedirect} >Learn More About Me-&gt;</Button>
                        <Button outline color="secondary">Learn Random Facts Instead -&gt;</Button>
                    </Col>


                </Row >

            </Container >

        )
    }
}

export default Welcome; 