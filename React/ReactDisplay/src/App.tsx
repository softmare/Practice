import logo from './logo.svg';
import './App.css';
import TicTacTo from './tictacto/TicTacTo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here is Softmare's react projects!
        </p>
        <details>
          <summary> Play ticTacTo </summary>
          <TicTacTo></TicTacTo>
        </details>
      </header>
    </div>
 );
}

export default App;
