import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpandAlt, faCompressAlt } from '@fortawesome/free-solid-svg-icons'

import { Controlled as Editor } from 'react-codemirror2'

const TextEditor = ({languageName, value, onChange, language}) => {
    const [open, setOpen] = useState(true)

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-header">
                {languageName}
                <button
                    onClick={() => setOpen(prevOpen => !prevOpen)}
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <div className="editor-body">
                <Editor 
                    value={value}
                    onBeforeChange={onChange}
                    options={{
                        mode: language, 
                        theme: 'material',
                        lint: true,
                        lineWrapping: true,
                        lineNumbers: true
                    }}
                />
            </div>
        </div>
    )
};

export default TextEditor;
