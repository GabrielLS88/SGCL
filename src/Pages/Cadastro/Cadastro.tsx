import React, { useState, useEffect } from 'react';
import './Cadastro.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Alerta from "../../Componetes/Alerta/Alerta";
import AlertSucess from "../../Componetes/AlertaSucess/AlertaSucess";

const Cadastrar: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [exibirAlerta, setExibirAlerta] = useState<boolean>(false);
  const [mensagemAlerta, setMensagemAlerta] = useState<string>('');
  const [mensagemAlertaSucess, setMensagemAlertaSucess] = useState<string>('');
  const [CnpjUser, setCnpjUser] = useState<string>('');
  const [passwordUser, setPasswordUser] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [senhaNoTamanhoIdeal, setSenhaNoTamanhoIdeal] = useState<boolean>(true);

  useEffect(() => {
    setIsDisabled(CnpjUser === '' || passwordUser === ''|| CnpjUser === passwordUser|| passwordUser.length < 4);
    setSenhaNoTamanhoIdeal(passwordUser.length >= 4);
  }, [CnpjUser, passwordUser]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fecharAlerta = () => {
    setExibirAlerta(false);
  };

  const ClickVoltar = () => {
    window.location.href = '/';
  };

  const isValidCPF = (cpf: string): string => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return "false";
    }
    let soma: number;
    let resto: number;
    soma = 0;
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.substring(9, 10))) {
      return "false";
    }
    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpf.substring(10, 11))) {
      return "false";
    }
  
    return cpf;
  }

  const ClickEntrar = () => {
    if (CnpjUser === '' || passwordUser === '') {
      setMensagemAlerta('Por favor, preencha todos os campos antes de prosseguir o login.');
      setExibirAlerta(true);
    } else if (isValidCPF(CnpjUser) == "false") {
      setMensagemAlerta('Este cpf e inválido.');
      setExibirAlerta(true);
    } else {
      setMensagemAlertaSucess('Login feito com sucesso!');
      const token = 'Autorizado';
      localStorage.setItem('token', token);

      setTimeout(() => {
        window.location.href = '/home';
      }, 1200);
    }
  };

  return (
    <div className="bodyCadastro">
      <div className="espacoCadastro">
        <div className="blocoDosInputsCadastro">
          <h1 id='tituloPagina'>Gestão de lotérica</h1>
          <h2 id='tituloInfoCadastro'>Cadastro</h2>
          <input
            type="text"
            placeholder='CNPJ'
            id='CnpjUser'
            value={CnpjUser}
            onChange={(e) => setCnpjUser(e.target.value)}
          />
          <div className="inputComVisualizadorDeSenhaCadastro">
            <input
              id='password'
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Senha'
              value={passwordUser}
              onChange={(e) => setPasswordUser(e.target.value)}
            />
            <i style={{transform: 'translateY(-80%)'}} className={`bi ${passwordVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={togglePasswordVisibility}></i>
          </div>
          <div className={`esspacoAvisoSenha ${senhaNoTamanhoIdeal ? 'senhaValida' : 'senhaInvalida'}`}>
            <p>Sua senha deve conter no minimo 4 digitos!</p>
          </div>
          <button id='btnCadastrar' onClick={ClickEntrar} disabled={isDisabled}>Entrar</button>
          <button id='btnVoltarTelaLogin' onClick={ClickVoltar}>Voltar</button>
        </div>
      </div>
      {exibirAlerta && <Alerta mensagem={mensagemAlerta} fecharAlerta={fecharAlerta} />}
      {mensagemAlertaSucess && <AlertSucess mensagem={mensagemAlertaSucess} />}
    </div>
  );
}

export default Cadastrar;
