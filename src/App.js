import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Rand0m</code>
        </p>
        <a
          className="App-link"
          href="https://random-room.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ENTER CHAT
        </a>
      </header>
    </div>
  );
}

export default App;
