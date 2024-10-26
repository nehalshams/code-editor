/* eslint-disable @typescript-eslint/no-explicit-any */
import Editor from '@monaco-editor/react';

type Props = {
    language?: string;
    theme?: string;
    handleEditorChange?: (code: any) => void;
    code: any;
}
const MonacoEditor = ({ language, theme, handleEditorChange, code }: Props) => {

  return (
    <Editor
      height="90vh" // Adjust as needed
      width="100%"
      language={language || "javascript"} // Set the default language
      value={code}
      onChange={handleEditorChange}
      theme={ theme || "vs-dark" } // Options: "vs-dark", "vs-light", "hc-black"
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
};

export default MonacoEditor;
