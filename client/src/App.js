import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h>Heyo </h>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/auth/google"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign In w/ Google
        </a>
      </header>
    </div>
  );
}

export default App;
