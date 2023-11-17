import React from "react";
import { Row, Nav, Container, Navbar } from "react-bootstrap";

const ButtonEditMenu = ({ update1, update2 }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Container fluid>
        <Row>
          <Nav>
            <Nav.Item>
              <Nav.Link onClick={update1}>הגשת עסקים קיימים</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={update2}>הגשת עסקים חדשים</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
};

export default ButtonEditMenu;