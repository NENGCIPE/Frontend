import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <div className="Navigation">
        <Navbar bg="light" variant="lg">
          <Navbar.Brand href="#home">NENGCIPE</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Nengcipe</Nav.Link>
            <Nav.Link href="#features">scrap</Nav.Link>
            <Nav.Link href="#features">Recommend</Nav.Link>
          </Nav>
          
          <Nav className="ml-auto">
            <Button variant="secondary">로그인</Button>
            <Button variant="light">회원가입</Button>
          </Nav>
        </Navbar>
    </div>
  );
}

export default Navigation;
