import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Logo from '../../assets/img/svg/logo.svg'
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            src={Logo}
                            alt='Logo'
                            className='d-inline-block align-top logo'
                            /> MYTONA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About us</Nav.Link>
                            <Nav.Link as={Link} to='/news'>News</Nav.Link>
                        </Nav>
                            {!props.isAuth
                            ? <Button variant='outline-info' as={Link} to='/login'>Login</Button>
                            : <div><span className='user-name'>{props.userName}</span><Button variant='outline-info' onClick={props.logout}>Log out</Button></div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header