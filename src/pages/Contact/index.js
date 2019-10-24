import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import Nav from "../../components/Nav/index";
import Jumbo from "../../components/Jumbo/index";
import ContactForm from "../../components/ContactForm/index"

class Contact extends Component {
    componentDidMount() {
        document.body.classList.add("background-white");
    }

    componentWillUnmount() {
        document.body.classList.remove("background-white");
    }
    render() {
        return (
            <div>
                <Nav></Nav><Jumbo></Jumbo>

                <Container>
                    <Row>
                        <Col>
                            <ContactForm></ContactForm>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
export default Contact;