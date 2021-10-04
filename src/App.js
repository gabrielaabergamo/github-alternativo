import { useEffect } from 'react';
import './App.css';
import apiGithub from './services/apiGithub';

function App() {

  useEffect(()=> {
    apiGithub.get('users/gabrielaabergamo')
      .then(response => response.data)
      .then(resposta => console.log(resposta))
      .catch(erro => console.log(erro))
  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
