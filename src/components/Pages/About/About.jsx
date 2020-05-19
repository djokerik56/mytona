import React from 'react'
import { Container, Tab, Row, Nav, Col } from 'react-bootstrap'

const About = (props) => {
    let postAboutLink = props.aboutInfo.map((link, i) => {
        return (
            <Nav.Link eventKey={link.eventKey} key={i}>
                {link.link}
            </Nav.Link>
        )
    })
    let postAboutInfo = props.aboutInfo.map((post, i) => {
        return (
            <Tab.Pane eventKey={post.eventKey} key={i}>
                <img src={post.image.src} alt={post.image.src} />
                <p>{post.text}</p>
            </Tab.Pane>

        )
    })
    return (
        <Container>
            <Tab.Container id='left-tabs-exampl' defaultActiveKey='first'>
                <Row>
                    <Col sm={3}>
                        <Nav variant='pills' className='flex-column mt-2'>
                            <Nav.Item>
                                {postAboutLink}
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='tab-content'>
                            {postAboutInfo}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </Container>
    )
}

export default About
