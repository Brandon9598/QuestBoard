import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarSignedIn() {
    return (
        <div>            
            <Navbar bg="primary" fixed="top" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand>
                        QuestBoard
                    </Navbar.Brand>

                    <Nav>
                        <Nav.Link>Pending Quests</Nav.Link>
                        <Nav.Link>The Board</Nav.Link>
                        <Nav.Link>My Account</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarSignedIn;
