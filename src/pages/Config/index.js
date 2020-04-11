import React from 'react';

import './styles.css';

export default function Config() {
  return (
    <div className="config-wrapper">
        <div className="row h100">
            <div className="menu-settings">
                <p className="title">Configurações</p>
                <ul>
                    <li>
                        Comando
                    </li>
                </ul>
            </div>
            <div className="content-settings">
                <p>Settings</p>
            </div>
        </div>
    </div>
  );
}
