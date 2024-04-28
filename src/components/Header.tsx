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
        <Container fluid>
            <Navbar className="navbar-header">
                <Container fluid>
                    <Navbar.Brand href="/home"><strong><h2>Sistema Gerenciamento</h2></strong></Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Cadastros/Funcionarios">Funcionários</NavDropdown.Item>
                                <NavDropdown.Item href="/Cadastros/Produtos">Produtos</NavDropdown.Item>
                                <NavDropdown.Item href="/Cadastros/Clientes">Clientes</NavDropdown.Item>
                                <NavDropdown.Item href="/Cadastros/Fornecedores">Fornecedores</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gestão" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Administracao/Estoque">Estoque</NavDropdown.Item>
                                <NavDropdown.Item href="/Cadastros/Vendas">Vendas</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </Container>
        
    )
}