import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label inputMode='email'>Email: </label>
        <input type='email' />
        <label inputMode='password'>Password: </label>
        <input type='password' />
        <button>OK</button>
      </div>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
