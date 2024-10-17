import React from 'react';
import './Alerta.css';

interface AlertaProps {
  mensagem: string;
  fecharAlerta: () => void;
}

const Alerta: React.FC<AlertaProps> = ({ mensagem, fecharAlerta }) => {
  return (
    <div className='bodyAlerta'>
      <div className="blocoAlerta">
        <div className="blocoMensagemDoAlerta">
            <div className="blocoInconClose"><i className="bi bi-x"></i></div>
          <p className="mensagemAlerta">{mensagem}</p>
        </div>
        <div className="blocoBlocoBtnClose">
          <button onClick={fecharAlerta} id='btnClose'>Voltar</button>
        </div>
      </div>
    </div>
  );
}

export default Alerta;
