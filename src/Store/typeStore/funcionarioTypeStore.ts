export interface Funcionario {
    id: string;
    nome: string;
    email: string;
    senha : string;
    telefone: string;
    cargo : FuncionarioTipo;
    salario: string;
    cpf: string;
    endereco? : string;
}

export type FuncionarioTipo =  'Caixa' | 'Gerente' | 'Adminstrador' | 'Freelancer' | 'Outro'

export type novoFuncionarioRequest = Omit<Funcionario, 'id'> 


