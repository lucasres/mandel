import React from 'react';
import { FiPlay, FiSettings, FiCode } from "react-icons/fi";
import Icon from "../../components/Icon";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-php";

import './styles.css';

export default function Editor() {
  return (
    <div className="wrapper">
        <div className="row menu">
            <div className="col">
                <Icon >
                    <FiCode />
                </Icon>
            </div>
            <div className="col">
                <Icon>
                    <FiPlay />
                </Icon>
            </div>
            <div className="col">
                <Icon>
                    <FiSettings />
                </Icon>
            </div>
        </div>
        <div className="row content-editors">
            <div className="col editor">
            <AceEditor
                style={{width:'100%',height:'100%'}}
                className="display-editor"
                mode="php"
                theme="dracula"
                fontSize={16}
                showPrintMargin={true}
                highlightActiveLine={true}
                value={`<?php\n\t`}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 2,
                }}/>
            </div>
            <div className="col result">
                <AceEditor
                style={{width:'100%',height:'100%'}}
                className="display-editor"
                    mode="php"
                    theme="dracula"
                    placeholder="//Result here"
                    fontSize={16}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                        enableBasicAutocompletion: false,
                        enableLiveAutocompletion: false,
                        enableSnippets: false,
                        showLineNumbers: true,
                        tabSize: 2,
                    }}/>
            </div>
        </div>
    </div>
  );
}
