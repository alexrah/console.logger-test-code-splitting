import React from 'react';
import ReactDOM from 'react-dom/client'
import logger from '@alexrah/logger';


function App() {

  window.env = {} ;

  // window.env.LOG_ROCKET_ID = '';

  const lg = new logger();

  lg.i('Logger updated to 5.2.0!!!');

  console.info('testing logrocket');

  return (
    <h1>Logger: Bundle Analyzer app</h1>
  )
}

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App/>);