import React from 'react';
import './AlertaSucess.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface AlertaProps {
  mensagem: string;
}

const Alerta: React.FC<AlertaProps> = ({ mensagem}) => {
  return (
    <div className='bodyAlertaSucess'>
      <div className="blocoAlertaSucess">
        <div className="blocoMensagemDoAlertaSucess">
          <div className="blocoCheck">
          <i className="bi bi-check-lg"></i>
          </div>
          <p className="mensagemAlertaSucess">{mensagem}</p>
        </div>
        <div className="blocoBlocoBtnCloseSucess">
        </div>
      </div>
    </div>
  );
}

export default Alerta;
