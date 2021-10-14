import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavbarDefault() {
    return (
        <div>            
            <Navbar bg="primary" fixed="top" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand>
                        QuestBoard
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link>The Board</Nav.Link>
                        <Nav.Link>Sign Up</Nav.Link>
                        <Button variant="light">Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarDefault;
