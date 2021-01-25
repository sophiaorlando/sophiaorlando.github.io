import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from "../../assets/icons/logo.png"
import './NavBar.css'

function myNavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" fixed="top" className="animate-navbar nav-theme justify-content-between">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="My Portfolio Logo" className="logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default myNavBar
