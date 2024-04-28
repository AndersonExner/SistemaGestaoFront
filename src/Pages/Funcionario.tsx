import React, { useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Card  from "react-bootstrap/Card";
import  Stack  from "react-bootstrap/Stack";
import { ModalFuncionario, ModalFuncionarioType } from "../components/ModalFunionario";

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
    const [modeModal, setModeModal] = useState<ModalFuncionarioType>('NovoFuncionario')
    const [showModal, setShowModal] = useState<boolean>(false) 
    const [idFuncionario, setIdFuncionario] = useState<string>('')

    const abrirModalFuncionario = () => {
        setModeModal('NovoFuncionario')
        setShowModal(true)
    }

    const handleCloseModal = () => { 
        setShowModal(false);
    }

    return (
        <div className="main">
            <Card>
                <Card.Header>
                    <Stack direction="horizontal">
                        <h4>Controle De Funcionários</h4>
                        <Button className="ms-auto mb-2" variant="primary" onClick={() => abrirModalFuncionario()}>Cadastrar Funcionário</Button>
                    </Stack>
                </Card.Header>
                <Card.Body>

                </Card.Body>
            </Card>
            <ModalFuncionario handleClose={handleCloseModal} open={showModal} id={idFuncionario} mode={modeModal}/>
        </div>
    )
};