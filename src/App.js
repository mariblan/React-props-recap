import logo from './logo.svg';
import './App.css';
// 1. Explain the folders and files you can delete.
// 2. How to do a component in React. https://reactjs.org/docs/components-and-props.html
// 3. What is JSX? https://reactjs.org/docs/introducing-jsx.html
// 4. What is a prop? https://reactjs.org/docs/components-and-props.html
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
