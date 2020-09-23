import React, { useState } from 'react';
import logo from '../../assets/img/icon-128.png';
import './Popup.css';
import { fakerBr, maskBr } from 'js-brasil';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const Popup = () => {
  const [latestState, setLatestState] = useState(null);
  const notyf = new Notyf();

  const mappedMenu = [
    {
      label: 'Cpf',
      onClick: () => {
        let value = fakerBr.cpf();
        setLatestState(value);
        copyToClipboard(value);
      },
    },
    {
      label: 'Cnpj',
      onClick: () => {
        let value = maskBr.cnpj(fakerBr.cnpj());
        setLatestState(value);
        copyToClipboard(value);
      },
    },
    {
      label: 'Placa',
      onClick: () => {
        let value = fakerBr.placa();
        setLatestState(value);
        copyToClipboard(value);
      },
    },
    {
      label: 'CEP',
      onClick: () => {
        let value = fakerBr.cep();
        setLatestState(value);
        copyToClipboard(value);
      },
    },
    {
      label: 'CNH',
      onClick: () => {
        let value = fakerBr.cnh();
        setLatestState(value);
        copyToClipboard(value);
      },
    },
    {
      label: 'Renavam',
      onClick: () => {
        let value = fakerBr.renavam();
        setLatestState(value);
        copyToClipboard(value);
      },
    },
    {
      label: 'RG',
      onClick: () => {
        let split = fakerBr.rg().split('-');
        setLatestState(split[1]);
        copyToClipboard(split[1]);
      },
    },
    {
      label: 'Telefone',
      onClick: () => {
        let value = fakerBr.telefone();
        setLatestState(value);
        copyToClipboard(value);
      },
    },
  ];

  const copyToClipboard = (str) => {
    try {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <input value={latestState} readOnly />
      </div>
      <div className="App-menu">
        <ul>
          {mappedMenu.map((item) => {
            const handleOnClick = () => {
              item.onClick();
              notyf.success('Copiado para área de transferência');
            };
            return (
              <li>
                <button className="btn" onClick={handleOnClick}>
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
