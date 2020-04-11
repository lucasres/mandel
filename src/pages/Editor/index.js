import React, { useState } from 'react';
import { FiPlay, FiSettings, FiCode } from "react-icons/fi";
import Icon from "../../components/Icon";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-php";
import RunService from "../../services/run";
import { Link } from "react-router-dom";

import './styles.css';

export default function Editor() {
    const [code, setCode] = useState(`<?php\n\t`);
    const [result, setResult] = useState('');

    const handleExec = () => {
        let rs = RunService.exec(code);
        rs.then((rs)=>{
            setResult(`<?php\n${rs.stdout}\n${rs.stderr}`);
        });
    }

    return (
        <div className="wrapper">
            <div className="row menu">
                <div className="col">
                    <Icon onClick={handleExec}>
                        <FiPlay />
                    </Icon>
                </div>
                <Link to="/config">
                    <div className="col">
                        <Icon>
                            <FiSettings />
                        </Icon>
                    </div>
                </Link>
            </div>
            <div className="row content-editors">
                <div className="col editor">
                    <AceEditor
                        style={{ width: '100%', height: '100%' }}
                        className="display-editor"
                        mode="php"
                        theme="dracula"
                        fontSize={16}
                        showPrintMargin={true}
                        highlightActiveLine={true}
                        value={code}
                        onChange={(value)=>setCode(value)}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }} />
                </div>
                <div className="col result">
                    <AceEditor
                        style={{ width: '100%', height: '100%' }}
                        className="display-editor"
                        mode="php"
                        theme="dracula"
                        placeholder="//Result here"
                        fontSize={16}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={result}
                        setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }} />
                </div>
            </div>
        </div>
    );
}
