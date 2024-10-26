
export function themeSetting(monaco: { editor: { defineTheme: (arg0: string, arg1: { base: string; inherit: boolean; rules: { background: string; }[] | { background: string; }[] | { background: string; }[] | { background: string; }[] | { background: string; }[] | { background: string; }[]; colors: { 'editor.background': string; 'editor.foreground': string; 'editor.lineHighlightBackground': string; } | { 'editor.background': string; 'editor.foreground': string; 'editorCursor.foreground': string; 'editor.lineHighlightBackground': string; } | { 'editor.background': string; 'editor.foreground': string; 'editorCursor.foreground': string; 'editor.lineHighlightBackground': string; } | { 'editor.background': string; 'editor.foreground': string; 'editorCursor.foreground': string; 'editor.lineHighlightBackground': string; } | { 'editor.background': string; 'editor.foreground': string; 'editor.lineHighlightBackground': string; } | { 'editor.background': string; 'editor.foreground': string; 'editorCursor.foreground': string; 'editor.lineHighlightBackground': string; }; }) => void; }; }){

    monaco.editor.defineTheme('night-owl', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '011627' }],
        colors: {
          'editor.background': '#011627',
          'editor.foreground': '#d6deeb',
          'editor.lineHighlightBackground': '#011627',
        },
      });

      monaco.editor.defineTheme('dracula', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '282a36' }],
        colors: {
          'editor.background': '#282a36',
          'editor.foreground': '#f8f8f2',
          'editorCursor.foreground': '#ff79c6',
          'editor.lineHighlightBackground': '#44475a',
        },
      });
      monaco.editor.defineTheme('cobalt', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '002240' }],
        colors: {
          'editor.background': '#002240',
          'editor.foreground': '#FFFFFF',
          'editorCursor.foreground': '#FF9D00',
          'editor.lineHighlightBackground': '#00334b',
        },
      });

      
    //   Light themes
    monaco.editor.defineTheme('solarized-light', {
        base: 'vs',
        inherit: true,
        rules: [{ background: 'fdf6e3' }],
        colors: {
          'editor.background': '#fdf6e3',
          'editor.foreground': '#657b83',
          'editorCursor.foreground': '#073642',
          'editor.lineHighlightBackground': '#eee8d5',
        },
      });

      monaco.editor.defineTheme('github-light', {
        base: 'vs',
        inherit: true,
        rules: [{ background: 'ffffff' }],
        colors: {
          'editor.background': '#ffffff',
          'editor.foreground': '#24292e',
          'editor.lineHighlightBackground': '#f6f8fa',
        },
      });

    //    High Contrast Theme
    monaco.editor.defineTheme('one-dark-pro-hc', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '282c34' }],
        colors: {
          'editor.background': '#282c34',
          'editor.foreground': '#abb2bf',
          'editorCursor.foreground': '#528bff',
          'editor.lineHighlightBackground': '#2c313c',
        },
      });

      // Replace 'theme-name' with the desired theme.
}

