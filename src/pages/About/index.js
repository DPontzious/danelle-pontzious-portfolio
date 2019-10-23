import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import Nav from "../../components/Nav/index"

class About extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <Container>
                    <Row>
                        <Col className='aboutMe'>
                            A highly motivated and creative optimist looking for the right team to continue learning and growing as a professional software developer. Graduated at the top of the class at the University of Arizona’s developer bootcamp in April, studying the languages, tools, concepts, and practices that make a full-stack developer. A quick learner and selfless teammate; proven to be a loyal and valuable resource with over ten years of experience managing and collaborating with people to deliver a better product.

                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default About;