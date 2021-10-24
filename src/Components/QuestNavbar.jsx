import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { auth, signInWithGoogle, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import 'bootstrap/dist/css/bootstrap.min.css';


function QuestNavbar() {
    const [user, loading, error] = useAuthState(auth); //remembers user 

    return (
        <div>            
            <Navbar bg="primary" fixed="top" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand>
                        QuestBoard
                    </Navbar.Brand>

                    <Nav>
                        {user ? (
                            <>
                            {/* <Nav.Link>Pending Quests</Nav.Link> */}
                            <Nav.Link href="http://localhost:3000/board">The Board</Nav.Link>
                            <Nav.Link>My Account</Nav.Link>
                            <Button variant="light" onClick={logout}>Sign Out</Button>
                            </>

                        ) : (
                            <>
                            <Nav.Link href="http://localhost:3000/board">The Board</Nav.Link>
                            <Button variant="light" onClick={signInWithGoogle}>Login</Button>
                            </>
                        )}
                        
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default QuestNavbar;
