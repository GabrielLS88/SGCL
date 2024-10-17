import React, { useState } from 'react';
import './Login.css';
import imagemLogin from "../../assets/Imagem login.jpeg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Alerta from "../../Componetes/Alerta/Alerta";
import AlertSucess from "../../Componetes/AlertaSucess/AlertaSucess";

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [exibirAlerta, setExibirAlerta] = useState(false);
  const [mensagemAlerta, setMensagemAlerta] = useState('');
  const [mensagemAlertaSucess, setMensagemAlertaSucess] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const fecharAlerta = () => {
    setExibirAlerta(false);
  };

  const ClickEntrar = () => {
    const idUser = (document.getElementById('idUser') as HTMLInputElement).value;
    const nameUser = (document.getElementById('nameUser') as HTMLInputElement).value;
    const passwordUser = (document.getElementById('password') as HTMLInputElement).value;

    if (idUser === "" || nameUser === "" || passwordUser === "") {
      setMensagemAlerta('Por favor, preencha todos os campos antes de prosseguir o login.');
      setExibirAlerta(true);
    } else if (idUser !== "123" || nameUser !== "123" || passwordUser !== "123") {
      setMensagemAlerta('Usuário ou senha incorretos.');
      setExibirAlerta(true);
    } else {
      setMensagemAlertaSucess('Login feito com sucesso!');
      const token = "Autorizado";
      localStorage.setItem("token", token);

      setTimeout(() => {
        window.location.href = "/home";
      }, 1200);
    }
  };

  return (
    <div className="bodyLogin">
      <div className="ladoImagem">
        <img src={imagemLogin} alt="Login visual" />
      </div>
      <div className="espacoLogin">
        <div className="blocoDosInputs">
          <h1 id='tituloPagina'>Gestão de lotérica</h1>
          <h2 id='tituloInfoLogin'>Login</h2>
          <input type="text" placeholder='Id' id='idUser' />
          <input type="text" placeholder='Usuário' id='nameUser'/>
          <div className="inputComVisualizadorDeSenha">
            <input id='password' type={passwordVisible ? 'text' : 'password'} placeholder='Senha' />
            <i style={{transform: 'translateY(-50%)'}} className={`bi ${passwordVisible ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`} onClick={togglePasswordVisibility}></i>
          </div>
          <button id='btnEntrar' onClick={ClickEntrar}>Entrar</button>
          <div className="espacoLinks">
            <a href='#'>Esqueceu a senha?</a>
            <a href='/cadastro'>Novo Cliente?</a>
          </div>
        </div>
      </div>
      {exibirAlerta && <Alerta mensagem={mensagemAlerta} fecharAlerta={fecharAlerta} />}
      {mensagemAlertaSucess && <AlertSucess mensagem={mensagemAlertaSucess} />}
    </div>
  );
}

export default Login;
