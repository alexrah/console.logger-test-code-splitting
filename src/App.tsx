import React from 'react';
import ReactDOM from 'react-dom/client'
import logger from '@alexrah/logger';


function App() {
  return (
    <h1>Logger: Bundle Analyzer app</h1>
  )
}

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App/>);