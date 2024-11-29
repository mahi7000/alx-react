import logo from '../assets/holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School Dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label inputMode='email'>Email: </label>
        <input type='email' />
        <label inputMode='password'>Password: </label>
        <input type='password' />
        <button>OK</button>
      </body>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
