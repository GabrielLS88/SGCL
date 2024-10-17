import './Lançamento.css';
import ImagemUser from '../../assets/portrait-man-laughing.jpg';
import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface DropdownState {
  [key: string]: boolean;
}

const Lançamento: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({});
  const [chevronUp, setChevronUp] = useState<DropdownState>({});

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen((prev) => {
      const newState: DropdownState = { [dropdown]: !prev[dropdown] };
      Object.keys(prev).forEach((key) => {
        if (key !== dropdown) {
          newState[key] = false;
        }
      });
      return newState;
    });
    setChevronUp((prev) => {
      const newState: DropdownState = { [dropdown]: !prev[dropdown] };
      Object.keys(prev).forEach((key) => {
        if (key !== dropdown) {
          newState[key] = false;
        }
      });
      return newState;
    });
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    Object.keys(dropdownOpen).forEach((dropdown) => {
      if (dropdownOpen[dropdown]) {
        timeoutId = setTimeout(() => {
          setDropdownOpen((prev) => ({ ...prev, [dropdown]: false }));
          setChevronUp((prev) => ({ ...prev, [dropdown]: false }));
        }, 10000);
      }
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dropdownOpen]);

  const filterOptions: { [key: string]: string[] } = {
    'Classificação': ['Nome', 'Data de modificação', 'Tipo', 'Mais'],
    'Visualização': ['Detalhes', 'Icones Pequenos', 'Icones médios', 'Icones Grandes'],
  };

  return (
    <div className="body-header">
      <div className="menu-sidebar">
        <div className="user-section">
          <img src={ImagemUser} alt="User" />
          <button className='user-button' onClick={() => toggleDropdown('user')}>Admin{' '}<i className={`bi ${chevronUp['user'] ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i></button>
          <div className={`dropdown-menu ${dropdownOpen['user'] ? 'active' : ''}`}>
            <a href="#" className="dropdown-item">Perfil</a>
            <a href="#" className="dropdown-item">Contrato</a>
            <a href="/" className="dropdown-item">Sair</a>
          </div>
          <div className="bell-icon"><i className="bi bi-bell-fill"></i></div>
        </div>
        <div className="menu-links">
          {[
            { icon: 'bi-rocket-fill', text: 'Lançamento',referencia: '/lancamento'},
            { icon: 'bi-bank2', text: 'Unidade Lotérica',referencia: '/unidadeLoterica' },
            { icon: 'bi-bank', text: 'Cobrança Diária',referencia: '/cobrancaDiaria'},
            { icon: 'bi-person-circle', text: 'Passagem Atendente',referencia: '/passagemAtendente'},
            { icon: 'bi-headset', text: 'Resumo do Operador',referencia: '/resumoOperador'},
            { icon: 'bi-cash-coin', text: 'Tarifação',referencia: '/tarifacao'},
            { icon: 'bi-toggles2', text: 'Controle de Estoque',referencia: '/controleEstoque'},
            { icon: 'bi-bell-fill', text: 'Emissão de relatório',referencia: '/emissaoRelatorio'},
          ].map((link, index) => (
            <a key={index} className='navigation-link' href={link.referencia}><i className={`bi ${link.icon}`}></i>{link.text}</a>
          ))}
        </div>
        <div className="blocoDataLiberacao">
          <p>Lincença até:</p>
          <h1>12/12/2024</h1>
        </div>
      </div>
      <div className="content-section">
        <div className="top-menu">
          <div className="filter-options">
            {['Classificação', 'Visualização'].map((filter, index) => (
              <div key={index}>
                <button className='user-button-header' onClick={() => toggleDropdown(filter)}>{filter}{' '}<i className={`bi ${chevronUp[filter] ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i></button>
                <div className={`dropdown-menu-header ${dropdownOpen[filter] ? 'active' : ''}`}>
                  {filterOptions[filter].map((item, idx) => (
                    <a key={idx} href="#" className="dropdown-item">{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="search-and-help">
            <div className="search-bar">
              <input type="text" placeholder='Pesquisar...' />
              <i className="bi bi-search"></i>
            </div>
            <div className="help-icon">
              <a href="#"><i className="bi bi-question"></i></a>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="tituloMain-content">
            <h1>Lançamento</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lançamento;
