# TechScript = React + TypeScript + Vite + Shadcn UI + Monaco

### Installation
  npm install
### Run dev
  npm run dev


### Setup Monaco
  - Installation
    npm install @monaco-editor/react
  - to set the theme
    monaco.editor.setTheme('theme-name');

  - to create the theme
  ```
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
      })
  ```
  - 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
