"use client"

import { useRef } from "react"
// import grammar from '../lib/d2/grammars/d2.tmLangauage.json'
import MonacoEditor from "@monaco-editor/react"
import { editor } from "monaco-editor"
import { useTheme } from "next-themes"

import IEditor = editor.IEditor

export type ScriptEditorProps = {
  onEditorChange: (value: string) => void
}
const defaultSnippet = `
const formData = new FormData();
formData.append('username', 'David');
formData.append('password', '12345');
fetch('https://example.com/authenticate', {
    method: 'POST',
    body: formData
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
}); `

const ScriptEditor = ({ onEditorChange }: ScriptEditorProps) => {
  const editorRef = useRef<IEditor>(null)
  const { theme } = useTheme()
  function handleEditorChange(value, _) {
    onEditorChange(value)
  }

  function handleEditorDidMount(editor, monaco) {
    // here is the editors instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor
    monaco.languages.register({ id: "d2" })
    // monaco.languages.setMonarchTokensProvider('d2', grammar)
  }

  return (
    <>
      <MonacoEditor
        theme={theme === "dark" ? "vs-dark" : "light"}
        options={{
          minimap: { enabled: false },
        }}
        height="100%"
        defaultLanguage="javascript"
        defaultValue={defaultSnippet}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </>
  )
}
export default ScriptEditor
