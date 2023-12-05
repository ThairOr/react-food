import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../contexts/AuthContesxt";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Mynav() {
  const { user, setUser, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/recipes">
              Recipes
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About us{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              {" "}
              Register{" "}
            </Nav.Link>
            <Nav.Link as={NavLink} to="/chat">
              Chat
            </Nav.Link>
            {/* <Nav.Link  as={NavLink} to="/login">Login</Nav.Link> */}
          </Nav>{" "}
          {user ? (
            <Nav.Link
              className="sm"
              style={{ color: "white" }}
              onClick={logout}
            >
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link style={{ color: "white" }} as={NavLink} to="/login">
              Login
            </Nav.Link>
          )}
        </Container>
      </Navbar>
    </>
  );
}

export default Mynav;
