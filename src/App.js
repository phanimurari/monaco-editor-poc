import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import { languageConfiguration } from './jsx';

class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
        this.editor = null;
    }

    editorDidMount = (editor, monaco) => {
        this.editor = editor;
      
        monacoEditor.languages.register({ id: 'javascript' });
        monacoEditor.languages.setLanguageConfiguration('javascript', languageConfiguration);
    };

    render() {
        const options = {
            selectOnLineNumbers: true,
            roundedSelection: false,
            readOnly: false,
            cursorStyle: 'line',
            automaticLayout: false,
        };
        return (
            <div>
                <MonacoEditor
                    width="800"
                    height="600"
                    language="javascript"
                    theme="vs-dark"
                    value={this.props.code}
                    options={options}
                    onChange={this.props.onChange}
                    editorDidMount={this.editorDidMount}
                />
            </div>
        );
    }
}

export default CodeEditor;


