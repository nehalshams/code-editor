// src/App.tsx
import React from 'react';
import Layout from './Layout/Layout';
import Router from './Router/Router';
import './App.css'

const App: React.FC = () => {
  return (
    <div className='bg-light-gray1 max-h-svh overflow-hidden'>
      <Layout>
        <Router/>
      </Layout>
    </div>
  );
}

export default App;
