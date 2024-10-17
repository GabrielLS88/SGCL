import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import CadastroPage from "./Pages/Cadastro/Cadastro";
import { PrivateRoute } from "./PrivateRotas/Private";
import Home from "./Pages/Home/Home";
import Lançamento from "./Pages/Lançamento/Lançamento";
import UnidadeLoterica from "./Pages/UnidadeLoterica/UnidadeLoterica";
import CobrancaDiaria from "./Pages/CobrancaDiaria/CobrancaDiaria";
import PassagemAtendente from "./Pages/PassagemAtendente/PassagemAtendente";
import ResumoOperador from "./Pages/ResumoOperador/ResumoOperador";
import Tarifacao from "./Pages/Tarifacao/Tarifacao";
import ControleEstoque from "./Pages/ControleEstoque/ControleEstoque";
import EmissaoRelatorio from "./Pages/EmissaoRelatorio/EmissaoRelatorio";

const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<CadastroPage/>} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
                <Route path="/lancamento" element={<Lançamento />} />
                <Route path="/unidadeLoterica" element={<UnidadeLoterica />} />
                <Route path="/cobrancaDiaria" element={<CobrancaDiaria />} />
                <Route path="/passagemAtendente" element={<PassagemAtendente />} />
                <Route path="/resumoOperador" element={<ResumoOperador />} />
                <Route path="/tarifacao" element={<Tarifacao />} />
                <Route path="/controleEstoque" element={<ControleEstoque />} />
                <Route path="/emissaoRelatorio" element={<EmissaoRelatorio />} />
            </Route>
        </Routes>
    );
};

export default MainRoutes;