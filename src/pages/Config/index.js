import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { DEFAULT_TYPES } from "../../utils/types";
import './styles.css';
import { Link } from 'react-router-dom';
const { remote } = window.require('electron');

export default function Config() {
    const config = useSelector(state => state);
    const dispatch = useDispatch();
    const [command, setCommand] = useState(config[config.current_type] ?
        config[config.current_type].command : ''
    );
    const [type, setType] = useState(config.current_type);
    const [projectPath, setProjectPath] = useState(config[config.current_type] ?
        config[config.current_type].project_path : ''
    );


    const handleSaveState = (e) => {
        if (type) {
            dispatch({ type: 'CHANGE_TYPE', value: type });
        }
        if (command) {
            dispatch({ type: 'CHANGE_COMMAND', value: command });
        }
        if (projectPath) {
            dispatch({ type: 'CHANGE_PROJECT_PATH', value: projectPath });
        }
    }

    const handleSelectProjectFolder = async () => {
        const result = await remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
            properties: ['openDirectory']
        });
        if(result.filePaths){
            setProjectPath(result.filePaths);
        }
    }

    const handleChangeType = (e) => {
        const {value} = e.target;
        setType(value);
        setCommand(DEFAULT_TYPES[value].config.command);
    }

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
                        <p>Framework:</p>
                        <select className="select-input"
                            onChange={(e) => { handleChangeType(e) }}
                            defaultValue={type}
                        >
                            {
                                config.avaliable_types.map((el, i) => (
                                    <option key={i}
                                        value={el}
                                    >
                                        {el.toUpperCase()}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="group-input">
                        <p>Caminho do projeto:</p>
                        <div className="row">
                            <input className="input-txt mg-rt-14" value={projectPath}
                                onChange={(e) => setProjectPath(e.target.value)} />
                            <button className="button-primary mg-tp-8"
                                onClick={(e) => { handleSelectProjectFolder() }}
                            >
                                Selecionar...
                            </button>
                        </div>
                    </div>
                    <div className="group-input">
                        <p>Comando:</p>
                        <input className="input-txt"
                            value={command}
                            onChange={(e) => { setCommand(e.target.value) }} />
                    </div>
                    <div className="row end">
                        <div className="group-input">
                            <button className="button-primary"
                                onClick={(e) => { handleSaveState() }}
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
