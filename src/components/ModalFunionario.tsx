import React, { useState } from "react";
import { FuncionarioTipo, FuncionarioTipoObj } from "../Pages/Funcionario";
import { Button, Col, FloatingLabel, Form, Modal, Row, Spinner } from "react-bootstrap";

export type ModalFuncionarioType = 'NovoFuncionario' | 'EditarFuncionario'

interface IModalFuncionario {
    open: boolean;
    mode: ModalFuncionarioType;
    handleClose: () => void;
    id?: string;
}

export const ModalFuncionario = ({ open, mode, handleClose, id }: IModalFuncionario) => {

    //states funcionario
    const [nome, setNome] = useState<string>('')
    const [endereco, setEndereco] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [cargo, setCargo] = useState<FuncionarioTipo>('Caixa')
    const [ rg, setRG ] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [salario, setSalario] = useState<string>('')

    //states modal 
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleFormSubmit = () => {
        if (mode === 'NovoFuncionario') {
            setIsLoading(true)
            alert('Cadastrando Funcionario')
        }

        if (mode === 'EditarFuncionario') {
            alert('Editando Funcionario')
        }
    }

    return (
        <Modal show={open} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
            <Form noValidate onSubmit={handleFormSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>{mode === 'NovoFuncionario' ? 'Novo Funcionário' : 'Editando Funcionário'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3 g-2">
                        <Col>
                            <FloatingLabel label="Nome Completo" controlId="nome">
                                <Form.Control type="text" placeholder="" name="nome" value={nome} onChange={(ev) => setNome(ev.target.value)} autoFocus />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="mb-3 g-2">
                        <Col md={6}>
                            <FloatingLabel label="Email" controlId="email" >
                                <Form.Control type="text" placeholder="" name="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel label="Telefone" controlId="telefone" >
                                <Form.Control type="text" placeholder="" name="nome" value={telefone} onChange={(ev) => setTelefone(ev.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="mb-3 g-2">
                        <Col md={6}>
                            <FloatingLabel label="Cargo" controlId="cargo" >
                                <Form.Select aria-label="Selecione o Cargo" name="cargo">
                                    {
                                        FuncionarioTipoObj.map((tipo, i): JSX.Element => {
                                            return (
                                                <option key={tipo.key} value={tipo.value} onClick={() => setCargo(tipo.value)}>{tipo.value}</option>
                                            )
                                        })
                                    }
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel label="Salário" controlId="salario" >
                                <Form.Control type="text" placeholder="" name="salario" value={salario} onChange={(ev) => setSalario(ev.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="mb-3 g-2">
                        <Col md={6}>
                            <FloatingLabel label="CPF" controlId="cpf" >
                                <Form.Control type="text" placeholder="" name="cpf" value={cpf} onChange={(ev) => setCpf(ev.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col md={6}>
                            <FloatingLabel label="RG" controlId="rg" >
                                <Form.Control type="text" placeholder="" name="rg" value={rg} onChange={(ev) => setRG(ev.target.value)} />
                            </FloatingLabel>
                        </Col>   
                    </Row>
                    <Row className="mb-3 g-2">
                        <Col>
                            <FloatingLabel label="Endereço" controlId="endereco" >
                                <Form.Control type="text" placeholder="" name="endereco" value={endereco} onChange={(ev) => setEndereco(ev.target.value)} />
                            </FloatingLabel>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" disabled={isLoading} onClick={!isLoading ? handleFormSubmit : undefined}>
                    {
                        !isLoading
                            ? 'Salvar Funcionário'
                            :<div className="" > 
                            <Spinner 
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            <span className="m-3">Enviando...</span>
                            </div>
                    }
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )

}