import './inicio.css';
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


interface Lancamento {
  id_lancamento: number,
  nome: string,
  date: string,
  time: string,
  descricao: string 
}

interface Props{
  lancamentos: Lancamento[]
}

function clickButtonLancamentos(id_lancamentoClicado: number, nome_lancamento: string){
  alert("Lançamento do id: " + id_lancamentoClicado + "\n" + "Nome do lançamento: " + nome_lancamento)
}

const Lancamentos: React.FC<Props> = ({ lancamentos }) => {
  return (
    <div className='spaceLancamento_create'>
      {lancamentos.map((lancamento) => (
        <div key={lancamento.id_lancamento} className='lancamento_card'> 
          <button onClick={() => clickButtonLancamentos(lancamento.id_lancamento,lancamento.nome)}>📁 {lancamento.nome}</button>
          <p>{lancamento.date} {lancamento.time}</p>
          <p>{lancamento.descricao}</p>
        </div>
      ))}
    </div>
  )
}

const Lançamento: React.FC = () => {

    const [data, setData] = useState<Lancamento[]>([
      { id_lancamento: 1, nome: "Lançamento", date: "07/12/24", time: "14:00", descricao: "Lançamento 1" },
      { id_lancamento: 2, nome: "Lançamento", date: "07/12/24", time: "14:00", descricao: "Lançamento 2" }
    ]);

  function acionamentoAjuda() {
    alert("help")
  }

  function pesquisaConsultada(){
    alert("consultou")
  }

  function novoLancamentoEvento(): void{
    const valorDigitado = prompt("Qual o nome do lançamento?")
    console.log(valorDigitado)
    const novoLancamentoDados = {
      "id_lancamento": data.length + 1,
      "nome": valorDigitado || "Sem Nome",
      "date": "07/12/24",
      "time": "14:00",
      "descricao": `Lançamento ${data.length + 1}`
    }

    setData((prevData) => [...prevData, novoLancamentoDados]);
  }

  return (
    <div className='bodyLancamento'>
      <div className="spaceNavBar">
        <div className="spacoElementosNavegacao" style={{ backgroundColor: "#2e31e934", borderRadius: "0px 15px 15px 0px" }}>
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
        <div className="spacoElementosNavegacao">
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
                <button className='buttonSearchIcon' onClick={pesquisaConsultada}><i className="bi bi-search"></i></button>
              </div>
              <button id='buttonAlert' onClick={acionamentoAjuda}><i id='bellAlert' className="bi bi-bell-fill"></i></button>
              <div className="spaceUserProfile">
                <div className="profileUser">
                  <a href="/">Perfil</a>
                  <a href="/">Sair</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacoBodyDocumentos">
          <div className="spaceLancamentos">
            <div className="spaceTituloAndNewLancamento">
              <h1>Lançamentos</h1>
              <button onClick={novoLancamentoEvento}>+ novo</button>
            </div>
            <Lancamentos lancamentos={data} />
          </div>
          <div className="spaceFavorits">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lançamento;
