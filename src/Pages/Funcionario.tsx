import React, { FormEvent, useState } from "react";
import  Card  from "react-bootstrap/Card";
import  Stack  from "react-bootstrap/Stack";
import { Collapse, Tab, Tabs } from "react-bootstrap";
import { FuncionarioTipo, novoFuncionarioRequest } from "../Store/typeStore/funcionarioTypeStore";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { apiPost } from "../Service/serviceAPI";

export type CardBodyFuncionarioType= 'Home' | 'Cadastrar' | 'Editar'

interface IFuncionarioTipoObj {
    key: number,
    value : FuncionarioTipo
}

export const FuncionarioTipoObj: Array<IFuncionarioTipoObj> = [
    {key : 1 , value : 'Caixa'},
    {key : 2 , value : 'Gerente'},
    {key : 3 , value : 'Adminstrador'},
    {key : 4 , value : 'Freelancer'},
    {key : 5 , value : 'Outro'},
]

export const Funcionarios = () => {

    //states modal
    const [idFuncionario, setIdFuncionario] = useState<string>('')
    const [tabOpen, setTabOpen] = useState<CardBodyFuncionarioType>('Home')

    //states funcionario
    const [nome, setNome] = useState<string>('')
    const [endereco, setEndereco] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [senha, setSenha] = useState<string>('')
    const [cargo, setCargo] = useState<FuncionarioTipo>('Caixa')
    const [cpf, setCpf] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [salario, setSalario] = useState<string>('')

    //states gerais 
    const [isLoading, setIsLoading] = useState<boolean>(false)

    //states validation
    const [nomeValidation, setNomeValidation] = useState<null | String>(null);
    const [emailValidation, setEmailValidation] = useState<null | String>(null);
    const [senhaValidation, setSenhaValidation] = useState<null | String>(null);
    const [telefoneValidation, setTelefoneValidation] = useState<null | String>(null);
    const [cargoValidation, setCargoValidation] = useState<null | String>(null);
    const [salarioValidation, setSalarioValidation] = useState<null | String>(null);
    const [cpfValidation, setCpfValidation] = useState<null | String>(null);
    const [enderecaoValidation, setEnderecoValidation] = useState<null | String>(null);
    
    const handleFormSubmit = (e: FormEvent) => {

        e.preventDefault();

        let validForm = true;

        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (nome.length < 5){
            setNomeValidation("Nome Inválido");
            validForm = false;
        } else { 
            setNomeValidation(null);
        }

        if (email.length < 5){
            setEmailValidation("Email Inválido");
            validForm = false;
        } else {
            setEmailValidation(null);
        }

        if (senha.length < 4) {
            setSenhaValidation("Senha Inválida")
            validForm = false;
        } else {
            setSenhaValidation(null)
        }

        if (!email.match(regexEmail)){
            setEmailValidation("Email Informado Inválido");
            validForm = false;
        } else {
            setEmailValidation(null);
        }

        if (telefone.length < 9){
            setTelefoneValidation("Informe um Telefone Válido");
            validForm = false;
        } else {
            setTelefoneValidation(null);
        }   

        if (salario === '') {
            setSalarioValidation("Insira um Valor");
            validForm = false;
        } else {
            setSalarioValidation(null);
        }

        if (cpf.length !== 11 ) {
            setCpfValidation("CPF Inválido");
            validForm = false;
        } else {
            setCpfValidation(null);
        }

        if (endereco === ''){
            setEnderecoValidation("Informe o Endereço");
            validForm = false;
        } else {
            setEnderecoValidation(null);
        }


        if(validForm){
            if (tabOpen === 'Cadastrar') {
                cadastrarFuncionario()
            }
    
            if (tabOpen === 'Editar') {
                alert('Editando Funcionario')
            }  
            
            limparCampos();
        } else {
            return;
        }
    }

    const limparCampos = () => {
        setNome('')
        setNomeValidation(null)
        setEmail('')
        setEmailValidation(null)
        setSenha('')
        setSenhaValidation(null)
        setTelefone('')
        setTelefoneValidation(null)
        setSalario('')
        setSalarioValidation(null)
        setCpf('')
        setCpfValidation(null)
        setEndereco('')
        setEnderecoValidation(null)
    }

    const cadastrarFuncionario = async () => {
        const novoFuncionario : novoFuncionarioRequest = {
            nome : nome,
            email : email,
            senha : senha,
            telefone : telefone,
            cargo : cargo,
            salario : salario,
            cpf : cpf,
            endereco : endereco,
        };

        const response = await apiPost('/Funcionario', novoFuncionario);

        alert(response)

    }
    return (
        <div className="main">
            <Card>
                <Card.Header>
                    <Stack direction="horizontal">
                        <h4>Controle De Funcionários</h4>
                        <Tabs 
                            id="tabs"
                            className="ms-auto mb-1"
                            activeKey={tabOpen}
                            onSelect={(k) => setTabOpen( k === "Home" ? "Home" : "Cadastrar")}
                        >
                            <Tab eventKey="Home" title="Funcionários Cadastrados">
                            </Tab>
                            <Tab eventKey="Cadastrar" title="Cadastrar Novo Funcionário">
                            </Tab>
                        </Tabs>
                    </Stack>
                </Card.Header>
                <Card.Body>
            {
                tabOpen === 'Cadastrar' &&
                <Row style={{ justifyContent: "center" }}>
                    <Col md={8}>
                        <Form noValidate onSubmit={handleFormSubmit} className="mt-4">
                        
                            <Row className="mb-3 g-3">
                                <Col>
                                    <FloatingLabel label="Nome Completo" controlId="nome">
                                        <Form.Control type="text" placeholder="" name="nome" value={nome} onChange={(ev) => setNome(ev.target.value)} autoFocus isInvalid={nomeValidation != null} />
                                        <Collapse in={nomeValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{nomeValidation}</div>
                                        </Collapse>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row className="mb-3 mt-4 g-2">
                                <Col md={6}>
                                    <FloatingLabel label="Email" controlId="email" >
                                        <Form.Control type="text" placeholder="" name="email" value={email} onChange={(ev) => setEmail(ev.target.value)} isInvalid={emailValidation != null}/>
                                        <Collapse in={emailValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{emailValidation}</div>
                                        </Collapse>
                                    </FloatingLabel>
                                </Col>
                                <Col md={6}>
                                    <FloatingLabel label="Senha" controlId="senha" >
                                        <Form.Control type="password" placeholder="" name="senha" value={senha} onChange={(ev) => setSenha(ev.target.value)} isInvalid={senhaValidation != null} />
                                        <Collapse in={senhaValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{senhaValidation}</div>
                                        </Collapse>
                                    </FloatingLabel>
                                </Col>
                            </Row>

                            <Row className="mb-3 mt-4 g-2">
                                <Col md={6}>
                                    <FloatingLabel label="Cargo" controlId="cargo" >
                                        <Form.Select aria-label="Selecione o Cargo" name="cargo" isInvalid={cargoValidation != null}>
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
                                        <Form.Control type="text" placeholder="" name="salario" value={salario} onChange={(ev) => setSalario(ev.target.value)} isInvalid={salarioValidation != null} />
                                    </FloatingLabel>
                                    <Collapse in={salarioValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{salarioValidation}</div>
                                    </Collapse>
                                </Col>

                            </Row>

                            <Row className="mb-3 mt-4 g-2">
                                <Col md={6}>
                                    <FloatingLabel label="CPF" controlId="cpf" >
                                        <Form.Control type="text" placeholder="" name="cpf" value={cpf} onChange={(ev) => setCpf(ev.target.value)} isInvalid={cpfValidation != null}/>
                                    </FloatingLabel>
                                    <Collapse in={cpfValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{cpfValidation}</div>
                                    </Collapse>
                                </Col>
                                <Col md={6}>
                                    <FloatingLabel label="Telefone" controlId="telefone" >
                                        <Form.Control type="text" placeholder="" name="nome" value={telefone} onChange={(ev) => setTelefone(ev.target.value)} isInvalid={telefoneValidation != null} />
                                        <Collapse in={telefoneValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{telefoneValidation}</div>
                                        </Collapse>
                                    </FloatingLabel>
                                </Col>

                            </Row>

                            <Row className="mb-3 mt-4 g-2">
                                <Col>
                                    <FloatingLabel label="Endereço" controlId="endereco" >
                                        <Form.Control type="text" placeholder="" name="endereco" value={endereco} onChange={(ev) => setEndereco(ev.target.value)} isInvalid={enderecaoValidation !== null}/>
                                    </FloatingLabel>
                                    <Collapse in={enderecaoValidation !== null}>
                                            <div className="invalid-feedback" style={{ display: "block"}}>{enderecaoValidation}</div>
                                    </Collapse>
                                </Col>
                            </Row>

                            <Row className="mt-4 g-1">
                                <Col md={3}>
                                    <Button type="submit" variant="primary" disabled={isLoading} onClick={!isLoading ? handleFormSubmit : undefined}>
                                        {
                                            !isLoading
                                                ? 'Cadastrar Funcionário'
                                                : <div className="" >
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
                                </Col>
                                <Col md={3}>
                                    <Button onClick={limparCampos} variant="secondary" disabled={isLoading} >
                                        Reiniciar Formulário
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            }

            {
                tabOpen === "Home" &&

                <h1>aqui vai a listagem dos funcionarios</h1>
            }
        </Card.Body>
            </Card>
        </div>
    )
};