import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";





const NewNavMenu = () => {
    return(
        <div className="navigation">
                <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand><Link  to = {"/"}  className="brand-link">DotEdu</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">АИС "DotEdu"</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link> <Link className="menu-link" to = {"/"}>Главная</Link></Nav.Link>
          <Nav.Link href="http://127.0.0.1:8000/basic/" target="_blank"> Студенту </Nav.Link>
          <NavDropdown title="Преподавателю" id="offcanvasNavbarDropdown">
            <NavDropdown.Item> <Link  class="menu-item" to = {"/book/"}> Книги </Link></NavDropdown.Item>
            <NavDropdown.Item><Link  class="menu-item" to = {"/booksection/"}> Разделы учебников </Link></NavDropdown.Item>
            <NavDropdown.Item><Link  class="menu-item" to = {"/bookstructure/"}>Структура учебников</Link></NavDropdown.Item>
            <NavDropdown.Item><Link  class="menu-item" to = {"/givebook/"}>Выдача учебников</Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Администратору" id="offcanvasNavbarDropdown">
            <NavDropdown.Item> <Link  class="menu-item" to = {"/departments/"}> Кафедры </Link></NavDropdown.Item>
            <NavDropdown.Item><Link  class="menu-item" to = {"/students/"}>Студенты</Link></NavDropdown.Item>
            <NavDropdown.Item><Link  class="menu-item" to = {"/teachers/"}>Преподаватели</Link></NavDropdown.Item>
            <NavDropdown.Item> <Link  class="menu-item" to = {"/special/"}>Специальности </Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="http://127.0.0.1:8000/api/" target="_blank">
              API
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Offcanvas.Body>
      
    </Navbar.Offcanvas>
  </Container>
</Navbar>

        </div>
    )
};

export default NewNavMenu;