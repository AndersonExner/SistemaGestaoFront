import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Funcionarios } from "../Pages/Funcionario";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { ConstructionPage } from "../Pages/ConstructionPage";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cadastros/Funcionarios' element={<Funcionarios />} />
            <Route path='/Cadastros/Produtos' element={<ConstructionPage />} />
            <Route path='/Cadastros/Clientes' element={<ConstructionPage />} />
            <Route path='/Cadastros/Fornecedores' element={<ConstructionPage />} />
            <Route path='/Adminstracao/Estoque' element={<ConstructionPage />} />
            <Route path='/Adminstracao/Vendas' element={<ConstructionPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
};