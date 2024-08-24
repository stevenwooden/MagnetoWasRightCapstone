import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
function NavBar(){

    return(
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as = {NavLink} to = '/'><img src= "/assets/images/MWRLOGOcolordark.png" alt='dark logo' width={175} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav className="nav justify-content-end">
                    <Nav.Link as = {NavLink} to = '/' >Home</Nav.Link>  
                    <Nav.Link as = {NavLink} to = '/character-bio'>CharacterBio</Nav.Link>
                    <Nav.Link as = {NavLink} to = '/blog'>Blog</Nav.Link>
                    <Nav.Link as = {NavLink} to = '/shop'>Shop</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar