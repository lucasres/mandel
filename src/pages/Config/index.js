import React from 'react';
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';
import { Link } from 'react-router-dom';

export default function Config() {
  return (
    <div className="config-wrapper">
        <div className="row h100">
            <div className="menu-settings">
                <div className="title-content">
                    <Link to="/">
                        <FiArrowLeft className="icon"/>
                    </Link>
                    <p className="title">Configurações</p>
                </div>
                <ul>
                    <li className="active">
                        Geral
                    </li>
                </ul>
            </div>
            <div className="content-settings">
                <p>Caminho do projeto:</p>
                <input className="input-txt" placeholder="Clique aqui para selecionar o caminho..." webkitdirectory />
            </div>
        </div>
    </div>
  );
}
