import React, { useEffect, useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import  Stack  from "react-bootstrap/Stack";
import { ModalFuncionario, ModalFuncionarioType } from "../components/ModalFunionario";
import { Tab, TabContainer, Tabs } from "react-bootstrap";
import { CardBodyFuncionario, CardBodyFuncionarioType } from "../components/CardBodyFuncionario";

export type FuncionarioTipo =  'Caixa' | 'Gerente' | 'Adminstrador' | 'Freelancer' | 'Outro'

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
                {
                    <CardBodyFuncionario mode={tabOpen}/>
                }
            </Card>
        </div>
    )
};