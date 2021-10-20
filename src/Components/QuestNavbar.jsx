import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth, logout, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function QuestNavbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Navbar bg="primary" fixed="top" variant="dark" expand="md">
        <Container>
          <Navbar.Brand>QuestBoard</Navbar.Brand>

          <Nav>
            {user ? (
              <>
                <Nav.Link>Pending Quests</Nav.Link>
                <Nav.Link>The Board</Nav.Link>
                <Nav.Link>My Account</Nav.Link>
                <Nav.Link onClick={logout}>Sign Out</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={signInWithGoogle}>Sign In</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default QuestNavbar;
