import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { auth, signInWithGoogle, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import 'bootstrap/dist/css/bootstrap.min.css';


function QuestNavbar() {
    const [user] = useAuthState(auth); //remembers user [loading, error] can also be used

    return (
        <div>            
            <Navbar bg="primary" fixed="top" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href={`/`}>
                        QuestBoard
                    </Navbar.Brand>

                    <Nav>
                        {user ? (
                            <>
                            {/* <Nav.Link>Pending Quests</Nav.Link> */}
                            <Nav.Link href={`/board`}>The Board</Nav.Link>
                            <Nav.Link>My Account</Nav.Link>
                            <Button variant="light" onClick={logout}>Sign Out</Button>
                            </>

                        ) : (
                            <>
                            <Nav.Link href={`/board`}>The Board</Nav.Link>
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
