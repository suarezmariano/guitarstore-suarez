import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a mi futura React-App
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/mariano-suarez-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          De paso te invito a visitar mi Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
