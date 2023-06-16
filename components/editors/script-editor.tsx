"use client"

import { useRef } from "react"
// import grammar from '../lib/d2/grammars/d2.tmLangauage.json'
import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react"
import { editor } from "monaco-editor"
import { useTheme } from "next-themes"

import IEditor = editor.IEditor

export type ScriptEditorProps = {
  onEditorChange: (value: string) => void
}
const defaultSnippet = `
shape: sequence_diagram

user: User
application
Auth0_SDK: Auth0's SDK
Auth0_Authorization_Server: Auth0 Authorization Server
login_prompt: Login and Authorization Prompt
authorize_endpoint: /authorize endpoint
oauth_token_endpoint: /oauth/token endpoint
configured_login_options: Configured Login Options
consent_prompt: Consent Prompt
authorization_code: Single-use Authorization Code
client_ID: Application's Client ID
client_credentials: Application's Credentials
ID_token: ID Token
access_token: Access Token
refresh_token: Refresh Token (Optional)
API: API
requested_data: Requested Data

user -> application: Selects Login
application -> Auth0_SDK: SDK redirect
Auth0_SDK -> authorize_endpoint: Redirects User
authorize_endpoint -> login_prompt: Redirects User
login_prompt -> configured_login_options: User Authenticates
configured_login_options -> consent_prompt: May see Consent Prompt
consent_prompt -> authorize_endpoint: Lists Permissions Auth0 gives to Application
authorize_endpoint -> authorization_code: Redirects User with Code
authorization_code -> Auth0_SDK: Sends Authorization Code, Client ID, and Credentials
Auth0_SDK -> oauth_token_endpoint: Sends Authorization Code, Client ID, and Credentials
oauth_token_endpoint -> client_ID: Verifies Client ID
oauth_token_endpoint -> client_credentials: Verifies Credentials
oauth_token_endpoint -> ID_token: Responds with ID Token
oauth_token_endpoint -> access_token: Responds with Access Token
oauth_token_endpoint -> refresh_token: Responds with Refresh Token (Optional)
access_token -> API: Application calls API to access User info
API -> requested_data: Responds with Requested Data`

const ScriptEditor = ({ onEditorChange }: ScriptEditorProps) => {
  const editorRef = useRef<IEditor>(null)
  const { theme } = useTheme()
  const handleEditorChange: OnChange = (value, _) => {
    onEditorChange(value!)
  }

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    // here is the editors instance
    // you can store it in `useRef` for further usage
    // editorRef.current = editor
    // Register a new language
    monaco.languages.register({ id: "d2" })

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider("d2", {
      tokenizer: {
        root: [
          [/\[error.*/, "custom-error"],
          [/\[notice.*/, "custom-notice"],
          [/\[info.*/, "custom-info"],
          [/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
        ],
      },
    })

    // Define a new theme that contains only rules that match this language
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs",
      inherit: false,
      rules: [
        { token: "custom-info", foreground: "#808080" },
        { token: "custom-error", foreground: "#ff0000", fontStyle: "bold" },
        { token: "custom-notice", foreground: "#FFA500" },
        { token: "custom-date", foreground: "#008800" },
      ],
      colors: {
        "editor.foreground": "#000000",
      },
    })

    // Register a completion item provider for the new language
    monaco.languages.registerCompletionItemProvider("d2", {
      provideCompletionItems: (model, position) => {
        const word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        const suggestions = [
          {
            label: "simpleText",
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: "simpleText",
            range: range,
          },
          {
            label: "testing",
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: "testing(${1:condition})",
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: range,
          },
          {
            label: "ifelse",
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: [
              "if (${1:condition}) {",
              "\t$0",
              "} else {",
              "\t",
              "}",
            ].join("\n"),
            insertTextRules:
              monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: "If-Else Statement",
            range: range,
          },
        ]
        return { suggestions: suggestions }
      },
    })
    // monaco.languages.setMonarchTokensProvider('d2', grammar)
  }

  return (
    <>
      <MonacoEditor
        theme={theme === "light" ? "light" : "vs-dark"}
        options={{
          minimap: { enabled: false },
          fontSize: 12,
          fontFamily: "var(--font-mono)",
          fontLigatures: true,
          wordWrap: "on",
        }}
        height="100%"
        defaultLanguage="d2"
        defaultValue={defaultSnippet}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </>
  )
}
export default ScriptEditor
