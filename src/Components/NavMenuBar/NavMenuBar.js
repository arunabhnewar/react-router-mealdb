import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavMenuBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home"
                        className="fw-bold"
                    >React MealDb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto my-3 my-lg-0">
                            <Stack direction="horizontal" gap={3}>
                                <NavLink
                                    to="/home"
                                    className="text-decoration-none"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "orange"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="text-decoration-none"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "orange"
                                    }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/resturant"
                                    className="text-decoration-none"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "orange"
                                    }}
                                >
                                    Resturant
                                </NavLink>

                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default NavMenuBar;