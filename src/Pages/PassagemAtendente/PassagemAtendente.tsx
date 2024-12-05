import './PassagemAtendente.css';
//import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Lançamento: React.FC = () => {

  function acionamentoAjuda() {
    alert("help")
  }

  return (
    <div className='bodyLancamento'>
      <div className="spaceNavBar">
      <div className="spacoElementosNavegacao">
          <a href="/inicio">📁 Início</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/lancamento">📁 Lançamento</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/unidadeLoterica">📁 Unidade Lotérica</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/cobrancaDiaria">📁 Cobrança Diária</a>
        </div>
        <div className="spacoElementosNavegacao" style={{ backgroundColor: "#2e31e934", borderRadius: "0px 15px 15px 0px" }}>
          <a href="/passagemAtendente">📁 Passagem Atendente</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/resumoOperador">📁 Resumo do Operador</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/tarifacao">📁 Tarifação</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/controleEstoque">📁 Controle de Estoque</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="/emissaoRelatorio">📁 Emissão de Relátorio</a>
        </div>
        <div className="spacoElementosNavegacao">
          <a href="#">📁 Favoritos</a>
        </div>
        <div className="spacoElementoDateLicenci">
          <div className="spaceAboutTitleDate">
            <p>Licença até:</p>
          </div>
          <div className="spacoParaReceberDate">
            <p>31/12/2024</p>
          </div>
        </div>
      </div>
      <div className="spaceSubMenuAndBodyPrincipal">
        <div className="spaceParaSubMenuInicio">
          <div className="spaceSubNavegacao">
            <div className="spaceForTextSelect">
              <a href="#" id='navegacaoSubMenuClassificacao'>Classificação</a>
              <i className="bi bi-chevron-down"></i>
              <div className="spaceSubOptionNavegacaoClassificacao">
                <a href="#">Teste 1</a>
                <a href="#">Teste 2</a>
              </div>
            </div>
            <div className="spaceForTextSelect">
              <a href="#" id='navegacaoSubMenuVizualizacao'> Vizualização</a>
              <i className="bi bi-chevron-down"></i>
              <div className="spaceSubOptionNavegacaoVizualizacao">
                <a href="#">Teste 1</a>
                <a href="#">Teste 2</a>
              </div>
            </div>
            <div className="spaceForTextSelect">
              <a href="#">Pré-visualização</a>
            </div>
          </div>
          <div className="spaceSearchAndHelp">
            <div className="spaceInputAndAlert">
              <div className="spacceSearchAndIcon">
                <input type="text" placeholder='Search text' id="inputSearch" />
                <button className='buttonSearchIcon'><i className="bi bi-search"></i></button>
              </div>
              <button id='buttonAlert' onClick={acionamentoAjuda}><i id='bellAlert' className="bi bi-bell-fill"></i></button>
            </div>
          </div>
        </div>
        <div className="spacoBodyDocumentos">

        </div>
      </div>
    </div>
  );
}

export default Lançamento;
