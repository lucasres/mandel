import React from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useSelector } from "react-redux";
import './styles.css';
import { Link } from 'react-router-dom';

export default function Config() {
    const config = useSelector(state => state);

    return (
        <div className="config-wrapper">
            <div className="row h100">
                <div className="menu-settings">
                    <div className="title-content">
                        <Link to="/">
                            <FiArrowLeft className="icon" />
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
                    <div className="group-input">
                        <p>Caminho do projeto:</p>
                        <input className="input-txt" value={config.path} />
                    </div>
                    <div className="group-input">
                        <p>Comando:</p>
                        <input className="input-txt" value={config.command} />
                    </div>
                </div>
            </div>
        </div>
    );
}
