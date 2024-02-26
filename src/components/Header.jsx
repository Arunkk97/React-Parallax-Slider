import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-light" style={{height:'90px'}}>
      <Container fluid>
        <Navbar.Brand href="#home">
        <img
              src="https://cdn.skoda-storyboard.com/2023/07/Skoda_Wordmark_Spacing_130_RGB_Emerald_Green_bd698792.png"
              width="190"
              height="60"
              className="d-inline-block align-top ms-3"
              alt="Skoda logo"
            />
            
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link style={{color:'black',fontSize:'20px'}}  href="#features">Models</Nav.Link>
            <Nav.Link style={{color:'black',fontSize:'20px'}}  href="#pricing">Shopping</Nav.Link>
            <Nav.Link style={{color:'black',fontSize:'20px'}}  href="#features">Discover Skoda</Nav.Link>
            <Nav.Link style={{color:'black',fontSize:'20px'}}  href="#pricing">Owner's Support</Nav.Link>
            <Nav.Link style={{color:'black',fontSize:'20px'}}  href="#pricing">Company</Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header