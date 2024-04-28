import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

interface IHeader{
    children : React.ReactNode
}

export const Header : React.FC <IHeader> = ({children}) => {
    return (
        <Container fluid className="main">
            <Navbar expand="lg" className="navbar-header">
                <Container fluid>
                    <Navbar.Brand href="#home"><strong><h3>Sistema Gerenciamento</h3></strong></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Funcionários</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Produtos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Fornecedores</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gestão" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">Estoque</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Vendas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
            {children}
        </Container>
        
    )
}